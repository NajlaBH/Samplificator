package tn.bhntools.springsampling.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.bhntools.springsampling.model.Staffuser;

@Repository
public interface StaffuserRepository extends JpaRepository<Staffuser, Long>{

}