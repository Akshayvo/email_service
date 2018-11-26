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
    
    git clone https://syrasoft.kilnhg.com/Code/Apps/SMSv11/Websites.git --branch develop --single-branch

    if [ $? -eq 0 ]
    then
	 echo "Login successful"

	 cd Websites

	 mkdir $pName

	 cp -a Universal\ Template/. $pName/

	 ls

	 cd $path/Websites/$pName
	 
	 npm install
	 
	 sed -i 's,ngStarterPack,'$pName',g' package.json

	  sed -i 's,ng-starter-pack,'$pName',g' package.json

	 sed -i  's,ngStarterPack,'$pName',g' angular.json

	 sed -i  's,ng-starter-pack,'$pName',g' package-lock.json

	 npm run build:ssr

	 npm run serve:ssr

	 open localhost:5000

    else
	echo "Login Fail"
    fi

   
else
    echo 'No write permission'
fi
