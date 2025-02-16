package com.tgc.shopping.cart.product.service;

import com.tgc.shopping.cart.product.dto.Product;
import com.tgc.shopping.cart.product.entity.ProductEntity;
import com.tgc.shopping.cart.product.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private ProductRepository productRepository;
    private ModelMapper modelMapper;

    public ProductService(ProductRepository productRepository, ModelMapper modelMapper) {
        this.productRepository = productRepository;
        this.modelMapper = modelMapper;
    }

    public Product saveProduct(Product product) {
        ProductEntity productEntity = productRepository.save(modelMapper.map(product, ProductEntity.class));
        return modelMapper.map(productEntity, Product.class);
    }

    public List<Product> getAllProducts() {
        return productRepository.findByIsActiveTrue().stream().map(ProductEntity -> modelMapper.map(ProductEntity, Product.class)).toList();
    }

    public Product getProductById(Long ProductId) {
        return modelMapper.map(productRepository.findById(ProductId).orElse(null), Product.class);
    }

    public void deleteProduct(Long ProductId) {
        ProductEntity ProductEntity = productRepository.findById(ProductId).orElse(null);
        if(ProductEntity != null) {
            ProductEntity.setIsActive(false);
            productRepository.save(ProductEntity);
        }
    }
}
