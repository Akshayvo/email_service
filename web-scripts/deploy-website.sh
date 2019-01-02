#!/bin/bash
echo "enter the folder path to find the file or press 'ENTER' to to select by defaultdirectory: "
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
	echo "file exists"
	cp $folder_path/server.js $prev_folder/server.js
	
else
	echo "File doesnot exists"
	exit 1
	
	         
fi
echo $prev_folder
echo "read port number:"
read port_number
sed -i "s,|| 5000,|| $port_number,g" $prev_folder/server.js
echo "red app name:"
read app_name

pm2 start server.js --name=$app_name

