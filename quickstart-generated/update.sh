#!/bin/bash
rm -rf src web
ng new web
rm web/src/app/app.module.ts web/src/app/app.component.* web/src/styles.css
mvn -Pdb,metadata,gen generate-sources
rm WELCOME.TXT
rm -r .celerio
rm -r target
cd web
npm i @angular/material @angular/cdk
npm i primeng
npm i font-awesome
rm -r node_modules
cd ..
git add src web
git commit -m "sync with latest templates"
git push
