#!/bin/bash
echo "Enter The Domain Name (Avoid using WWW.): "
read  dom_name
echo "Read Port Number:"
read port_number
if [ $port_number -gt 10000 ]; then
        echo "Enter Valid Port Number"
        exit 1
fi
ssh -i Codeparva-dev.pem  ubuntu@13.232.104.125 << 'EOF'
cd /etc/nginx/sites-available
# sites_avail_path="$(pwd)"
# sudo cp www_example_com $dom_name
# sudo sed -i "s,example.com,$dom_name,g;s,1234,$port_number,g" "${sites_avail_path}"/$dom_name
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
EOF
