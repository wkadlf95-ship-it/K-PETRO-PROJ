@echo off
setlocal

set "CODEX_NODE_BIN=C:\Users\USER\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
set "CODEX_PNPM=C:\Users\USER\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd"

if not exist "%CODEX_NODE_BIN%\node.exe" goto :missing_runtime
if not exist "%CODEX_PNPM%" goto :missing_runtime

set "PATH=%CODEX_NODE_BIN%;%PATH%"
cd /d "%~dp0"

if not exist "node_modules" (
  echo [K-Petro] Installing project packages...
  call "%CODEX_PNPM%" install
  if errorlevel 1 exit /b 1
)

echo [K-Petro] Starting the React development server...
call "%CODEX_PNPM%" run dev
exit /b %errorlevel%

:missing_runtime
echo [K-Petro] Bundled Node.js runtime was not found.
echo Install Node.js LTS from https://nodejs.org/ and then run: npm install ^&^& npm run dev
exit /b 1
