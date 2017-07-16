#!/bin/bash
ng new web
rm web/src/app/app.module.ts web/src/app/app.component.* web/src/styles.css
mvn -Pdb,metadata,gen generate-sources
cd web
npm install --save @angular/animations
npm install --save @angular/material@2.0.0-beta.7
npm install --save primeng@4.1.0-rc.3
npm install --save font-awesome
ng build --prod
cp dist/* ../src/main/resources/static
cd ..
mvn package docker:build
