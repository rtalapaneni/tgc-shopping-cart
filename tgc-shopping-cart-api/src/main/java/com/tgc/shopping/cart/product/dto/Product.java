package com.tgc.shopping.cart.product.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    private Long id;
    private String name;
    private String brand;
    private String model;
    private String description;
    private BigDecimal price;
    private String imageUrl;
    private Boolean isActive;
}
