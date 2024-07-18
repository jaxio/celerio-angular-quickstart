
# Celerio Angular Quickstart

[![Build Status](https://travis-ci.org/jaxio/celerio-angular-quickstart.svg?branch=master)](https://travis-ci.org/jaxio/celerio-angular-quickstart)

This Angular quickstart uses Angular Cli to create an application skeleton and Celerio 
to **reverse your relational database schema** and **generate** the Angular + Spring Boot code 
to access your database content. The generated code covers much more areas than a simple Hello World app (search,
pagination, validation, auto-complete, etc.) 

**To generate an application from our sample database, follow the instructions from the [quickstart][] folder.**

Take a look at the generated code for yourself. Out of this 
[sample SQL schema](https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart-conf/01-create.sql)
and this 
[Celerio configuration](https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart-conf/celerio-maven-plugin.xml), 
we generate this [code](https://github.com/jaxio/celerio-angular-quickstart/tree/master/quickstart-generated), 
thanks to these [templates](https://github.com/jaxio/celerio-angular-quickstart/tree/master/pack-angular/celerio/pack-angular).

By default we use a sample H2 database schema. Using your own database schema and database engine 
is just a matter of configuration. Check as an example our instructions to [use MySQL][] instead of H2.

## What to expect?

To see it in action with no effort you may run our sample docker image or watch a screencast.
Remember, this is just a generated sample, the idea is to generate your own application using a more realistic database schema.

### Sample Docker image

To run the docker image of the sample generated webapp:

    docker run -p 8080:8080 nromanetti/celerio-angular-quickstart

Then access it at [localhost:8080](http://localhost:8080)

### Screencast

The following [screencast](https://www.youtube.com/watch?v=MBrgeykyTGs) shows you what to expect.

## About the project

Our goal is to provide solid code generation templates for advanced Angular CRUD web applications.

Code generation templates are written in [Velocity][] and interpreted by [Celerio][], an Open Source `code generator`
tool for data-oriented applications.

Here is the folder organization:

* [pack-angular](https://github.com/jaxio/celerio-angular-quickstart/blob/master/pack-angular) folder contains the Celerio code generation templates that are interpreted/copied by [Celerio][]. 
* [quickstart-conf](https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart-conf) folder contains the minimal configuration that Celerio needs to generate this quickstart.
* [quickstart](https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart) folder is where you can generate the quickstart.
* [quickstart-generated](https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart-generated): folder is an already generated quickstart provided here so you can browse the source code even from your phone :)

## About the generated code

The generated Angular CRUD web app uses the following technologies/frameworks:

* [Angular Cli](http://cli.angular.io/) a command line interface for Angular
* [Angular 5](http://angular.io/) web framework: we try to always use the most recent version
* [TypeScript](https://www.typescriptlang.org/): much easier than JavaScript... 
* [PrimeNG](http://primefaces.org/primeng/): Angular components library, we leverage file upload, auto-complete, calendar, tri-state checkbox, server-side pagination, etc.
* [Angular Material](https://material.angular.io/): Material Design components for Angular apps
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
[AOT instructions]: https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart/README-AOT.md
[use MySQL]: https://github.com/jaxio/celerio-angular-quickstart/blob/master/quickstart/README-MYSQL.md
[Celerio]: https://github.com/jaxio/celerio
[Velocity]: http://velocity.apache.org/

# Code Generation
Zontroy Code Generator is used to add code generation templates to the project. By minimizing the parts prone to code repetition with Zontroy code generator, I reduced the complexity of the project and made it more user-friendly. I generated code using zsif, zref and ziref file types. When I wanted to produce more than one repeated folder, I used the ziref file type by taking entities from the mssql database. I used zsif to prevent code repetition in the same file, and zref to create different files suitable for code repetition. For more information you can visit https://zontroy.com/.
# Ziref:

![image](https://github.com/tolgahanipek/celerio-angular-quickstart/assets/69389540/0fd9577d-4deb-4982-a2ee-20950f3e5258)

# Zref:
![image](https://github.com/tolgahanipek/celerio-angular-quickstart/assets/69389540/6e6bbca5-62ce-42fc-bfad-f22ea9de79f7)

# Zsif:
![image](https://github.com/tolgahanipek/celerio-angular-quickstart/assets/69389540/0cd22459-c596-4260-90da-b5d1e63943a8)


