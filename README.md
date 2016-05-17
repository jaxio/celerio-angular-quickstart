## celerio-angular-quickstart (Alpha)

This project demonstrates how to generate from an existing database schema an Angular 2 CRUD web application.

We provide a database schema example, but you may try it with your own schema (you need to edit the `pom.xml`).

The generated source code relies on:

* [Angular 2](http://angular.io/)
* [PrimeNG](http://primefaces.org/primeng/)
* [Spring Boot](http://projects.spring.io/spring-boot/)

Code generation is done by [Celerio](http://www.jaxio.com/documentation/celerio).

The generated source code is based on: 

* [PrimeNG QuickStart](https://github.com/primefaces/primeng-quickstart) and Angular QuickStart.
* Angular2 quickstart
* Some Jaxio's projects
* a bit of Jhipster

## Prerequisites

* JDK 8
* Maven 3
* NPM

## Folders organization

It mainly follows Maven conventions.

* `pack-angular`: contains Celerio dynamic Templates (interpreted or copied by Celerio Engine)

* `src/main/config`: contains Celerio conf

* `src/main/sql`: contains sample SQL script that get reversed... you may add more tables/columns.

# To run the web app, please follow these 4 easy steps:

## Step 1/ Create/populate the H2 database schema, reverse it and generate the source code

From the root folder:

    mvn -Pdb,metadata,gen generate-sources

To delete all generated files, simply run:
    
    mvn -PcleanGen clean

It won't delete any generated file that was manually modified.

## Step 2/ Install JavaScript dependencies

    cd src/main/webapp
    npm install

Note: need to be run once, you may may skip it as you regenerate over and over. 

## Step 3/ Compile TypeScript files

    cd src/main/webapp
    npm run tsc

## Step 4/ Start the application

From the root folder:
    
    mvn spring-boot:run

Then access it at http://localhost:8080/


## Contribute

You may contribute in several ways:

* By reviewing the generated code, are PrimeNG, Angular, Spring Data, Spring Boot, etc.  properly used ?
* By trying to generate a project using your own database schema
* By using the generated app and trying to find its limits

You may of course [report issues](https://github.com/jaxio/celerio-angular-quickstart/issues) and/or submit pull requests.

## TODOS

* one to one relation
* many to many relation
* use lazy data table
* support all column types including blob (file upload)
* support LocalDateTime 
* validation
* i18n
* security
* etc...