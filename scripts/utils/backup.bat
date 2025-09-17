@echo off
echo ========================================
echo FERC Story Database Backup
echo ========================================
echo.
echo Creating backup directory...
if not exist "backups" mkdir backups
echo.
echo Backing up SQLite database...
copy "server\prisma\dev.db" "backups\dev_%date:~-4,4%%date:~-10,2%%date:~-7,2%_%time:~0,2%%time:~3,2%%time:~6,2%.db"
echo.
echo Database backup completed!
echo Backup saved to: backups\dev_%date:~-4,4%%date:~-10,2%%date:~-7,2%_%time:~0,2%%time:~3,2%%time:~6,2%.db
