package com.tgc.shopping.cart.order.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class Order {
    private String id;
    private Integer orderId;
    private Integer customerId;
    private Double payment;
    private Date orderDate;
    private Date deliveryDate;
}
