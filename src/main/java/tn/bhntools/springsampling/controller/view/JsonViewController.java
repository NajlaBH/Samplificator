package tn.bhntools.springsampling.controller.view;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;



@Controller
@RequestMapping(value = "/jsonprojects/list")
public class JsonViewController {
    public String collaborator() {
    return "jsonprojects";
 }
}
