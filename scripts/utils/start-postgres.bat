@echo off
echo ========================================
echo Starting PostgreSQL Database
echo ========================================
echo.
echo Starting PostgreSQL container...
cd /d "%~dp0\..\.."
docker-compose -f docker-compose.dev.yml up -d postgres
echo.
echo Waiting for PostgreSQL to be ready...
timeout /t 10 /nobreak > nul
echo.
echo PostgreSQL is ready!
echo Database: ferc_story
echo User: postgres
echo Password: password
echo Port: 5432
echo.
echo You can now run your backend server locally.
