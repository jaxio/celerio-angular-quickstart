# Celerio Angular Quickstart

Browse an already [generated quickstart][] web app or follow the instructions from the [quickstart][] folder 
to generate an Angular 2.1.0 CRUD web application from an existing database schema. 
We provide a sample H2 database schema but you can use your own...

## About the project

This project's goal is to provide solid code generation templates for advanced Angular 2 CRUD web applications.
You may of course modify the templates or create your own.

It uses Celerio, an Open Source `code generator` tool for data-oriented applications.

Here is the folder organization:

* [pack-angular](https://github.com/jaxio/celerio-angular-quickstart/blob/master/pack-angular) folder contains the Celerio code generation templates that are interpreted/copied by [Celerio](https://github.com/jaxio/celerio). 
* [quickstart-conf](https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart-conf) folder contains the minimal configuration that Celerio needs to generate this quickstart.
* [quickstart](https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart) folder is where you can generate the quickstart.
* [quickstart-generated](https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart-generated): folder is an already generated quickstart provided here so you can browse the source code even from your phone :)

## About the generated code

The generated Angular CRUD web app uses the following tecnologies/frameworks:

* [Angular 2.1.0](http://angular.io/) web framework: we try to always use the most recent version
* [TypeScript](https://www.typescriptlang.org/): much easier than JavaScript... 
* [PrimeNG beta.17](http://primefaces.org/primeng/): Angular 2 components library, we leverage file upload, auto-complete, calendar, tri-state checkbox, server-side pagination, etc.
* [Spring Boot](http://projects.spring.io/spring-boot/): Java app backend, made easy, we generate REST endpoints, etc.
* [Spring Security](http://projects.spring.io/spring-security/): basic security by default
* [Spring Data JPA](http://projects.spring.io/spring-data-jpa/): leverage query by example, etc.

## Contribute

You may contribute in several ways:

* By reviewing the generated code, are PrimeNG, Angular, Spring Data, Spring Boot, etc.  properly used ?
* By trying to generate a project using your own database schema
* By using the generated app and trying to find its limits

You may of course [report issues](https://github.com/jaxio/celerio-angular-quickstart/issues) and/or submit pull requests.


[generated quickstart]: https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart-generated
[quickstart]: https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart
