echo "Enter user name :"
read user_name
echo "Enter destination ip addresss:"
read ip_addr
echo "Enter the path to the destination folder"
read remote_dest
echo "Enter the folder name"
read file_name
#cd /home/sagar/
echo "${remote_dest}"/"${file_name}"_dist
echo $(pwd)
#For key based login, please edit this line
#ssh -i Codeparva-dev.pem $user_name@$ip_addr
if ssh -i Codeparva-dev.pem $user_name@$ip_addr [ -e "${remote_dest}"/"${file_name}"_backup ];then
	echo "Hi"
	ssh -i Codeparva-dev.pem $user_name@$ip_addr rm -r "${remote_dest}"/"${file_name}"_dist 
	ssh -i Codeparva-dev.pem $user_name@$ip_addr mv "${remote_dest}"/"${file_name}"_backup "${remote_dest}"/"${file_name}"_dist
	#scp -i Codeparva-dev.pem "${dest_folder}" $user_name@$ip_addr:"${remote_dest}"
	#ssh -i Codeparva-dev.pem $user_name@$ip_addr unzip "${remote_dest}"/"${backup_file}" -d "${remote_dest}"/"${directory}"_backup
	#ssh -i Codeparva-dev.pem $user_name@$ip_addr rm "${remote_dest}"/"${backup_file}"
	#ssh -i Codeparva-dev.pem $user_name@$ip_addr unzip "${remote_dest}"/"${dest_folder}" -d "${remote_dest}"/"${directory}"_dist
	#ssh -i Codeparva-dev.pem $user_name@$ip_addr rm "${remote_dest}"/"${dest_folder}"
else
	#scp -i Codeparva-dev.pem "${backup_file}" $user_name@$ip_addr:"${remote_dest}"
	#scp -i Codeparva-dev.pem "${dest_folder}" $user_name@$ip_addr:"${remote_dest}"
	#ssh -i Codeparva-dev.pem $user_name@$ip_addr unzip "${remote_dest}"/"${dest_folder}" -d "${remote_dest}"/"${directory}"_dist
	#ssh -i Codeparva-dev.pem $user_name@$ip_addr unzip "${remote_dest}"/"${backup_file}" -d "${remote_dest}"/"${directory}"_backup
	#ssh -i Codeparva-dev.pem $user_name@$ip_addr rm "${remote_dest}"/"${backup_file}"
	#ssh -i Codeparva-dev.pem $user_name@$ip_addr rm "${remote_dest}"/"${dest_folder}"
	echo "Folder does not exist"
	exit 1
fi


