::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCuDJG/VuhJ+eFUEcIBd8u1O3zDSBG4TH9YBUaCZiR65kWRePFiyqALBY5sd8G3zULq9pM0NGhJbcRyUOlcs/TYMv2eKVw==
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+JeA==
::cxY6rQJ7JhzQF1fEqQJQ
::ZQ05rAF9IBncCkqN+0xwdVs0
::ZQ05rAF9IAHYFVzEqQJQ
::eg0/rx1wNQPfEVWB+kM9LVsJDGQ=
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWDk=
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATElA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCuDJEmW+0gMKQtEcBeWPXmuSLAE7Yg=
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off  
cd /d "%~dp0"
cd Apache
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
sc query "emap" >nul
if errorlevel 1060 goto notexist
goto exist
:exist
echo "exist,need uninstall"
.\bin\httpd.exe -k stop -n "emap"
.\bin\httpd.exe -k start -n "emap"
goto end
:notexist
echo "not exist"
.\bin\httpd.exe -k install -n "emap"
.\bin\httpd.exe -k start -n "emap"
goto end
:end
start ..\nw.exe
exit