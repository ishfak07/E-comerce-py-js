import json
from pathlib import Path
from typing import Any, Dict, Optional, Iterable, List
import threading
import uuid


class _InsertOneResult:
    def __init__(self, inserted_id: Any):
        self.inserted_id = inserted_id


class _UpdateOneResult:
    def __init__(self, matched: int, modified: int):
        self.matched_count = matched
        self.modified_count = modified


class _DeleteOneResult:
    def __init__(self, deleted: int):
        self.deleted_count = deleted


class _Cursor:
    def __init__(self, docs: List[Dict[str, Any]]):
        self._docs = docs

    def sort(self, key: str, direction: int):
        reverse = direction < 0
        try:
            self._docs.sort(key=lambda d: d.get(key, None), reverse=reverse)
        except Exception:
            pass
        return self

    def skip(self, n: int):
        self._docs = self._docs[n:]
        return self

    def limit(self, n: int):
        if n >= 0:
            self._docs = self._docs[:n]
        return self

    def __iter__(self):
        return iter(self._docs)


class FileCollection:
    def __init__(self, path: Path, name: str):
        self.path = path
        self.name = name
        self._lock = threading.Lock()
        self.path.parent.mkdir(parents=True, exist_ok=True)
        if not self.path.exists():
            self._write({"users": []})

    def _read(self) -> Dict[str, Any]:
        try:
            with self._lock:
                if not self.path.exists():
                    return {"users": []}
                return json.loads(self.path.read_text(encoding="utf-8"))
        except Exception:
            return {"users": []}

    def _write(self, data: Dict[str, Any]) -> None:
        with self._lock:
            self.path.write_text(json.dumps(data, indent=2), encoding="utf-8")

    # Minimal matcher supporting equality on top-level fields
    def _match(self, doc: Dict[str, Any], filter: Dict[str, Any]) -> bool:
        for k, v in filter.items():
            if doc.get(k) != v:
                return False
        return True

    def find_one(self, filter: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        data = self._read()
        for doc in data.get(self.name, []):
            if self._match(doc, filter):
                return doc
        return None

    def insert_one(self, doc: Dict[str, Any]) -> _InsertOneResult:
        data = self._read()
        docs = data.setdefault(self.name, [])
        # auto id
        if "_id" not in doc:
            doc["_id"] = str(uuid.uuid4())
        docs.append(doc)
        self._write(data)
        return _InsertOneResult(doc["_id"])

    # New methods for compatibility
    def find(self, filter: Optional[Dict[str, Any]] = None) -> _Cursor:
        data = self._read()
        docs = data.get(self.name, [])
        if filter:
            docs = [d for d in docs if self._match(d, filter)]
        return _Cursor(list(docs))

    def count_documents(self, filter: Optional[Dict[str, Any]] = None) -> int:
        data = self._read()
        docs = data.get(self.name, [])
        if filter:
            docs = [d for d in docs if self._match(d, filter)]
        return len(docs)

    def update_one(self, filter: Dict[str, Any], update: Dict[str, Any]) -> _UpdateOneResult:
        data = self._read()
        docs = data.get(self.name, [])
        matched = 0
        modified = 0
        set_doc = update.get("$set", {})
        for d in docs:
            if self._match(d, filter):
                matched += 1
                before = json.dumps(d, sort_keys=True)
                d.update(set_doc)
                after = json.dumps(d, sort_keys=True)
                if before != after:
                    modified += 1
                break
        self._write(data)
        return _UpdateOneResult(matched, modified)

    def delete_one(self, filter: Dict[str, Any]) -> _DeleteOneResult:
        data = self._read()
        docs = data.get(self.name, [])
        deleted = 0
        for i, d in enumerate(list(docs)):
            if self._match(d, filter):
                del docs[i]
                deleted = 1
                break
        self._write(data)
        return _DeleteOneResult(deleted)

    def aggregate(self, pipeline: List[Dict[str, Any]]):
        # Minimal support for [{ $match: ... }, { $group: { _id: None, sum: { $sum: '$total' } } }]
        data = self._read()
        docs = list(data.get(self.name, []))
        for stage in pipeline:
            if "$match" in stage:
                flt = stage["$match"]
                def ok(d):
                    for k, v in flt.items():
                        if isinstance(v, dict) and "$in" in v:
                            if d.get(k) not in v["$in"]:
                                return False
                        else:
                            if d.get(k) != v:
                                return False
                    return True
                docs = [d for d in docs if ok(d)]
            elif "$group" in stage:
                spec = stage["$group"]
                if "sum" in spec:
                    field = spec["sum"].get("$sum", "")
                    field = field[1:] if isinstance(field, str) and field.startswith("$") else field
                    total = 0.0
                    for d in docs:
                        try:
                            total += float(d.get(field, 0) or 0)
                        except Exception:
                            pass
                    return [{"_id": spec.get("_id"), "sum": total}]
        return []


class FileDatabase:
    def __init__(self, file_path: Path):
        self.file_path = file_path

    def get_collection(self, name: str) -> FileCollection:
        return FileCollection(self.file_path, name)

    # Compatibility for db.command('ping') used in health checks
    def command(self, name: str):
        if name == "ping":
            return {"ok": 1}
        return {"ok": 1}




