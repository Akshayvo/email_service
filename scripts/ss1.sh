#crearing new project and changing project-name
echo "Enter Project Name:"
read pName

echo "Enter the absolute path where you want to create the Project or press 'Enter' to create on same directory: "

read path

if [ -w $path ]
   then

alias goOnPath="cd $path"

goOnPath

ng new $pName --style=scss --routing
ls -l

alias changeDir="cd $pName"

changeDir

echo "Directory Changed"

sed -i 's,'"$pName"',ng-starter-pack,g' package.json

cat package.json

sed -i  's,'"$pName"',ng-starter-pack,g' angular.json

cat angular.json


else
    echo 'No write permission'
   fi
