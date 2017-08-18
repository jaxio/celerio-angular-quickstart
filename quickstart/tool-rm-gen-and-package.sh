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
npm install --save @angular/animations
npm install --save @angular/material@2.0.0-beta.8 @angular/cdk@2.0.0-beta.8
npm install --save primeng@4.1.3
npm install --save font-awesome
ng build --prod
cp dist/* ../src/main/resources/static
cd ..
mvn package
