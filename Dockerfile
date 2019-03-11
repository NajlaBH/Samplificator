FROM najlabioinfo/springb-reactjs-postgres:latest
EXPOSE 8080
EXPOSE 5432
EXPOSE 5000
EXPOSE 3000

ADD target/springsampling-0.0.1-SNAPSHOT.jar springsampling-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "springsampling-0.0.1-SNAPSHOT.jar"]
