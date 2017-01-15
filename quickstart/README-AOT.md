# AOT Support

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
    npm install @angular/compiler-cli @angular/platform-server --save
    npm install rollup rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-uglify --save-dev
    node copy-dist-files
    npm run build:aot    
    cd ../../..
    mvn package
    cd target
    java -jar celerio-angular-quickstart.jar


Then open [http://localhost:8080/](http://localhost:8080/)
