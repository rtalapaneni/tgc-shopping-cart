-- File: src/main/resources/db/migration/V2__Users.sql

CREATE SEQUENCE IF NOT EXISTS USER_ID_SEQ START WITH 1 INCREMENT BY 1;

CREATE TABLE USERS
(
    ID           BIGINT PRIMARY KEY,
    USERNAME     VARCHAR(50)  NOT NULL UNIQUE,
    PASSWORD     VARCHAR(100) NOT NULL,
    EMAIL        VARCHAR(100) NOT NULL UNIQUE,
    FIRST_NAME   VARCHAR(50)  NOT NULL,
    LAST_NAME    VARCHAR(50)  NOT NULL,
    DISPLAY_NAME VARCHAR(100),
    IS_ACTIVE    BOOLEAN      NOT NULL,
    CONSTRAINT PK_USERS PRIMARY KEY (ID)
);

INSERT INTO USERS (ID, USERNAME, PASSWORD, EMAIL, FIRST_NAME, LAST_NAME, DISPLAY_NAME, IS_ACTIVE)
VALUES (NEXTVAL('USER_ID_SEQ'), 'user1', 'password1', 'user1@example.com', 'John', 'Doe', 'JohnD', TRUE),
       (NEXTVAL('USER_ID_SEQ'), 'user2', 'password2', 'user2@example.com', 'Jane', 'Smith', 'JaneS', TRUE),
       (NEXTVAL('USER_ID_SEQ'), 'user3', 'password3', 'user3@example.com', 'Alice', 'Johnson', 'AliceJ', TRUE),
       (NEXTVAL('USER_ID_SEQ'), 'user4', 'password4', 'user4@example.com', 'Bob', 'Brown', 'BobB', TRUE),
       (NEXTVAL('USER_ID_SEQ'), 'user5', 'password5', 'user5@example.com', 'Charlie', 'Davis', 'CharlieD', TRUE),
       (NEXTVAL('USER_ID_SEQ'), 'user6', 'password6', 'user6@example.com', 'David', 'Wilson', 'DavidW', TRUE),
       (NEXTVAL('USER_ID_SEQ'), 'user7', 'password7', 'user7@example.com', 'Eve', 'Moore', 'EveM', TRUE),
       (NEXTVAL('USER_ID_SEQ'), 'user8', 'password8', 'user8@example.com', 'Frank', 'Taylor', 'FrankT', TRUE),
       (NEXTVAL('USER_ID_SEQ'), 'user9', 'password9', 'user9@example.com', 'Grace', 'Anderson', 'GraceA', TRUE),
       (NEXTVAL('USER_ID_SEQ'), 'user10', 'password10', 'user10@example.com', 'Hank', 'Thomas', 'HankT', TRUE);