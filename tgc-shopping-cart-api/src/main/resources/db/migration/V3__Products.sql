-- File: src/main/resources/db/migration/V2__Users.sql

CREATE SEQUENCE IF NOT EXISTS PRODUCT_ID_SEQ START WITH 1 INCREMENT BY 1;

CREATE TABLE PRODUCTS
(
    ID          BIGINT PRIMARY KEY,
    NAME        VARCHAR(100)   NOT NULL,
    BRAND       VARCHAR(50)    NOT NULL,
    MODEL       VARCHAR(50)    NOT NULL,
    DESCRIPTION TEXT,
    PRICE       DECIMAL(10, 2) NOT NULL,
    IMAGE_URL   VARCHAR(5000),
    IS_ACTIVE   BOOLEAN        NOT NULL DEFAULT TRUE NOT NULL,
    CONSTRAINT PK_PRODUCTS PRIMARY KEY (ID)
);

INSERT INTO products (ID, NAME, BRAND, MODEL, DESCRIPTION, PRICE, IMAGE_URL, IS_ACTIVE)
VALUES (NEXTVAL('PRODUCT_ID_SEQ'), 'Galaxy S21', 'Samsung', 'S21', 'Flagship smartphone', 799.99,
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', true),
       (NEXTVAL('PRODUCT_ID_SEQ'), 'iPhone 13', 'Apple', '13', 'Latest iPhone model', 899.99,
        'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyMXxlbnwwfHwwfHx8MA%3D%3D', true),
       (NEXTVAL('PRODUCT_ID_SEQ'), 'Pixel 6', 'Google', '6', 'Google Pixel with great camera', 599.99,
        'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyMXxlbnwwfHwwfHx8MA%3D%3D', true),
       (NEXTVAL('PRODUCT_ID_SEQ'), 'Moto G Power', 'Motorola', 'G Power', 'Long battery life', 249.99,
        'https://images.unsplash.com/photo-1610945263963-47c586d7abbf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyMXxlbnwwfHwwfHx8MA%3D%3D',
        true),
       (NEXTVAL('PRODUCT_ID_SEQ'), 'Xperia 1 III', 'Sony', '1 III', 'High-end Sony phone', 1099.99,
        'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbXN1bmclMjBnYWxheHklMjBzMjF8ZW58MHx8MHx8fDA%3D', true),
       (NEXTVAL('PRODUCT_ID_SEQ'), 'Galaxy A52', 'Samsung', 'A52', 'Mid-range smartphone', 399.99,
        'https://images.unsplash.com/photo-1612265152720-671efb0e3047?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhbXN1bmclMjBnYWxheHklMjBzMjF8ZW58MHx8MHx8fDA%3D', true),
       (NEXTVAL('PRODUCT_ID_SEQ'), 'iPhone SE', 'Apple', 'SE', 'Budget-friendly iPhone', 429.99,
        'https://images.unsplash.com/photo-1611282104291-6bd45ca8bf93?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNhbXN1bmclMjBnYWxheHklMjBzMjF8ZW58MHx8MHx8fDA%3D', true),
       (NEXTVAL('PRODUCT_ID_SEQ'), 'Redmi Note 10 Pro', 'Xiaomi', 'Note 10', 'Great value for price', 299.99,
        'https://images.unsplash.com/photo-1635186238046-40771478f17e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNhbXN1bmclMjBnYWxheHklMjBzMjF8ZW58MHx8MHx8fDA%3D', true),
       (NEXTVAL('PRODUCT_ID_SEQ'), 'OnePlus 9', 'OnePlus', '9', 'Fast charging flagship', 729.99,
        'https://images.unsplash.com/photo-1647880087404-ed8b67e6f329?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNhbXN1bmclMjBnYWxheHklMjBzMjF8ZW58MHx8MHx8fDA%3D', true),
       (NEXTVAL('PRODUCT_ID_SEQ'), 'Nokia 5.4', 'Nokia', '5.4', 'Solid budget phone', 249.99,
        'https://images.unsplash.com/photo-1691449808501-f9c5a2030b63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNhbXN1bmclMjBnYWxheHklMjBzMjF8ZW58MHx8MHx8fDA%3D', true)
;