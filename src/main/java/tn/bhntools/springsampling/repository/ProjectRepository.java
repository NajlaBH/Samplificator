package tn.bhntools.springsampling.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.bhntools.springsampling.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{

}