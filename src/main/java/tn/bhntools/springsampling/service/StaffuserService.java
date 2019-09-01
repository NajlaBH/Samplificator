package tn.bhntools.springsampling.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import tn.bhntools.springsampling.repository.StaffuserRespository;

@Service

@RequiredArgsConstructor
public class StaffuserService {
    private final StaffuserRespository staffuserRespository;

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
