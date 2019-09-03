package tn.bhntools.springsampling.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

<<<<<<< HEAD
//import javax.xml.ws.ServiceMode;

import tn.bhntools.springsampling.model.Staffuser;
import tn.bhntools.springsampling.repository.StaffuserRepository;

@Service
//@ServiceMode
@RequiredArgsConstructor
public class StaffuserService {
    private final StaffuserRepository staffuserRespository;
=======
import tn.bhntools.springsampling.repository.StaffuserRespository;

@Service

@RequiredArgsConstructor
public class StaffuserService {
    private final StaffuserRespository staffuserRespository;
>>>>>>> 47e14e07a5e8b4bba84e56cc3bab441ee78abd60

    public List<Staffuser> findAll() {
        return staffuserRespository.findAll();
    }

    public Optional<Staffuser> findById(Long id) {
        return staffuserRespository.findById(id);
    }

    public Staffuser save(Staffuser userName) {
        return staffuserRespository.save(userName);
    }

    public void deleteById(Long id) {
        staffuserRespository.deleteById(id);
    }
}
