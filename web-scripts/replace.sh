# echo "enter the port number"
# read port
# sed -i '5d' /home/sagar/websites/Websites/web-scripts/test.txt
# sed '/6/ a #Next line is the 6th line, not this${port}' /home/sagar/websites/Websites/web-scripts/test.txt
sed '6 a <LINE-TO-BE-ADDED>' /home/sagar/websites/Websites/web-scripts/test.txt