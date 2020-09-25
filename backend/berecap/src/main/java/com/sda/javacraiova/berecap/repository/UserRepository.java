package com.sda.javacraiova.berecap.repository;

import com.sda.javacraiova.berecap.model.UserModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<UserModel, Long> {
    public Optional<UserModel> findUserModelByUsername(String username);

}
