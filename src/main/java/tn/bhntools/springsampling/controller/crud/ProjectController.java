package tn.bhntools.springsampling.controller.crud;

//Spring dependencies
import java.util.HashMap;
import java.util.List;
import java.util.Map;
//import java.util.Date;
//import java.util.Calendar;
import java.util.GregorianCalendar;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


// Sawager 
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

//Modules imports
import tn.bhntools.springsampling.exception.crud.ResourceNotFoundException;
import tn.bhntools.springsampling.model.Project;
import tn.bhntools.springsampling.repository.ProjectRepository;


// -- Routing
@RestController
// -- Swagger
@Api(value="project", description="Project manage", produces="application/json")
// -- Mapping
@RequestMapping("/api/v1")
public class ProjectController {
    //--------------------------- Read operation [GET] :: BEGIN
    // Render :: list of all projects
    @Autowired
    private ProjectRepository projectRepository;
    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }
    
    // Render :: one project by id 
    @GetMapping("/projects/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable(value = "id") Long projectId)
        throws ResourceNotFoundException {
        Project project = projectRepository.findById(projectId)
          .orElseThrow(() -> new ResourceNotFoundException("Project not found for this id :: " + projectId));
        return ResponseEntity.ok().body(project);
    }
    //--------------------------- Read operation [GET] :: END


    //--------------------------- Create and Save operation [POST] :: BEGIN
    @PostMapping("/projects")
    public Project createProject(@Valid @RequestBody Project project) {
        return projectRepository.save(project);
    }
    //--------------------------- Read operation [POST] :: END


    //--------------------------- Edit/update operation [PUT] :: BEGIN
    @PutMapping("/projects/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable(value = "id") Long projectId,
         @Valid @RequestBody Project projectDetails) throws ResourceNotFoundException {
            Project project = projectRepository.findById(projectId)
        .orElseThrow(() -> new ResourceNotFoundException("Project not found for this id :: " + projectId));

        project.setProjectName(projectDetails.getProjectName());
        project.setProjectRef(projectDetails.getProjectRef());
        project.setProjectDescription(projectDetails.getProjectDescription());
        project.setStartDate(projectDetails.getStartDate());
        project.setEndDate(projectDetails.getEndDate());
        final Project updatedProject = projectRepository.save(project);
        return ResponseEntity.ok(updatedProject);
    }
    //--------------------------- Edit/update operation [PUT] :: END

    //--------------------------- Delete operation [DELETE] :: BEGIN
    @DeleteMapping("/projects/{id}")
    public Map<String, Boolean> deleteProject(@PathVariable(value = "id") Long projectId)
         throws ResourceNotFoundException {
            Project  project = projectRepository.findById(projectId)
       .orElseThrow(() -> new ResourceNotFoundException("Project not found for this id :: " + projectId));

       projectRepository.delete(project);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    //--------------------------- Read operation [GET] :: BEGIN

    //--------------------------- REQUEST [SWAGGER] :: BEGIN
    @RequestMapping(value="/getProject",method=RequestMethod.GET,produces="application/json")
    public ResponseEntity<Project> getProject(){
        Project project = new Project();
        project.setId(1);
        project.setProjectName("ProjectNameTest");
        project.setProjectRef("PR-MONO-0010329");
        project.setProjectDescription("Project test description.");

	//GregorianCalendar calendar = new GregorianCalendar();	
	GregorianCalendar startD = new GregorianCalendar(2018, 5, 28);
	GregorianCalendar endD = new GregorianCalendar(2018, 6, 28);
	/*Calendar cal = Calendar.getInstance();

	cal.set(2019,3,20);

	cal.set(2020,3,20);
	project.setStartDate(2019,3,3);
	project.setEndDate(2020,3,3);*/
        project.setStartDate(startD);
        project.setEndDate(endD);
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }
    //--------------------------- REQUEST [SWAGGER] :: END
}
