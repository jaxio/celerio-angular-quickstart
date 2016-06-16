# Celerio Angular RC.2 Quickstart

From an existing relational database, generate an Angular 2 CRUD web application.

This quickstart comes with an [H2 database example](https://github.com/jaxio/celerio-angular-quickstart/blob/master/src/main/sql/h2/01-create.sql), but you may try it with your [own database schema](#how-to-use-your-own-database).

Code generation is performed by [Celerio](https://github.com/jaxio/celerio), an Open Source code generator. Code generation templates are also Open Source. 

## Prerequisites

* [Java Development Kit 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Maven 3.3.3](https://maven.apache.org/download.cgi)
* [Npm 3.x.x](https://nodejs.org/en/) it comes with Node.js.

## Table of Contents

* [Generate it and run it (short version)](#generate-it-and-run-it)
* [Technology used by the generated app](#technology-used-by-the-generated-app)
* [Project structure](#project-structure)
* [Generate it and run it decomposed](#generate-it-and-run-it-decomposed)
* [Delete all generated files](#delete-all-generated-files)
* [How-to use your own database](#how-to-use-your-own-database)
* [Contribute](#contribute)

## Generate it and run it

From a console, run:

    git clone git@github.com:jaxio/celerio-angular-quickstart.git
    cd celerio-angular-quickstart
    mvn -Pdb,metadata,gen generate-sources
    cd src/main/webapp
    npm install
    npm run tsc
    cd ../../..
    mvn spring-boot:run

Then access it at [http://localhost:8080/](http://localhost:8080/)

## Technology used by the generated app

The generated source code relies on:

* [Angular 2 RC.2](http://angular.io/) web framework
* [TypeScript](https://www.typescriptlang.org/)
* [PrimeNG](http://primefaces.org/primeng/)
* [Spring Boot](http://projects.spring.io/spring-boot/)
* [Spring Security](http://projects.spring.io/spring-security/)
* [Spring Data JPA](http://projects.spring.io/spring-data-jpa/)

Code generation is done by [Celerio](http://www.jaxio.com/documentation/celerio), our Open Source code generator.

Some useful references: 

* [PrimeNG QuickStart](https://github.com/primefaces/primeng-quickstart)
* [Angular2 quickstart](https://angular.io/docs/ts/latest/quickstart.html)

## Project structure

Project mainly follows Maven's conventions.

* `pom.xml` Maven POM file
* `src/main/config`: contains Celerio conf
* `src/main/sql/h2`: contains [sample SQL script](https://github.com/jaxio/celerio-angular-quickstart/blob/master/src/main/sql/h2/01-create.sql) that get reversed... you may add more tables/columns.
* `pack-angular`: contains Celerio dynamic/static Templates (interpreted/copied by Celerio Engine). If you want to help us write templates, please take a look at [Celerio template doc](http://www.jaxio.com/documentation/celerio/templates.html) 

After running the code generation, you get more folders:

* `src/main/webapp/app`: the front end Angular components etc...
* `src/main/generated-java`: the backend, in Java
* etc...
 

## Generate it and run it decomposed

### 0: Get the quickstart

Clone this quickstart:

    git clone git@github.com:jaxio/celerio-angular-quickstart.git

### 1: Generate the source code

    cd celerio-angular-quickstart
    mvn -Pdb,metadata,gen generate-sources

It runs Maven with the following 3 profiles (defined in the `pom.xml` file):

* `db` profile creates the database in the `target/db` folder.
* `metadata` profile reverses the database. It creates the file `metadata.xml` under `src/main/config/celerio-maven-plugin`.
* `gen` profile generates the source code. It reads `metadata.xml`, the `celerio-maven-plugin.xml` configuration file, interprets the templates from `pack-angular` and copies the files from `pack-angular-static`.

For example, the template [entity.service.ts.e.vm](https://github.com/jaxio/celerio-angular-quickstart/blob/master/pack-angular/celerio/pack-angular/src/main/webapp/app/entities/entity.service.ts.e.vm)
leads to the creation of 1 file per entity: `src/main/webapp/app/entities/xxx/xxx.service.ts`

### 2: Install JavaScript dependencies

    cd src/main/webapp
    npm install

Note: need to be run once, you may may skip it as you regenerate over and over. 

### 3: Compile TypeScript files

The step 1 above has copied or generated some [TypeScript](https://www.typescriptlang.org/) files.
You must transpile (compile) them to JavaScript.

    npm run tsc

### 4: Start the application

    cd ../../..
    mvn spring-boot:run

Then access it at http://localhost:8080/

## Delete all generated files

When developing templates, you often need to delete the generated files.
To do so, from the root folder, simply run:
    
    mvn -PcleanGen clean

Note that it won't delete any generated file that was manually modified.

## How-to use your own database

`DO NOT TRY THIS WITH YOUR PRODUCTION DATABASE`

### 1: Clean up
 
Make sure your project is clean. Delete all previously generated files.

### 2: Edit pom.xml

You need to edit the [pom.xml](https://github.com/jaxio/celerio-angular-quickstart/blob/master/pom.xml) and change the JDBC settings
in order for Celerio to connect to your database and extract its metadata and for you application to access the database.
Search for `CHANGE THE PROPERTIES BELOW TO USE YOUR OWN DATABASE`.

Since you don't need to create the database, there is no need to activate the `db` profile. 
Make sure you comment it in your `pom.xml` to avoid any surprise.

### 3: Reverse your database 

To reverse your database, run:

    mvn -Pmetadata generate-sources
    
If all goes well it creates the file `metadata.xml` under `src/main/config/celerio-maven-plugin`.

### 4: Edit celerio-maven-plugin.xml

Edit the `src/main/config/celerio-maven-plugin/celerio-maven-plugin.xml` configuration file and comment or modify 
the `<entity-configs>` and `<sharedEnumConfigs>`. These are database schema specific conf.

Please refer to [Celerio Configuration](http://www.jaxio.com/documentation/celerio/configuration.html) for more info.

### 5: Generate the source code

To generate the source code, run:

    mvn -Pgen generate-sources

### 6: follow same steps as above

Follow the steps 2-3-4 from the `HOW TO RUN` section.


## Contribute

You may contribute in several ways:

* By reviewing the generated code, are PrimeNG, Angular, Spring Data, Spring Boot, etc.  properly used ?
* By trying to generate a project using your own database schema
* By using the generated app and trying to find its limits

You may of course [report issues](https://github.com/jaxio/celerio-angular-quickstart/issues) and/or submit pull requests.
