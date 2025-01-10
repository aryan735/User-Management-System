package com.Aryan.UserManagement.repository;

import com.Aryan.UserManagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    List<User> findAllByIdGreaterThan(Long id);
}
