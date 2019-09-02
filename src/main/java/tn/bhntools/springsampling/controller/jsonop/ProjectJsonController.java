    
package tn.bhntools.springsampling.controller.jsonop;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

import tn.bhntools.springsampling.model.Project;
import tn.bhntools.springsampling.service.ProjectJsonService;

import java.util.*;


@RestController
@RequestMapping("/jsonprojects")
public class ProjectJsonController {
    //--------------------------- REQUEST [JSON] :: BEGIN

    private ProjectJsonService projectJsonService;

    public ProjectJsonController(ProjectJsonService projectJsonService) {
        this.projectJsonService = projectJsonService;
    }

    
    @GetMapping("/list")
    //public List<Project> list() {
    public List<Project> list() {    
        return projectJsonService.list();
    }
    //--------------------------- REQUEST [JSON] :: END
}