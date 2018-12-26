#!/bin/bash
echo "Enter The Project Name:"
read project_name
output=$( echo "$project_name" | sed -r 's/([a-z0-9])([A-Z])/\1_\L\2/g')
echo $output
echo "enter the path to create the Project or press 'ENTER' to to select by defaultdirectory: "
read  dest_path


if [ -z $dest_path ];then
	dest_path="$(pwd)"
fi

#if [ -w $dest_path ];then
	#cd $dest_path
	#dest_path
	
#fi



if [ -e $dest_path/$project_name ];then
	echo "project name already exists"
	
else
	
	mkdir $dest_path/$project_name
      	echo "project created successfully"         
fi
   			
source=/home/sagar/web_scripts/Universal_Template/
          
#create a project 
rsync -av --progress $source $dest_path/$project_name --exclude dist --exclude node_modules
#Renaming the project name
export output
export dest_path
export project_name
cwd="$(pwd)"
cd $cwd
sh ./Rename_proj_filename.sh
#sed -i "s,ng-starter-pack,$output,g;s,ngStarterPack,$project_name,g" $dest_path/$project_name/angular.json
#sed -i "s,ng-starter-pack,$output,g;s,ngStarterPack,$project_name,g" $dest_path/$project_name/package.json
cd $dest_path/$project_name
$(pwd | npm i)
while true; do
    		read -p "Do you want to start ?" yn
    		case $yn in
        		[Yy]* ) ng serve -o; break;;
        		[Nn]* ) exit;;
        		* ) echo "Please answer yes or no.";;
    		esac
	done

