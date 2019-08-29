#!/bin/bash
OLDIFS=$IFSILE
IFS=","
cwd="$(pwd)"
while read name1 port1 version1
do
	name=$name1
	port=$port1
	version=$version1
	if [ $port -gt 10000 ]; then
		 destpath="/var/www/html/Staging"
		 
	else
		destpath="/var/www/html/Production"
		
	fi
	proceess_name=$(echo "${name}"-"${port}")
	backup_file=$(echo "${name}"_backup)	
	cd $destpath
	if [ -e "${name}"_dist ];then
		echo "file exist"
		sudo cp -r ${name}_dist ${backup_file}
 		sudo rm -r ${name}_dist
		sudo unzip ${cwd}/${name}.zip -d ${name}_dist
		sudo cp ${name}_dist/dist/server.js ${name}_dist/
		PORT="${port}" /home/sagar/.npm-global/bin/pm2 restart $proceess_name --max-memory-restart 175M
		
	else
		echo "file does not exist"				
		sudo unzip ${cwd}/${name}.zip -d ${name}_dist
		sudo cp ${name}_dist/dist/server.js ${name}_dist/
		PORT="${port}" /home/sagar/.npm-global/bin/pm2 start ${name}_dist/server.js --name=$proceess_name --max-memory-restart 175M
	fi
done < config.csv


