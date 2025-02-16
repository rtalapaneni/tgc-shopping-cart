package com.tgc.shopping.cart.order.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "ORDERS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_seq")
    @SequenceGenerator(name = "order_seq", sequenceName = "ORDER_ID_SEQ", allocationSize = 1)
    private Long id;

    @Column(name = "PRODUCT_ID", nullable = false)
    private Long productId;

    @Column(name = "CUSTOMER_ID", nullable = false)
    private Long customerId;

    @Column(name = "PAYMENT", nullable = false)
    private Double payment;

    @Column(name = "ORDER_DT", nullable = false)
    private LocalDateTime orderDate;

    @Column(name = "DELIVERY_DT")
    private LocalDateTime deliveryDate;
}
