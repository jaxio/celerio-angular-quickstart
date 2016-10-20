# Celerio Angular Quickstart

*Prerequisites:* 

* [Java Development Kit 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Maven 3.3.3](https://maven.apache.org/download.cgi) 
* [Npm 3.x.x](https://nodejs.org/en/)

You can either browse an already [generated quickstart][] web app or follow the instructions from the [quickstart][] folder 
to generate yourself the quickstart web app and run it!

* [About the project](#about-the-project)
* [About the generated code](#about-the-generated-code)
* [Contribute](#contribute)

## About the project

The main goal of this project is to provide solid code generation templates to generate advanced Angular 2 CRUD web applications.
You may of course modify the templates or create your own to fit your own needs.

It uses Celerio, an Open Source `code generator` tool for data-oriented applications. 

Here is the folder organization:

* [pack-angular](https://github.com/jaxio/celerio-angular-quickstart/blob/master/pack-angular) folder contains the Celerio code generation templates that are interpreted/copied by [Celerio](https://github.com/jaxio/celerio). 
* [quickstart-conf](https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart-conf) folder contains the minimal configuration that Celerio needs to generate this quickstart.
* [quickstart](https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart) folder is where you can generate the quickstart.
* [quickstart-generated](https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart-generated): folder is an already generated quickstart provided here so you can browse the source code even from your phone :)

## About the generated code

The generated Angular CRUD web app uses the following tecnologies/frameworks:

* [Angular 2.1.0](http://angular.io/) web framework: we try to always use the most recent version
* [TypeScript](https://www.typescriptlang.org/): much easier than javascript... 
* [PrimeNG beta.17](http://primefaces.org/primeng/): Angular 2 component library, we leverage file upload, auto-complete, calendar, tri-state checkbox, etc.
* [Spring Boot](http://projects.spring.io/spring-boot/): Java app backend, made easy, we generate REST endpoints, etc.
* [Spring Security](http://projects.spring.io/spring-security/): basic security by default
* [Spring Data JPA](http://projects.spring.io/spring-data-jpa/): leverage search by example, etc.

## Contribute

You may contribute in several ways:

* By reviewing the generated code, are PrimeNG, Angular, Spring Data, Spring Boot, etc.  properly used ?
* By trying to generate a project using your own database schema
* By using the generated app and trying to find its limits

You may of course [report issues](https://github.com/jaxio/celerio-angular-quickstart/issues) and/or submit pull requests.


[generated quickstart]: https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart-generated
[quickstart]: https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart
