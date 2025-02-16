package com.tgc.shopping.cart.user.repository;

import com.tgc.shopping.cart.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    List<UserEntity> findByIsActiveTrue();
    UserEntity findByIsActiveTrueAndUsernameAndPassword(String username, String password);
}
