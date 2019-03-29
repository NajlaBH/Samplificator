package tn.bhntools.springsampling.controller.view;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;


@Controller
@RequestMapping(value = "/about")
public class AboutController {
    public String about() {
    return "about";
 }
}