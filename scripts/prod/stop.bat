@echo off
echo ========================================
echo Stopping FERC Story Production Environment
echo ========================================
echo.
echo Stopping all production services...
cd /d "%~dp0\..\.."
docker-compose -f docker-compose.yml down
echo.
echo Production environment stopped successfully!
