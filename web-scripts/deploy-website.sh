#!/bin/bash
echo "Enter the Folder path to find the file or press 'ENTER' to select the default directory: "
read  folder_path



if [ -z $folder_path ];then
	folder_path="$(pwd)"
	echo $pwd
fi

if [ -w $folder_path ];then
	cd $folder_path	
fi
cd ..
prev_folder="$(pwd)"


if [ -e $folder_path/server.js ];then
	echo "file exists in the folder"
	cp $folder_path/server.js $prev_folder/server.js
	
else
	echo "File doesnot exists"
	exit 1
	
	         
fi
echo $prev_folder
echo "Enter port number:"
read port_number
if [ $port_number -gt 10000 ]; then
        echo "Enter Valid Port Number"
        exit 1
fi
sed -i "s,|| 5000,|| $port_number,g" $prev_folder/server.js
echo "Enter app name:"
read app_name

pm2 start server.js --name=$app_name

