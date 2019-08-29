package tn.bhntools.springsampling.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

//import javax.xml.ws.ServiceMode;

import tn.bhntools.springsampling.model.Staffuser;
import tn.bhntools.springsampling.repository.StaffuserRepository;

@Service
//@ServiceMode
@RequiredArgsConstructor
public class StaffuserService {
    private final StaffuserRepository staffuserRespository;

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
