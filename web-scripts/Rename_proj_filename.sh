#!/bin/bash
#Renaming the project name
echo $output
echo $dest_path
echo $project_name

sed -i "s,ng-starter-pack,$output,g;s,ngStarterPack,$project_name,g" $dest_path/$project_name/angular.json
sed -i "s,ng-starter-pack,$output,g;s,ngStarterPack,$project_name,g" $dest_path/$project_name/package.json

