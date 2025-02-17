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

    @PostMapping
    public User createUser(User user) {
        user.setId(null);
        user.setIsActive(Boolean.TRUE);
        return userService.saveUser(user);
    }

    @GetMapping("/all")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping
    public @ResponseBody User getUserById(@RequestParam Long userId) {
        return userService.getUserById(userId);
    }

    @PutMapping
    public @ResponseBody User updateUser(User user) {
        return userService.saveUser(user);
    }

    @DeleteMapping
    public @ResponseBody void deleteUser(@RequestParam Long userId) {
        userService.deleteUser(userId);
    }
}
