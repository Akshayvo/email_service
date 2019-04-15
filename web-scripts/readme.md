#script to create new project

Open the terminal in a directory where createProject.sh is present.

Run this script using command ". createProject.sh".

Enter the "project name" to create a new project.

Enter the destination path where the new project needs to be saved or press "ENTER" to select the current working directory as a destination path. 

Creates a new directory with the name of "project name" in the given destination path.

If the project name already exists in the above mentioned destination path the script will be ended with the "The same project name already exists in the given path" message.

Copies the required folder and files from the source path to a newly created project directory.

Re-Names the "ng-starter-pack and ngStarterPack" with new project name in the angular.json and package.json files.

Installs "npm" package in the project directory using the command "npm i ".

Asks input "Yes or No" to build the project and open the URL in the default browser.   

If input is "Y/y" the URL opens in the default browser.

if input is "N/n" ends the script.



#script to Re-name the project name

Open the terminal in a directory where Rename_proj_filename.sh is present.

Run this script using command ". Rename_proj_filename.sh".

Replaces the project name with the new project name in the angular.json and package.json files.



# script to pre-Deployment

Open the terminal in a directory where pre-deployment.sh is present.

Run this script using command ". pre-deployment.sh".

Enter the path to the project in which you want to search the dist folder.

If the given path is empty script will consider current working directory as a path.


If the "dist" folder is present in the given path script will create a zip folder. Directory name and the current date will be the zip folder name.

If the "dist" folder is not present in the given path. Displays "Folder does not exist"  message and asks user to create the   the folder?.

if users input is "N or n" ends the script.

if users input is "Y or y" creates the "dist" folder in the given path using the command "npm run build:SSR;" and creates a zip folder. Directory name and the current date will be the zip folder name.

Enter the username of the remote system.

Enter the destination IP address.

enter the path to save the zip folder in the remote system.

The zip folder will be copied to the given path in the remote system.



#script to Deploy the website.

Open the terminal in a directory where deploy-website.sh is present.

Run this script using the command ". deploy-website.sh".

Enter the path in which you want to search the  server.js file.

If the given path is empty script will consider current working directory as a path.

If the "server.js" file is present in the given path script will copy the "server.js" file to the previous directory of the given path.

If the file is not present in the given path ends the script.

Enter the valid port number

Replace the old port number with a new port number in the server.js file

Enter the app name 

start the pm2 process in the name of app name in the given port number.



#script to redirect domain to a port

Open the terminal in a directory where redirect-domain.sh is present.

Run this script using the command ". redirect-domain.sh".

Enter the Domain name (Avoid using www.).

Enter the valid port number to run the process.

create the file with the name of the given domain name in the sites-available directory and Copy the default file content to the newly created domain name file.

Replace the old domain and port number with the new domain name and new port number.

Test the "Nginx server" using the command "nginx -t".

If  "Nginx test is not successful" ends the script.

if "Nginx test is successful" copy the file from the sites-available directory to sites-enabled directory.

Reload the nginx using the command "systemctl reload nginx".  



#script to validate sitemap.xml

Open the terminal in a directory where validate_sitemap.sh is present.

Run this script using the command ". validate_sitemap.sh".

Enter the URL.

validate the URL if URL is not valid ends the script.

If URL is valid. Check whether the same URL is present in the sitemap.xml file

If URL is present in the file ends the script.

If URL is not present asks the user to update the old URL with the new URL in the file.

If user input is "Y or y" replace the old URL with the New URL in the sitemap.xml.

If user input is "N or n" ends the script.
























 









