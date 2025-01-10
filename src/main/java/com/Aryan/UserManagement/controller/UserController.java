package com.Aryan.UserManagement.controller;

import com.Aryan.UserManagement.exception.UserNotFoundException;
import com.Aryan.UserManagement.model.User;
import com.Aryan.UserManagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
  
@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
        List<User> getAllUsers(){
            return userRepository.findAll();
        }


        @GetMapping("/users/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
        }

        @PutMapping("/users/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUserName(newUser.getUserName());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                        }).orElseThrow(()->new UserNotFoundException(id));
        }

        @DeleteMapping("/users/{id}")
        public String deleteUser(@PathVariable Long id) {
            if (!userRepository.existsById(id)) {
                throw new UserNotFoundException(id);
            }

            // Delete the user
            userRepository.deleteById(id);

            // Adjust the IDs of remaining users
            List<User> usersToUpdate = userRepository.findAllByIdGreaterThan(id);
            for (User user : usersToUpdate) {
                user.setId(user.getId() - 1);
            }
            userRepository.saveAll(usersToUpdate);

            return "User with id " + id + " has been deleted successfully, and IDs adjusted.";
        }
}
