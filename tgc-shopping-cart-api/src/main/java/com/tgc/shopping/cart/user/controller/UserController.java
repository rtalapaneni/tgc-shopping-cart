package com.tgc.shopping.cart.user.controller;

import com.tgc.shopping.cart.user.dto.User;
import com.tgc.shopping.cart.user.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/save")
    public User saveUser(User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/get/all")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/get")
    public @ResponseBody User getUserById(@RequestParam Long userId) {
        return userService.getUserById(userId);
    }

    @PutMapping("/update")
    public @ResponseBody User updateUser(@RequestParam Long userId, User user) {
        return userService.saveUser(user);
    }

    @DeleteMapping("/delete")
    public @ResponseBody void deleteUser(@RequestParam Long userId) {
        userService.deleteUser(userId);
    }
}
