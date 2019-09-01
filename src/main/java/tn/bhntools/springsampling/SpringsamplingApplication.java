package tn.bhntools.springsampling;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



import springfox.documentation.swagger2.annotations.EnableSwagger2;



//Add swagger
@EnableSwagger2

@SpringBootApplication
public class SpringsamplingApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringsamplingApplication.class, args);
	}

}
