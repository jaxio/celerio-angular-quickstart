#!/bin/bash
echo ""
echo "**************************************************************************************"
echo "*** THIS SCRIPT REMOVES SOME FOLDERS... RUN IT ONLY IF YOU UNDERSTAND WHAT IT DOES ***"
echo "**************************************************************************************"
echo ""
echo "This script deletes the previously generated src, web and target folders. Do you really want to do that?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) echo "OK let's go...";  break;;
        No ) exit;;
    esac
done
rm -r src web target WELCOME.TXT
ng new web
rm web/src/app/app.module.ts web/src/app/app.component.* web/src/styles.css
mvn -Pdb,metadata,gen generate-sources
cd web
npm i @angular/material @angular/cdk
npm i primeng@5.0.2
npm i font-awesome
ng build --prod
cp dist/* ../src/main/resources/static
cd ..
mvn package
