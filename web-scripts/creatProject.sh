#!/bin/bash
echo "Enter The Project Name:"
read project_name
echo "enter the path to create the Project or press 'ENTER' to to select by defaultdirectory: "
read dest_path


if [ -z $dest_path ];then
	dest_path="$(pwd)"
fi

if [ -w $dest_path ];then
	cd $dest_path
fi



if [ -e $dest_path/$project_name ];then
	echo "project name already exists"
	
else
	
	mkdir $dest_path/$project_name
      	echo "project created successfully"
fi

#source=/home/sagar/web_scripts/Victor/
source=/home/sagar/web_scripts/Universal_Template/
#source="/home/sagar/web_scripts/Universal Template"



rsync -av --progress $source $dest_path/$project_name --exclude dist --exclude node_modules
echo completed

