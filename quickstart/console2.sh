#!/bin/bash
cd web
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations
npm install --save primeng@5.0.2
npm install --save font-awesome        
ng serve --proxy-config proxy.conf.json

