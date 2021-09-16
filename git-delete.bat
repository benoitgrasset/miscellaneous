REM git config --global alias.remove '!C:/Users/benoit.grasset/DPS/KARREN_C/git-remove.bat'

git branch -D %1

git push origin --delete %1
