package com.sda.javacraiova.berecap.controller;

import com.sda.javacraiova.berecap.common.utils.AuthenticationBean;
import com.sda.javacraiova.berecap.model.UserModel;
import com.sda.javacraiova.berecap.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/basicauth")
    public AuthenticationBean basicauth() {
        return new AuthenticationBean("You are authenticated");
    }

    @GetMapping("/users")
    public List<UserModel> getUsers(){
        return (List<UserModel>) userRepository.findAll();
    }

    @PostMapping("/users")
    public void addUser(@RequestBody UserModel userModel){
        userRepository.save(userModel);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable(name = "id") Long userId){
        userRepository.deleteById(userId);
    }

    @GetMapping("/users/{id}")
    public UserModel getUser(@PathVariable(name = "id") Long userId){
        return userRepository.findById(userId).orElse(null);
    }

    @GetMapping("/users/getbyusername/{username}")
    public UserModel getUserByUsername(@PathVariable(name = "username") String username){
        return userRepository.findUserModelByUsername(username).orElse(null);
    }

    @PutMapping("/users")
    public void updateUser(@RequestBody UserModel userModel){
        UserModel userToBeUpdated = userRepository.findById(userModel.getId()).orElse(null);
        userToBeUpdated.setName(userModel.getName());
        userToBeUpdated.setEmail(userModel.getEmail());
        userToBeUpdated.setUserType(userModel.getUserType());
        userToBeUpdated.setUsername(userModel.getUsername());
        if(userModel.getNewPassword()!=null && userModel.getNewPassword()!=""){
            userToBeUpdated.setPassword(userModel.getNewPassword());
        }
        userRepository.save(userToBeUpdated);
    }



}
