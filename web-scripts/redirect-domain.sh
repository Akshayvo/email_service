#!/bin/bash
echo "enter the domain name (without using WWW.): "
read  dom_name
cd /etc/nginx/sites-available
path="$(pwd)"
sudo cp test $dom_name
echo "read port number:"
read port_number
sudo sed -i "s,example.com,$dom_name,g;s,6008,$port_number,g" $path/$dom_name
cd ..
path2="$(pwd)"
sudo cp $path/$dom_name $path2/sites-enabled/$dom_name

# to copy the file from local system to remote system use the below code
#scp -i /home/sagar/Codeparva-dev.pem /etc/nginx/sites-available/test ubuntu@13.232.104.125:/home/ubuntu/
