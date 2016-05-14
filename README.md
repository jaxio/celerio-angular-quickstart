# celerio-angular-quickstart

Using [Celerio](http://www.jaxio.com/documentation/celerio), reverse an existing database schema and generate an Angular/PrimeNG/Spring CRUD web application.

The generated project leverages [PrimeNG](http://primefaces.org/primeng/), [Angular](http://angular.io/) and [Spring Boot](http://projects.spring.io/spring-boot/).

The generated code is based on [PrimeNG QuickStart](https://github.com/primefaces/primeng-quickstart) and Angular QuickStart.

## Prerequisites

* JDK 8
* Maven
* NPM

## Folders

* `pack-angular`: contains Celerio dynamic Templates (interpreted or copied by Celerio Engine)

* `src/main/config`: contains Celerio conf

* `src/main/sql`: contains SQL script that get reversed... you may add more tables/columns.


## 1/ Create/populate the H2 database schema, reverse it and generate the source code

From the root folder:

    mvn -Pdb,metadata,gen generate-sources

To delete all generated files, simply run:
    
    mvn -PcleanGen clean

It won't delete any generated file that was manually modified.

## 2/ Install JavaScript dependencies

    cd src/main/webapp
    npm install

Note: need to be run once, you may may skip it as you regenerate over and over. 

## 3/ Compile TypeScript files

    cd src/main/webapp
    npm run tsc

## 4/ Start the application

From the root folder:
    
    mvn spring-boot:run


## Contribute

You may contribute in several ways:

* By reviewing the generated code, are PrimeNG, Angular, Spring Data, Spring Boot, etc.  properly used ?
* By trying to generate a project using your own database schema
* By using the generated app and trying to find its limits

You may of course [report issues](https://github.com/jaxio/celerio-angular-quickstart/issues) and/or submit pull requests.


## TODOS

* [done] load from DB
* save to DB
* update to DB
* leverage more PrimeNG components
* support all column types including blob
* support one-to-many
* [in progress] support many-to-one
* support many-to-may
* validation
* i18n
* security
* etc...