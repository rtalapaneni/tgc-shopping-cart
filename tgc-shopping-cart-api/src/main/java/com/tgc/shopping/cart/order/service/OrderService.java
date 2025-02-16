package com.tgc.shopping.cart.order.service;

import com.tgc.shopping.cart.order.dto.Order;
import com.tgc.shopping.cart.order.entity.OrderEntity;
import com.tgc.shopping.cart.order.repository.OrderRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private OrderRepository orderRepository;
    private ModelMapper modelMapper;

    public OrderService(OrderRepository orderRepository, ModelMapper modelMapper) {
        this.orderRepository = orderRepository;
        this.modelMapper = modelMapper;
    }

    public Order saveOrder(Order order) {
        OrderEntity orderEntity = orderRepository.save(modelMapper.map(order, OrderEntity.class));
        return modelMapper.map(orderEntity, Order.class);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll().stream().map(orderEntity -> modelMapper.map(orderEntity, Order.class)).toList();
    }

    public Order getOrderById(Long orderId) {
        return modelMapper.map(orderRepository.findById(orderId).orElse(null), Order.class);
    }

    public void deleteOrder(Long orderId) {
        orderRepository.deleteById(orderId);
    }
}
