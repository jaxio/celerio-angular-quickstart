FROM fabric8/java-jboss-openjdk8-jdk:1.0.13

ENV JAVA_APP_JAR celerio-angular-quickstart.jar
ENV AB_OFF true
ENV JAVA_OPTIONS -Dspring.profiles.active=demowithdocker

EXPOSE 8080

COPY celerio-angular-quickstart.jar /app/
USER root
RUN mkdir /db
COPY angulardb.mv.db /db/
RUN chown -R jboss:jboss /db
USER jboss
VOLUME ["/db"]

