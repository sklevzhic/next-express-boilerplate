@echo off
echo ========================================
echo FERC Story Development Logs
echo ========================================
echo.
echo Showing logs for all services...
echo Press Ctrl+C to exit
echo.
cd /d "%~dp0\..\.."
docker-compose -f docker-compose.dev.yml logs -f
