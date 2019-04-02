
sed -i '2d;3d' ~/.aws/config
sed -i '2d;3d' ~/.aws/credentials
echo 'Enter access Key:'
read access_key
echo 'enter secret Key:'
read secret_key
echo 'Enter region:'
read region
echo 'Enter output format:'
read output_format
echo 'region = '"${region}">> ~/.aws/config
echo 'output = '"${output_format}">> ~/.aws/config
echo 'aws_access_key_id = '"${access_key}">> ~/.aws/credentials									
echo 'aws_secret_access_key = '"${secret_key}">> ~/.aws/credentials
