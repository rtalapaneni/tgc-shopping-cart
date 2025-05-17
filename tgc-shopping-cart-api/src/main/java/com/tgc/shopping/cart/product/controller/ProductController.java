package com.tgc.shopping.cart.product.controller;

import com.tgc.shopping.cart.product.dto.Product;
import com.tgc.shopping.cart.product.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.MDC;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@Slf4j
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public @ResponseBody Product createProduct(@RequestBody Product product) {
        log.info("createProduct");
        product.setId(null);
        product.setIsActive(Boolean.TRUE);
        return productService.saveProduct(product);
    }

    @GetMapping("all")
    public @ResponseBody List<Product> getProducts() {
        log.info("getProducts");
        return productService.getAllProducts();
    }

    @GetMapping
    public @ResponseBody Product getProductById(@RequestParam Long productId) {
        MDC.put("productId", String.valueOf(productId));
        log.info("getProductById");
        return productService.getProductById(productId);
    }

    @PutMapping
    public @ResponseBody Product updateProduct(@RequestBody Product product) {
        MDC.put("productId", String.valueOf(product.getId()));
        log.info("updateProduct");
        return productService.saveProduct(product);
    }

    @DeleteMapping
    public @ResponseBody void deleteProduct(@RequestParam Long productId) {
        MDC.put("productId", String.valueOf(productId));
        log.info("deleteProduct");
        productService.deleteProduct(productId);
    }
}
