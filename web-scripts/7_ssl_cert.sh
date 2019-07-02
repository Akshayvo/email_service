echo "enter domain name";
read domain_name
prefix_domain=$(echo www."${domain_name}")
echo $prefix_domain
dom_name_search="/etc/nginx/sites-enabled"
echo $dom_name_search
echo "${dom_name_search}"/"${domain_name}"
if ssh -i Codeparva-dev.pem ubuntu@13.232.104.125 [ -e "${dom_name_search}"/"${domain_name}" -o -e "${dom_name_search}"/"${prefix_domain}" ];then
	echo "domain name found"
	ssh -i Codeparva-dev.pem ubuntu@13.232.104.125 sudo certbot --nginx -n --domain ${domain_name} -m vinay@ulphitech.in --redirect
else
	echo "domain name not found"
	exit 1
fi
