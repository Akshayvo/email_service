#!/bin/bash
#Renaming the project name

proj_under_space=$( echo "$camel_to_under" | sed 's/ /_/g')
proj_space_under=$( echo "$project_name" | sed 's/ /_/g')

cd "${dest_path}"/"${project_name}"
sed -i "s,ng-starter-pack,$proj_under_space,g;s,ngStarterPack,$proj_space_under,g" angular.json
sed -i "s,ng-starter-pack,$proj_under_space,g;s,ngStarterPack,$proj_space_under,g" package.json

