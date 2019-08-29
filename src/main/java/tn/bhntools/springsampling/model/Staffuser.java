package tn.bhntools.springsampling.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


@Data
@Entity
@Table(name = "staffusers")
public class Staffuser {

    private long id;
    //private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String userName;
    private String tokenS;
 
 
    public Staffuser(
        //long id,
        String firstName,
        String lastName,
        String emailId,
        String userName,
        String tokenS) 
    {
        //this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.userName = userName;
        this.tokenS = tokenS;
    }
    public Staffuser(){}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
 
    @Column(name = "first_name", nullable = false)
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
 
    @Column(name = "last_name", nullable = false)
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
 
     
    @Column(name = "user_name", nullable = false)
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Column(name = "token_s", nullable = false)
    public String getTokenS() {
        return tokenS;
    }
    public void setTokenS(String tokenS) {
        this.tokenS = tokenS;
    }

    @Column(columnDefinition = "text", name = "email_address", nullable = false)
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    @Override
    public String toString() {
        return "Employee [id=" + id +
         ", firstName=" + firstName +
         ", lastName=" + lastName +
         ", userName=" + userName +
         ", emailId=" + emailId + 
         ", tokenS=" + tokenS 
       + "]";
    }
 
}
