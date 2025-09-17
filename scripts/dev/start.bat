@echo off
echo ========================================
echo Starting FERC Story Development Environment
echo ========================================
echo.
echo Starting services with hot reload...
cd /d "%~dp0\..\.."
docker-compose -f docker-compose.dev.yml up --build
