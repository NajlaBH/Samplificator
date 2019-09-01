package tn.bhntools.springsampling.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//import java.util.Date;
import java.util.Calendar;
import java.time.Instant;

import lombok.Data;

// import jsons deps
import com.fasterxml.jackson.annotation.JsonFormat;





@Data
@Entity
@Table(name = "projects")
public class Project {

    private long id;

    private String projectId;
    private String projectRef;
    private String projectName;
    private String projectDescription;
    private Calendar startDate;
    private Calendar endDate;


    public Project(
        String projectId,
        String projectRef,
        String projectName,
        String projectDescription, 
        Calendar startDate,
        Calendar endDate) 
    {
        this.projectId = projectId;
        this.projectRef = projectRef;
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    
    public Project(){}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
 
    @Column(name = "project_name", nullable = false)
    public String getProjectName() {
        return projectName;
    }
    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }
 
    @Column(name = "project_ref", nullable = false)
    public String getProjectRef() {
        return projectRef;
    }
    public void setProjectRef(String projectRef) {
        this.projectRef = projectRef;
    }

    
    @Column(name = "project_description", nullable = false)
    public String getProjectDescription() {
        return projectDescription;
    }
    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }


    @Column(name = "start_date", nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    public Calendar getStartDate() {
        return startDate;
    }
    public void setStartDate(Calendar startDate) {
        this.startDate = startDate;
    }

  
    @Column(name = "end_date", nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    public Calendar getEndDate() {
        return endDate;
    }
    public void setEndDate(Calendar endDate) {
        this.endDate = endDate;
    }

    @Override
    public String toString() {
        /*dateFormatter = new SimpleDateFormat("dd-MM-yyyy");
        Date startDateS = dateFormatter.parse(startDate);
        Date endDateS = dateFormatter.parse(endtDate);*/
        return "Project [id=" + id +
         ", projectName=" + projectName +
         ", projectRef=" + projectRef +
         ", projectDescription=" + projectDescription +
         ", startDate=" + startDate + 
         ", endDate=" + endDate
       + "]";
    }
}