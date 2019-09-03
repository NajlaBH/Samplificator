package tn.bhntools.springsampling.controller.view;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;



@Controller
@RequestMapping(value = "/api/project")
public class ProjetController {
    public String project() {
    return "project";
 }
}
