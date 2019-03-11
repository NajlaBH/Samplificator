package tn.bhntools.springsampling.controller.crud;

//Spring dependencies
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import tn.bhntools.springsampling.model.Staffuser;
import tn.bhntools.springsampling.repository.StaffuserRepository;


// -- Routing
@RestController
// -- Swagger
@Api(value="staffuser", description="Staff User manage", produces="application/json")
// -- Mapping
@RequestMapping("/api/v1")
public class StaffuserController {
    //--------------------------- Read operation [GET] :: BEGIN
    // Render :: list of all staffusers
    @Autowired
    private StaffuserRepository staffuserRepository;
    @GetMapping("/staffusers")
    public List<Staffuser> getAllStaffusers() {
        return staffuserRepository.findAll();
    }
    
    // Render :: one staffuser by id 
    @GetMapping("/staffusers/{id}")
    public ResponseEntity<Staffuser> getSaffuserById(@PathVariable(value = "id") Long staffuserId)
        throws ResourceNotFoundException {
        Staffuser staffuser = staffuserRepository.findById(staffuserId)
          .orElseThrow(() -> new ResourceNotFoundException("Staffuser not found for this id :: " + staffuserId));
        return ResponseEntity.ok().body(staffuser);
    }
    //--------------------------- Read operation [GET] :: END


    //--------------------------- Create and Save operation [POST] :: BEGIN
    @PostMapping("/staffusers")
    public Staffuser createStaffuser(@Valid @RequestBody Staffuser staffuser) {
        return staffuserRepository.save(staffuser);
    }
    //--------------------------- Read operation [POST] :: END


    //--------------------------- Edit/update operation [PUT] :: BEGIN
    @PutMapping("/staffusers/{id}")
    public ResponseEntity<Staffuser> updateStaffuser(@PathVariable(value = "id") Long staffuserId,
         @Valid @RequestBody Staffuser staffuserDetails) throws ResourceNotFoundException {
            Staffuser staffuser = staffuserRepository.findById(staffuserId)
        .orElseThrow(() -> new ResourceNotFoundException("Staffuser not found for this id :: " + staffuserId));

        staffuser.setEmailId(staffuserDetails.getEmailId());
        staffuser.setLastName(staffuserDetails.getLastName());
        staffuser.setFirstName(staffuserDetails.getFirstName());
        staffuser.setUserName(staffuserDetails.getUserName());
        staffuser.setTokenS(staffuserDetails.getTokenS());
        final Staffuser updatedStaffuser = staffuserRepository.save(staffuser);
        return ResponseEntity.ok(updatedStaffuser);
    }
    //--------------------------- Edit/update operation [PUT] :: END

    //--------------------------- Delete operation [DELETE] :: BEGIN
    @DeleteMapping("/staffusers/{id}")
    public Map<String, Boolean> deleteStaffuser(@PathVariable(value = "id") Long staffuserId)
         throws ResourceNotFoundException {
            Staffuser  staffuser = staffuserRepository.findById(staffuserId)
       .orElseThrow(() -> new ResourceNotFoundException("Staffuser not found for this id :: " + staffuserId));

       staffuserRepository.delete(staffuser);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    //--------------------------- Read operation [GET] :: BEGIN

    //--------------------------- REQUEST [SWAGGER] :: BEGIN
    @RequestMapping(value="/getStaffuser",method=RequestMethod.GET,produces="application/json")
    public ResponseEntity<Staffuser> getStaffuser(){
        Staffuser staffuser = new Staffuser();
        staffuser.setId(1);
        staffuser.setFirstName("firstNameTest");
        staffuser.setLastName("lastNameTest");
        staffuser.setUserName("userNametest");
        staffuser.setEmailId("emailId-test@gmail.com");
        staffuser.setTokenS("awesomtokentobereplaced");
        return new ResponseEntity<Staffuser>(staffuser, HttpStatus.OK);
    }
    //--------------------------- REQUEST [SWAGGER] :: END
}