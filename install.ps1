# DGA Skills Toolkit (dga-skills) installer wrapper (Windows PowerShell). Usage: .\install.ps1 [install|verify|self-check|list-backups|rollback|uninstall] [options]
$ErrorActionPreference = "Stop"
$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
$py = $null
foreach ($c in @("py", "python", "python3")) { if (Get-Command $c -ErrorAction SilentlyContinue) { $py = $c; break } }
if (-not $py) { Write-Error "Python 3.8+ is required (py/python not found)."; exit 2 }
$argsList = if ($args.Count -eq 0) { @("install") } else { $args }
if ($py -eq "py") { & py -3 "$dir\install.py" @argsList } else { & $py "$dir\install.py" @argsList }
exit $LASTEXITCODE
