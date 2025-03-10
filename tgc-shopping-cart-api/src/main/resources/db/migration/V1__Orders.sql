CREATE SEQUENCE IF NOT EXISTS ORDER_ID_SEQ START WITH 1 INCREMENT BY 1;
CREATE TABLE ORDERS
(
    ID          BIGINT PRIMARY KEY,
    PRODUCT_ID  BIGINT                                    NOT NULL,
    CUSTOMER_ID BIGINT                                    NOT NULL,
    PAYMENT     BIGINT                                    NOT NULL,
    ORDER_DT    TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW() NOT NULL,
    DELIVERY_DT TIMESTAMP WITHOUT TIME ZONE,
    CONSTRAINT PK_ORDERS PRIMARY KEY (ID)
);

INSERT INTO ORDERS (ID, PRODUCT_ID, CUSTOMER_ID, PAYMENT, ORDER_DT, DELIVERY_DT)
VALUES (1, 101, 1001, 150.00, '2023-10-01 10:00:00', '2023-10-05 10:00:00'),
       (2, 102, 1002, 200.00, '2023-10-02 11:00:00', '2023-10-06 11:00:00'),
       (3, 103, 1003, 250.00, '2023-10-03 12:00:00', '2023-10-07 12:00:00'),
       (4, 104, 1004, 300.00, '2023-10-04 13:00:00', '2023-10-08 13:00:00'),
       (5, 105, 1005, 350.00, '2023-10-05 14:00:00', '2023-10-09 14:00:00'),
       (6, 106, 1006, 400.00, '2023-10-06 15:00:00', '2023-10-10 15:00:00'),
       (7, 107, 1007, 450.00, '2023-10-07 16:00:00', '2023-10-11 16:00:00'),
       (8, 108, 1008, 500.00, '2023-10-08 17:00:00', '2023-10-12 17:00:00'),
       (9, 109, 1009, 550.00, '2023-10-09 18:00:00', '2023-10-13 18:00:00'),
       (10, 110, 1010, 600.00, '2023-10-10 19:00:00', '2023-10-14 19:00:00');