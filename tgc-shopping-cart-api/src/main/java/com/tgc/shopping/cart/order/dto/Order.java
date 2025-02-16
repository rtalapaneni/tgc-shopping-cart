package com.tgc.shopping.cart.order.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    private String id;
    private Integer orderId;
    private Integer customerId;
    private Double payment;
    private LocalDateTime orderDate;
    private LocalDateTime deliveryDate;
}
