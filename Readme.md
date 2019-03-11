### springsampling
- Template for Spring-boot * React-js * PostgreSql application.
>>> ##### This app contain one db(samplificatordb) / one table(staffusers) as a demo: [UserName]=simplifyuser/[Pass]=samplifypass .

#### - NB: 
###### * The sawgger dependency is already set. So you can start playing with the staffusers tab . :)
```sh 
#- [swagger-ui- url]: {$CONTAINER_IP}:8080/swagger-ui.html
```
###### * For further informations you can take a look in application.propeties file. 


##### * This application is :
 * Available here [DOCKER_HUB](https://cloud.docker.com/repository/docker/najlabioinfo/springb-reactjs-postgres) under the docker image below

```sh
docker pull najlabioinfo/springb-reactjs-postgres:latest
```
* If you prefere the docker-compose approach, please take a look at the docker folder.


##### * deployment

###### * 1. Spring boot 

```sh
./mnvw spring-boot:run
```

###### * 2. ReactJS app

```sh
yarn start
```

###### * 3. Within script available under the [docker] folder.


##### License 
###### * MIT

