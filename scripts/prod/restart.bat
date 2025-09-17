@echo off
echo ========================================
echo Restarting FERC Story Production Environment
echo ========================================
echo.
echo Stopping services...
cd /d "%~dp0\..\.."
docker-compose -f docker-compose.yml down
echo.
echo Starting services...
docker-compose -f docker-compose.yml up --build -d
echo.
echo Production environment restarted successfully!
echo Frontend: http://localhost:3000
echo Backend: http://localhost:3001
