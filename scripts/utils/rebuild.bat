@echo off
echo ========================================
echo Rebuilding All FERC Story Images
echo ========================================
echo.
echo Stopping all services...
cd /d "%~dp0\..\.."
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.yml down
echo.
echo Rebuilding development images...
docker-compose -f docker-compose.dev.yml build --no-cache
echo.
echo Rebuilding production images...
docker-compose -f docker-compose.yml build --no-cache
echo.
echo All images rebuilt successfully!
