#!/bin/bash
echo "Enter The Project Name:"
read project_name
output=$( echo "$project_name" | sed -r 's/([a-z0-9])([A-Z])/\1_\L\2/g')
echo $output
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
   			
source=/home/sagar/web_scripts/Universal_Template/
          
#create a project 
rsync -av --progress $source $dest_path/$project_name --exclude dist --exclude node_modules
#Renaming the project name
sed -i "s,ng-starter-pack,$output,g;s,ngStarterPack,$project_name,g" $dest_path/$project_name/angular.json
sed -i "s,ng-starter-pack,$output,g;s,ngStarterPack,$project_name,g" $dest_path/$project_name/package.json


# validate xml
echo "Enter The url"
read url
url_validator='(https?|ftp|file)://[-A-Za-z0-9\+&@#/%?=~_|!:,.;]*[-A-Za-z0-9\+&@#/%=~_|]'
if [[ $url =~ $url_validator ]]
then 
    	echo "Link valid"
else
    	echo "Link not valid"
	exit 1
fi	
if grep -E "$url" $dest_path/$project_name/src/sitemap.xml
then
	echo ' Url Found in Sitemap File'
else
	echo 'url Not Found'
	while true; do
    		read -p "anyhow Do you want to update the url?" yn
    		case $yn in
        		[Yy]* ) sed -i "s,https://stagingcatskill.syrasoft.com/,$url,g;" $dest_path/$project_name/src/sitemap.xml; break;;
        		[Nn]* ) exit;;
        		* ) echo "Please answer yes or no.";;
    		esac
	done
fi
