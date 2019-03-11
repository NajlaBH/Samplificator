FROM debian:latest

VOLUME /tmp

EXPOSE 8080
EXPOSE 5432
EXPOSE 5000
EXPOSE 3000


COPY /target/springsampling-0.0.1-SNAPSHOT.jar springsampling-0.0.1-SNAPSHOT.jar

RUN bash -c 'touch /springsampling-0.0.1-SNAPSHOT.jar'

#ENTRYPOINT ["java", "-jar", "springsampling-0.0.1-SNAPSHOT.jar"]
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/springsampling-0.0.1-SNAPSHOT.jar"]
