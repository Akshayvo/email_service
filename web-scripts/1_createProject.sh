#!/bin/bash
echo "Enter The Project Name:"
read project_name
if [ ${#project_name} -gt 2 ];then
	continue
else
	echo "Project Name:$project_name doesn't have at least 3 characters"
	exit 1
fi
camel_to_under=$( echo "$project_name" | sed -r 's/([a-z0-9])([A-Z])/\1_\L\2/g')
cwd="$(pwd)"
echo "Enter the path to create the Project or Press 'ENTER' to select current working directory as a Path:"
read  dest_path


if [ -z "${dest_path}" ];then
	dest_path="$(pwd)"
fi

if [ -e "${dest_path}"/"${project_name}" ];then
	echo "The same project name already exists in the given path"
	exit 1
else
	cd "${dest_path}"
	mkdir "${project_name}"
      	echo "Project created successfully"         
fi
# To modify the template source path   			
source="/home/sagar/Websites/Universal_Template/"
if [ -d "$source" ]; then
	continue
else 
	echo "The source path doesn't exists"
	exit 1
fi        
# create a project 
rsync -av --progress "$source" "${dest_path}"/"${project_name}" --exclude dist --exclude node_modules
# Renaming the project name
export camel_to_under
export dest_path
export project_name

cd $cwd
sh ./2_Rename_proj_filename.sh

cd "${dest_path}"/"${project_name}"

while true; do
    		read -p "Do you want to start ?" yn
    		case $yn in
        		[Yy]* ) $(pwd | npm install);
				ng serve -o;
				break;;
        		[Nn]* ) exit;;
        		* ) echo "Please answer yes or no.";;
    		esac
	done

