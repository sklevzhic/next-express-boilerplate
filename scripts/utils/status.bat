@echo off
echo ========================================
echo FERC Story Docker Status
echo ========================================
echo.
echo Development Environment:
cd /d "%~dp0\..\.."
docker-compose -f docker-compose.dev.yml ps
echo.
echo Production Environment:
docker-compose -f docker-compose.yml ps
echo.
echo All Docker Containers:
docker ps -a
