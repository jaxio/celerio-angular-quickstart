# Using MYSQL instead of H2 database

## Start MySql using Docker

    docker run -p 3306:3306 --name mysql -d -e MYSQL_ROOT_PASSWORD="manager" -e MYSQL_ROOT_HOST=% mysql/mysql-server:5.7 --init-connect="GRANT CREATE USER ON *.* TO 'root'@'%';FLUSH PRIVILEGES;"

## Wait for MySql to start

    docker logs -f mysql

Once you get 

    MySQL init process done. Ready for start up.

you can proceed with the next step

## Create angulardb database

    docker exec -it mysql mysql -uroot -pmanager
    
    create database angulardb;
    quit;

## Change the config in pom.xml

Edit the `pom.xml` to comment the H2 settings and uncomment the MySQL settings.
Then follow the instruction from the main `README.md` file.

## Clean up

Once done, you may stop and remove your my sql container

    docker stop mysql
    docker rm mysql


