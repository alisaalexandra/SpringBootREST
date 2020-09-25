package com.sda.javacraiova.berecap.controller;

import com.sda.javacraiova.berecap.model.UserType;
import com.sda.javacraiova.berecap.repository.UserTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserTypeController {

    @Autowired
    private UserTypeRepository userTypeRepository;

    @GetMapping("/usertypes")
    public List<UserType> getUserTypes(){
        List<UserType> ustList = userTypeRepository.findAll();
        for(UserType ust: ustList){
            ust.getUserList().size();
        }
        return ustList;
    }

    @PostMapping("/usertypes")
    public void addUserType(@RequestBody UserType userType){
        userTypeRepository.save(userType);
    }

    @DeleteMapping("/usertypes/{id}")
    public void deleteUserType(@PathVariable(name = "id") Long idUser){
        userTypeRepository.deleteById(idUser);
    }

    @GetMapping("/usertypes/{id}")
    public UserType getUserType(@PathVariable(name = "id") Long idUser){
        UserType userType = userTypeRepository.findById(idUser).orElse(null);
        userType.getUserList().size();
        return userType;
    }

    @PutMapping("/usertypes")
    public void updateUserType(@RequestBody UserType userType){
        UserType typeToBeUpdated = userTypeRepository.findById(userType.getId()).orElse(null);
        typeToBeUpdated.setName(userType.getName());
        userTypeRepository.save(typeToBeUpdated);
    }
}
