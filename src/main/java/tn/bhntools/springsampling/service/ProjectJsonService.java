package tn.bhntools.springsampling.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import tn.bhntools.springsampling.model.Project;
import tn.bhntools.springsampling.repository.ProjectRepository;

@Service
//@ServiceMode
//@RequiredArgsConstructor
public class ProjectJsonService {

    private ProjectRepository projectRepository;

    public ProjectJsonService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> list() {
        return projectRepository.findAll();
    }

    public Optional<Project> findById(Long id) {
        return projectRepository.findById(id);
    }

    /*public Project save(Project projectName) {
        return projectRepository.save(projectName);
    }*/
    
    public Iterable<Project> save(List<Project> projects) {
        return projectRepository.saveAll(projects);
    }

}