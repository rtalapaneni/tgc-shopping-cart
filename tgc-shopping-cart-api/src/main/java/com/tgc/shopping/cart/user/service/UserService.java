package com.tgc.shopping.cart.user.service;

import com.tgc.shopping.cart.order.dto.Order;
import com.tgc.shopping.cart.order.entity.OrderEntity;
import com.tgc.shopping.cart.user.dto.User;
import com.tgc.shopping.cart.user.entity.UserEntity;
import com.tgc.shopping.cart.user.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;
    private ModelMapper modelMapper;

    public UserService(UserRepository userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    public User saveUser(User user) {
        UserEntity userEntity = userRepository.save(modelMapper.map(user, UserEntity.class));
        return modelMapper.map(userEntity, User.class);
    }

    public List<User> getAllUsers() {
        return userRepository.findByIsActiveTrue().stream().map(userEntity -> modelMapper.map(userEntity, User.class)).toList();
    }

    public User getUserById(Long userId) {
        return modelMapper.map(userRepository.findById(userId).orElse(null), User.class);
    }

    public void deleteUser(Long userId) {
        UserEntity userEntity = userRepository.findById(userId).orElse(null);
        if(userEntity != null) {
            userEntity.setIsActive(false);
            userRepository.save(userEntity);
        }
    }

    public Boolean isValidUser(String username, String password) {
        return userRepository.findByIsActiveTrueAndUsernameAndPassword(username, password) != null;
    }
}
