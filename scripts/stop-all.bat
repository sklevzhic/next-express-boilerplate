@echo off
echo ========================================
echo Stopping All FERC Story Environments
echo ========================================
echo.
echo Stopping development environment...
cd /d "%~dp0"
call dev\stop.bat
echo.
echo Stopping production environment...
call prod\stop.bat
