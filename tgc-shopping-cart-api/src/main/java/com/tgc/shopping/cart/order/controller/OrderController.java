package com.tgc.shopping.cart.order.controller;

import com.tgc.shopping.cart.order.dto.Order;
import com.tgc.shopping.cart.order.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
    private OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public Order createOrder(Order order) {
        order.setId(null);
        return orderService.saveOrder(order);
    }

    @GetMapping("/all")
    public List<Order> getOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping
    public @ResponseBody Order getOrderById(@RequestParam Long orderId) {
        return orderService.getOrderById(orderId);
    }

    @PutMapping
    public @ResponseBody Order updateOrder(@RequestParam Long orderId, Order order) {
        return orderService.saveOrder(order);
    }

    @DeleteMapping
    public @ResponseBody void deleteOrder(@RequestParam Long orderId) {
        orderService.deleteOrder(orderId);
    }
}
