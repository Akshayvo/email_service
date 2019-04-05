#!/bin/bash
# validate xml
echo "Enter the path to Search file or Press 'ENTER' to select current working directory as a Path: "
read  file_path

if [ -z $file_path ];then
	file_path="$(pwd)"
fi
path=$( echo "$file_path" )
if [ -e "${path}"/sitemap.xml ]; then
	continue
else 
	echo "The file doesn't exists "
	exit 1
fi     
cd $path
echo "Enter The url "
read url
url_validator='(https?|ftp|file)://[-A-Za-z0-9\+&@#/%?=~_|!:,.;]*[-A-Za-z0-9\+&@#/%=~_|]'
if [[ $url =~ $url_validator ]]
then 
    	echo "Given URL is valid"
else
    	echo "URL is not valid"
	exit 1
fi	
if grep -E "$url" "${path}"/sitemap.xml
then
	echo ' Url Found in The File'
	exit 1
else
	echo 'Url Not Found'
	while true; do
    		read -p "Do you want to update the url?" yn
    		case $yn in
        		[Yy]* ) sed -i "s,https://example.com,$url,g;" "${path}"/sitemap.xml; break;;
        		[Nn]* ) exit;;
        		* ) echo "Please answer yes or no.";;
    		esac
	done
fi
