set NODE_ENV=production
cmd.exe /c ".\node_modules\.bin\webpack --progress"
rem pause
xcopy /E /Y img\* public\img
.\node_modules\.bin\lite-server
