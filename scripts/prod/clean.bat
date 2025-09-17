@echo off
echo ========================================
echo Cleaning FERC Story Production Environment
echo ========================================
echo.
echo Stopping and removing containers...
cd /d "%~dp0\..\.."
docker-compose -f docker-compose.yml down
echo.
echo Removing unused images...
docker image prune -f
echo.
echo Cleaning completed!
