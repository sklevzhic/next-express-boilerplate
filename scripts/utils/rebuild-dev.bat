@echo off
echo ========================================
echo Rebuilding Development Images
echo ========================================
echo.
echo Stopping development services...
docker-compose -f docker-compose.dev.yml down
echo.
echo Rebuilding development images...
docker-compose -f docker-compose.dev.yml build --no-cache
echo.
echo Development images rebuilt successfully!
echo.
echo You can now start development with:
echo .\scripts\start-dev.bat
