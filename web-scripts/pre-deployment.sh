#!/bin/bash
echo "enter the path or press 'ENTER' to to select by defaultdirectory: "
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
	echo "folder exists"
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
echo "read user name :"
read user_name
echo "give destination ip addresss:"
read ip_addr
echo "enter the path of destination folder"
read remote_dest
cd $folder_path
#For key based login, please edit this line
scp $dest_folder $user_name@$ip_addr:$remote_dest


