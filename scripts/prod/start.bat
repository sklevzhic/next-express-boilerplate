@echo off
echo ========================================
echo Starting FERC Story Production Environment
echo ========================================
echo.
echo Starting production services...
cd /d "%~dp0\..\.."
docker-compose -f docker-compose.yml up --build -d
echo.
echo Production environment started successfully!
echo Frontend: http://localhost:3000
echo Backend: http://localhost:3001
