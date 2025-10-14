import json
from pathlib import Path
from typing import Any, Dict, Optional
import threading
import uuid


class _InsertOneResult:
    def __init__(self, inserted_id: Any):
        self.inserted_id = inserted_id


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


class FileDatabase:
    def __init__(self, file_path: Path):
        self.file_path = file_path

    def get_collection(self, name: str) -> FileCollection:
        return FileCollection(self.file_path, name)
