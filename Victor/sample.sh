#!/bin/bash
echo "Enter The Project Name:"
read project_name
echo "Enter the path to create the Project or press Enter to select  "
read path
destination=/home/sagar/web_scripts

if [ -e $destination/$project_name ];then
	
	echo "project name already exists"
	
else
	
	mkdir $destination/$project_name
      	echo "project created successfully"
fi
source=/home/sagar/web_scripts/Victor/
#destination=/home/sagar/web_scripts/$projectname
echo $path/$project_name
#cp -r $path/src/ $path/$project_name

#copy including Hidden files
#cp -a $path/src/. $path/$project_name

rsync -av --progress $source $destination/$project_name --exclude dist --exclude node_modules
#echo copied
