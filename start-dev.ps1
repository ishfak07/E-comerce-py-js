<#
start-dev.ps1

Opens two PowerShell windows and starts the backend (uvicorn) and frontend (Vite).
Usage: run this from the project root (or double-click in Explorer). If execution
policy blocks scripts, run PowerShell as Administrator or run:
  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Then:
  .\start-dev.ps1
#>

$root = Split-Path -Parent $MyInvocation.MyCommand.Path

# Backend command: activate venv, cd to backend and run our runner script (run_server.py)
$backendCmd = @"
Set-Location -Path '$root'
& "$root\.venv\Scripts\Activate.ps1"
Set-Location -Path "${root}\backend"
& "$root\.venv\Scripts\python.exe" "$root\backend\run_server.py"
"@

Start-Process -FilePath powershell -ArgumentList '-NoExit','-Command',$backendCmd

# Frontend command: cd into frontend and run vite dev server
$frontendCmd = @"
Set-Location -Path "${root}\frontend"
npm run dev
"@

Start-Process -FilePath powershell -ArgumentList '-NoExit','-Command',$frontendCmd

Write-Host "Started backend and frontend in new windows. Check their consoles for logs." -ForegroundColor Cyan
