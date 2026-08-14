@echo off
setlocal

set "CODEX_NODE_BIN=C:\Users\USER\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
set "CODEX_PNPM=C:\Users\USER\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd"
set "PATH=%CODEX_NODE_BIN%;%PATH%"
cd /d "%~dp0"

if not exist "node_modules" call "%CODEX_PNPM%" install
if errorlevel 1 exit /b 1
call "%CODEX_PNPM%" run build
exit /b %errorlevel%
