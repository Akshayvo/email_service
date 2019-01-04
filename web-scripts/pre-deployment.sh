#!/bin/bash
echo " Enter the path to the file  or ' PRESS ENTER ' to select The Default Directory: "
#variable to read the path
read  folder_path



if [ -z $folder_path ];then
	folder_path="$(pwd)"
	echo $pwd
fi

if [ -w $folder_path ];then
	cd $folder_path	
fi

directory=$( basename "${folder_path}")
timestamp=`date "+%d-%m-%Y"`

#file name format 
dest_folder=$(echo "$directory"_"$timestamp"_dist.zip)
if [ -e $folder_path/dist ];then
	echo "Folder already exists"
	# zip the file dist 
	zip -r $dest_folder dist/
else
	echo "Folder doesnot exists"
	while true; do
    		read -p "do you want to create the file?" yn
    		case $yn in
        		[Yy]* ) cd $folder_path
				npm run build:ssr;
				zip -r $dest_folder dist/;
				break;;
        		[Nn]* ) exit;;
        		* ) echo "Please answer yes or no.";;
    		esac
	done
	         
fi
echo "Enter user name :"
read user_name
echo "Enter destination ip addresss:"
read ip_addr
echo "Enter the path to the destination folder"
read remote_dest
cd $folder_path
#For key based login, please edit this line
scp $dest_folder $user_name@$ip_addr:$remote_dest


