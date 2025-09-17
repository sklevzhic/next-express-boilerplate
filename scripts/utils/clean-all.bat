@echo off
echo ========================================
echo Cleaning All FERC Story Environments
echo ========================================
echo.
echo Stopping all services...
cd /d "%~dp0\..\.."
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.yml down
echo.
echo Removing all containers...
docker container prune -f
echo.
echo Removing all unused images...
docker image prune -a -f
echo.
echo Removing all unused volumes...
docker volume prune -f
echo.
echo All environments cleaned successfully!
