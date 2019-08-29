#!/bin/bash
OLDIFS=$IFSILE
IFS=","
cwd="$(pwd)"
while read name1 port1 version1
do
	name=$name1
	port=$port1
	version=$version1
	#i=`expr $i + 1` 
	if [ $port -gt 10000 ]; then
		 destpath="/var/www/html/Staging"
		 
	else
		destpath="/var/www/html/Production"
		
	fi
	proceess_name=$(echo "${name}"-"${port}")
	cd $destpath
	if [ -e "${name}"_dist ];then
		echo "file exist"
		backup_file=$(echo "${name}"_backup)
		sudo cp -r ${destpath}/${name}_dist ${destpath}/${backup_file}
 		sudo rm -r ${destpath}/${name}_dist
		sudo cp /home/sagar/depoly/${name}.zip ${destpath}
		sudo unzip ${destpath}/${name}.zip -d ${destpath}/${name}_dist
		sudo rm ${destpath}/${name}.zip
		sudo cp ${destpath}/${name}_dist/dist/server.js ${destpath}/${name}_dist/
		PORT="${port}" /home/sagar/.npm-global/bin/pm2 restart ${destpath}/${name}_dist/server.js --name=$proceess_name --max-memory-restart 175M
		
	else
		echo "file does not exist"			
		echo $(pwd)
		echo $cwd		
		cd $cwd
		sudo unzip ${name}.zip -d ${destpath}/${name}_dist
		#sudo rm ${destpath}/${name}.zip
		echo "copied"
		sudo cp ${destpath}/${name}_dist/dist/server.js ${destpath}/${name}_dist/
		PORT="${port}" /home/sagar/.npm-global/bin/pm2 start ${destpath}/${name}_dist/server.js --name=$proceess_name --max-memory-restart 175M
	fi
done < test.csv


