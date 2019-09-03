package tn.bhntools.springsampling;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

<<<<<<< HEAD
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.*;
import java.io.*;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import tn.bhntools.springsampling.model.Project;
import tn.bhntools.springsampling.service.ProjectJsonService;
=======


import springfox.documentation.swagger2.annotations.EnableSwagger2;

>>>>>>> 47e14e07a5e8b4bba84e56cc3bab441ee78abd60


//Add swagger
@EnableSwagger2

@SpringBootApplication
public class SpringsamplingApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringsamplingApplication.class, args);
	}

<<<<<<< HEAD
	@Bean
	CommandLineRunner runner(ProjectJsonService projectJsonService) {
		return args -> {
			// read json and write to db
			ObjectMapper mapper = new ObjectMapper();
			TypeReference<List<Project>> typeReference = new TypeReference<List<Project>>(){};
			InputStream inputStream = TypeReference.class.getResourceAsStream("/jsonfiles/projects.json");			
			try {
				List<Project> projects = mapper.readValue(inputStream,typeReference);
				//print project details (ok)
				//System.out.println(projects);
				projectJsonService.save(projects);
				System.out.println("Project Saved!");
			} catch (IOException e){
				System.out.println("Unable to save projects: " + e.getMessage());
			}
			//inputStream.close() ;
		};
	}
=======
>>>>>>> 47e14e07a5e8b4bba84e56cc3bab441ee78abd60
}
