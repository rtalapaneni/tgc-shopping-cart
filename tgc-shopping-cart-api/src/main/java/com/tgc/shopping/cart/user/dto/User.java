package com.tgc.shopping.cart.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String id;
    private String username;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private String displayName;
    private Boolean isActive;
}
