#!/bin/bash
echo "Enter project name:"
read proj_name
echo "Enter app name:"
read app_name

ssh -i Codeparva-dev.pem ubuntu@13.232.104.125 /home/ubuntu/.nvm/versions/node/v8.11.4/bin/pm2 start /home/ubuntu/sagar_test/"${proj_name}"_dist/dist/server.js --name=$app_name 
ssh -i Codeparva-dev.pem ubuntu@13.232.104.125 ./5_redirect-domain.sh
