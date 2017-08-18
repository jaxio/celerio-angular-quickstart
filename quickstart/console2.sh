#!/bin/bash
cd web
npm install --save @angular/material@2.0.0-beta.8 @angular/cdk@2.0.0-beta.8
npm install --save @angular/animations
npm install --save primeng@4.1.3
npm install --save font-awesome        
ng serve --proxy-config proxy.conf.json

