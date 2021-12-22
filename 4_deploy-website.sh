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
if [ $port_num -gt 10000 ]; then
        echo "Enter Valid Port Number"
        exit 1
fi



PORT=$port_num /home/ubuntu/.nvm/versions/node/v8.11.4/bin/pm2 start "${proj_path}"/"${proj_name}"_dist/dist/server.js --name=$app_name  --max-memory-restart 175M
# ssh -i Codeparva-dev.pem ubuntu@13.232.104.125 ./5_redirect-domain.sh
cd /etc/nginx/sites-available
sites_avail_path="$(pwd)"
sudo cp www_example_com $dom_name
sudo sed -i "s,example.com,$dom_name,g" "${sites_avail_path}"/$dom_name
sudo nginx -t 2>&1 |sudo tee somefile
grep_out_put="$(sudo grep "test is successful" somefile)"
if [[ -z $grep_out_put ]];then
        echo "Nginx Test Is Not Successful"
        exit 1
else
        echo "Nginx test Is Successful"
        cd ..
        nginx_path="$(pwd)"
        sudo cp "${sites_avail_path}"/$dom_name "${nginx_path}"/sites-enabled/$dom_name
        sudo systemctl reload nginx
fi