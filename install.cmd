@echo off
rem DGA Skills Toolkit (dga-skills) installer wrapper (Windows cmd). Usage: install.cmd [install|verify|self-check|list-backups|rollback|uninstall] [options]
set "DIR=%~dp0"
set "ARGS=%*"
if "%ARGS%"=="" set "ARGS=install"
where py >nul 2>nul && (py -3 "%DIR%install.py" %ARGS% & exit /b %ERRORLEVEL%)
where python >nul 2>nul && (python "%DIR%install.py" %ARGS% & exit /b %ERRORLEVEL%)
echo Python 3.8+ is required. & exit /b 2
