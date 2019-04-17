#!/bin/bash
echo " Enter the path to the dist folder or Press 'ENTER' to select current working directory as a Path: "
#variable to read the path
read  folder_path



if [ -z "${folder_path}" ];then
	folder_path="$(pwd)"
	echo $pwd
fi

if [ -w "${folder_path}" ];then
	cd "${folder_path}"	
fi

directory=$( basename "${folder_path}")
timestamp=`date "+%d-%m-%Y"`

#file name format 
#dest_folder=$(echo "${directory}"_"$timestamp"_dist.zip)
dest_folder=$(echo "${directory}"_dist.zip)
backup_file=$(echo "${directory}"_backup.zip)
echo "$backup_file"
dist_folder_path=$(echo "${folder_path}"dist/)
if [ -e "${folder_path}"dist ];then
	echo "Folder already exists"
	# zip the file dist 
	
		if [ -e "${dist_folder_path}"server.js ];then
			echo " server.js file exists in the dist folder"
			#cp "${folder_path}"/server.js "${prev_folder}"/server.js
	
		else
			echo "server.js File doesnot exists in the dist folder"
			exit 1
		fi
		echo "Enter port number:"
		read port_number
		if [ $port_number -gt 10000 ]; then
        		echo "Enter Valid Port Number"
        		exit 1
		fi
		sed -i "s,|| 5000,|| $port_number,g" "${dist_folder_path}"server.js
	zip -r "${dest_folder}" dist/
        zip -r "${backup_file}" dist/
else
	echo "Folder doesnot exists"
	while true; do
    		read -p "do you want to create the folder?" yn
    		case $yn in
        		[Yy]* ) cd "${folder_path}"
				npm run build:ssr;
					if [ -e "${dist_folder_path}"server.js ];then
						echo " server.js file exists in the dist folder"
						#cp "${folder_path}"/server.js "${prev_folder}"/server.js
	
					else
						echo "server.js File doesnot exists in the dist folder"
						exit 1
					fi
					echo "Enter port number:"
					read port_number
					if [ $port_number -gt 10000 ]; then
        					echo "Enter Valid Port Number"
        					exit 1
					fi
					sed -i "s,|| 5000,|| $port_number,g" "${dist_folder_path}"server.js
				zip -r "${dest_folder}" dist/;

				zip -r "${backup_file}" dist/;
				break;;
        		[Nn]* ) exit;;
        		* ) echo "Please answer yes or no.";;
    		esac
	done
	         
fi

echo "Enter user name :"
read user_name
echo "Enter destination ip addresss:"
read ip_addr
echo "Enter the path to the destination folder"
read remote_dest
cd "${folder_path}"
#cd /home/sagar/
echo $(pwd)
#For key based login, please edit this line
#ssh -i Codeparva-dev.pem $user_name@$ip_addr
if ssh -i Codeparva-dev.pem $user_name@$ip_addr [ -e "${remote_dest}"/"${backup_file}" ];then
	echo "Hi"
	ssh -i Codeparva-dev.pem $user_name@$ip_addr rm "${remote_dest}"/"${backup_file}" 
	ssh -i Codeparva-dev.pem $user_name@$ip_addr mv "${remote_dest}"/"${dest_folder}" "${remote_dest}"/"${backup_file}"
	scp -i Codeparva-dev.pem "${dest_folder}" $user_name@$ip_addr:"${remote_dest}"
	ssh -i Codeparva-dev.pem $user_name@$ip_addr unzip "${remote_dest}"/"${backup_file}" -d "${remote_dest}"/"${directory}"_backup
	ssh -i Codeparva-dev.pem $user_name@$ip_addr rm "${remote_dest}"/"${backup_file}"
	ssh -i Codeparva-dev.pem $user_name@$ip_addr unzip "${remote_dest}"/"${dest_folder}" -d "${remote_dest}"/"${directory}"_dist
	ssh -i Codeparva-dev.pem $user_name@$ip_addr rm "${remote_dest}"/"${dest_folder}"
else
	scp -i Codeparva-dev.pem "${backup_file}" $user_name@$ip_addr:"${remote_dest}"
	scp -i Codeparva-dev.pem "${dest_folder}" $user_name@$ip_addr:"${remote_dest}"
	ssh -i Codeparva-dev.pem $user_name@$ip_addr unzip "${remote_dest}"/"${dest_folder}" -d "${remote_dest}"/"${directory}"_dist
	ssh -i Codeparva-dev.pem $user_name@$ip_addr unzip "${remote_dest}"/"${backup_file}" -d "${remote_dest}"/"${directory}"_backup
	ssh -i Codeparva-dev.pem $user_name@$ip_addr rm "${remote_dest}"/"${backup_file}"
	ssh -i Codeparva-dev.pem $user_name@$ip_addr rm "${remote_dest}"/"${dest_folder}"
fi
