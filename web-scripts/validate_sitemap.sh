#!/bin/bash
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
        		[Yy]* ) sed -i "s,https://stagingstoner-trail.syrasoft.com/,$url,g;" $dest_path/$project_name/src/sitemap.xml; break;;
        		[Nn]* ) exit;;
        		* ) echo "Please answer yes or no.";;
    		esac
	done
fi
