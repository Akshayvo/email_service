echo "enter the source path:"
read source_path
echo "enter the destination path"
read dest_path
if [ -d "$source_path" ]; then
	aws s3 cp "${source_path}" s3://"${dest_path}" --recursive
else
	aws s3 cp "${source_path}" s3://"${dest_path}"
fi

