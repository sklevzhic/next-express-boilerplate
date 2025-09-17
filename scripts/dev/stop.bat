@echo off
echo ========================================
echo Stopping FERC Story Development Environment
echo ========================================
echo.
echo Stopping all development services...
cd /d "%~dp0\..\.."
docker-compose -f docker-compose.dev.yml down
echo.
echo Development environment stopped successfully!
