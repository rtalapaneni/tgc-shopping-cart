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

    @PostMapping("/save")
    public Order saveOrder(Order order) {
        return orderService.saveOrder(order);
    }

    @GetMapping("/get/all")
    public List<Order> getOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/get")
    public @ResponseBody Order getOrderById(@RequestParam Long orderId) {
        return orderService.getOrderById(orderId);
    }

    @PutMapping("/update")
    public @ResponseBody Order updateOrder(@RequestParam Long orderId, Order order) {
        return orderService.saveOrder(order);
    }

    @DeleteMapping("/delete")
    public @ResponseBody void deleteOrder(@RequestParam Long orderId) {
        orderService.deleteOrder(orderId);
    }
}
