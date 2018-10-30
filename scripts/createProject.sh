#crearing new project and changing project-name

echo "Enter Project Name:"

read pName

echo "Enter the absolute path where you want to create the Project or press 'Enter' to create on same directory: "

read path

if [ -z $path ]
then
    path="$(pwd)"
fi


if [ -w $path ]

then
    cd $path
    
    git clone "https://syrasoft.kilnhg.com/Code/Apps/SMSv11/Websites.git"

    if [ $? -eq 0 ]
    then
	 echo "Login successful"

	 mv Websites $pName

	 ls
	 
	 cd $path/$pName

	 npm install
	 
	 sed -i 's,storage-space-template,ng-starter-pack,g' package.json

	 sed -i  's,StorageSpaceTemplate,ng-starter-pack,g' angular.json

	 sed -i  's,storage-space-template,ng-starter-pack,g' package-lock.json

	 ng serve --port 3200 --open

    else
	echo "Login Fail"
    fi

   
else
    echo 'No write permission'
fi
