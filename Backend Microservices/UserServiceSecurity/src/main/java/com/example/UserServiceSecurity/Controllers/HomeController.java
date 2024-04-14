package com.example.UserServiceSecurity.Controllers;


import com.example.UserServiceSecurity.models.User;
import com.example.UserServiceSecurity.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/home")
public class HomeController {
    @Autowired
    UserService userService;
    @GetMapping("/users")
    public List<User> getUsers()
    {

        return userService.getUsers();
    }
}
