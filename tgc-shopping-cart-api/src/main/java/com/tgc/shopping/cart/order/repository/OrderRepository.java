package com.tgc.shopping.cart.order.repository;

import com.tgc.shopping.cart.order.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
}
