import os
import sys
from pathlib import Path

# Ensure the backend root is on sys.path so that `import app` works in any CWD.
BACKEND_DIR = Path(__file__).resolve().parent.parent
REPO_ROOT = BACKEND_DIR.parent

for p in (str(BACKEND_DIR), str(REPO_ROOT)):
	if p not in sys.path:
		sys.path.insert(0, p)

# Validate that the app package is importable; if not, raise a clear error.
try:
	import app  # noqa: F401
except ModuleNotFoundError as exc:
	raise ModuleNotFoundError(
		f"Failed to import 'app'. sys.path={sys.path}. BACKEND_DIR={BACKEND_DIR}"
	) from exc