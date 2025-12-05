@echo off
echo ========================================
echo   Podchemy Supreme - Production Server
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install --production
    echo.
)

echo Starting production server...
echo Server will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm start
