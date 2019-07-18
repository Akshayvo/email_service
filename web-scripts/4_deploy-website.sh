#!/bin/bash
echo "Enter project name:"
read proj_name
echo "Enter app name:"
read app_name
echo "Enter the project folder path"
read proj_path
echo "Enter The Domain Name (Avoid using WWW.): "
read  dom_name
echo "Enter the port number"
read port_num
sites_avail_path="/etc/nginx/sites-available"
ssh -i Codeparva-dev.pem ubuntu@13.232.104.125 cp /etc/nginx/sites-available/www_example_com /etc/nginx/sites-available/$dom_name
ssh -i Codeparva-dev.pem ubuntu@13.232.104.125 sed -i "s,example.com,$dom_name,g;s,1234,$port_num,g" "${sites_avail_path}"/$dom_name

ssh -i Codeparva-dev.pem ubuntu@13.232.104.125 PORT="${port_num}" /home/ubuntu/.nvm/versions/node/v8.11.4/bin/pm2 start "${proj_path}"/"${proj_name}"_dist/dist/server.js --name=$app_name --max-memory-restart 175M
ssh -i Codeparva-dev.pem ubuntu@13.232.104.125 ./5_redirect-domain.sh
