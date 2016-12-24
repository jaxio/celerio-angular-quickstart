
*Prerequisites:* 

* [Java Development Kit 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Maven 3.3.3](https://maven.apache.org/download.cgi) 
* [Npm 3.x.x](https://nodejs.org/en/)

### Run these commands to generate and run an Angular 2.4.0 web app:

By default this project reverses a [sample database schema](https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart-conf/01-create.sql).
You may of course [reverse your own database schema](#how-to-use-your-own-database).

> **Note**: Downloading Maven dependencies + JavaScript dependencies may be long, so please be patient the first time you run these commands.

    git clone https://github.com/jaxio/celerio-angular-quickstart.git
    cd celerio-angular-quickstart/quickstart
    mvn -Pdb,metadata,gen generate-sources
    cd src/main/webapp
    npm install
    npm run tsc
    cd ../../..
    mvn spring-boot:run

Then open [http://localhost:8080/](http://localhost:8080/)

* Commands above are explained [here](#generate-it-and-run-it)
* [Delete all generated files](#delete-all-generated-files)
* [How-to use your own database](#how-to-use-your-own-database)

## Generate it and run it

### 0: Get the quickstart

Clone this quickstart:

    git clone https://github.com/jaxio/celerio-angular-quickstart.git

### 1: Generate the source code

    cd celerio-angular-quickstart/quickstart
    mvn -Pdb,metadata,gen generate-sources

It runs Maven with the following 3 profiles (defined in the [pom.xml][] file):

* `db` profile creates the H2 database in the `target/db` folder.
* `metadata` profile reverses the database using Celerio. It creates the file `metadata.xml` under `src/main/config/celerio-maven-plugin`.
* `gen` profile generates the source code using Celerio. It reads `metadata.xml`, the `celerio-maven-plugin.xml` configuration file, interprets/copies the templates/files from `pack-angular`.

For example, the template [entity.service.ts.e.vm][] leads to the creation of 1 file per entity: `src/main/webapp/app/entities/xxx/xxx.service.ts`

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

You need to edit the [pom.xml][] and change the JDBC settings
in order for Celerio to connect to your database and extract its metadata and for you application to access the database.
Search for `CHANGE THE PROPERTIES BELOW TO USE YOUR OWN DATABASE`.

Since you don't need to create the database, there is no need to activate the `db` profile. 
Make sure you comment it in your [pom.xml][] to avoid any surprise.

### 3: Reverse your database 

To reverse your database, run:

    mvn -Pmetadata generate-sources
    
If all goes well it creates the file `metadata.xml` under `src/main/config/celerio-maven-plugin`.

### 4: Edit celerio-maven-plugin.xml

Edit the `quickstart-conf/celerio-maven-plugin.xml` configuration file and comment or modify 
the `<entity-configs>` and `<sharedEnumConfigs>`. These are database schema specific conf.

Please refer to [Celerio Configuration](http://www.jaxio.com/documentation/celerio/configuration.html) for more info.

### 5: Generate the source code

To generate the source code, run:

    mvn -Pgen generate-sources

### 6: follow same steps as above

Follow the steps 2-3-4 from the [Generate it and run it](#generate-it-and-run-it) section.


[pom.xml]: https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart/pom.xml
[entity.service.ts.e.vm]: https://github.com/jaxio/celerio-angular-quickstart/blob/master/pack-angular/celerio/pack-angular/src/main/webapp/app/entities/entity.service.ts.e.vm
