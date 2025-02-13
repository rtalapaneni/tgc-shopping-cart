package com.tgc.shopping.cart.order.controller;

import com.tgc.shopping.cart.order.dto.Order;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController("orders")
public class OrderController {
    @GetMapping("/all")
    public List<Order> getOrders() {
        return new ArrayList<>();
    }
}
