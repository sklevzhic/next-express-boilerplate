@echo off
echo ========================================
echo Restarting FERC Story Development Environment
echo ========================================
echo.
echo Stopping services...
cd /d "%~dp0\..\.."
docker-compose -f docker-compose.dev.yml down
echo.
echo Starting services with hot reload...
docker-compose -f docker-compose.dev.yml up --build
