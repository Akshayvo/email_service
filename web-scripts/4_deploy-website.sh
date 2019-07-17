#!/bin/bash
echo "Enter project name:"
read proj_name
echo "Enter app name:"
read app_name
echo "Enter the project folder path"
read proj_path
echo "Enter the port number"
read port_num

ssh -i Codeparva-dev.pem ubuntu@13.232.104.125 PORT="${port_num}" /home/ubuntu/.nvm/versions/node/v8.11.4/bin/pm2 start "${proj_path}"/"${proj_name}"_dist/dist/server.js --name=$app_name --max-memory-restart 175M
ssh -i Codeparva-dev.pem ubuntu@13.232.104.125 ./5_redirect-domain.sh
