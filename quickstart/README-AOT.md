# Ahead-of-Time (AOT) support with ngc (doc in progress)

*Prerequisites:* 

* [Java Development Kit 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Maven 3.3.3](https://maven.apache.org/download.cgi) 
* [Npm 3.x.x](https://nodejs.org/en/)

*Recommended read:*

* [AOT Cookbook from angular doc](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)

As soon as you want to ship your webapp into production, you need to package somehow.
Below we gives you the basic commands to:

- precompile all the typescript files (aot)
- do some 'tree shaking' (excluding stuff we don't need)
- create a single javascript file (build.js)
- package everything in a jar file and execute it.

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
    npm run build:aot    
    cd ../../..
    mvn -DskipTests package
    cd target
    java -jar celerio-angular-quickstart.jar

Then open [http://localhost:8080/](http://localhost:8080/)

NOTE: make sure you execute the jar from the target directory 
otherwise springboot picks the index.html from the file system.

This is a work in progress...
