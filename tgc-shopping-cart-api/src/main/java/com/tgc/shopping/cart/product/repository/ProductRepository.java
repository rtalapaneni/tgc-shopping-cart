package com.tgc.shopping.cart.product.repository;

import com.tgc.shopping.cart.product.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    List<ProductEntity> findByIsActiveTrue();
}
