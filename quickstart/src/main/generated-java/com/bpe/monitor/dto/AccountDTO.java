/*
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Template pack-angular:src/main/java/dto/EntityDTO.java.e.vm
 */
package com.bpe.monitor.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Simple DTO for Account.
 */
public class AccountDTO {
    public Long id;
    public String email;
    public String firstName;
    public String lastName;
    public String password;

    @JsonIgnore
    public boolean isIdSet() {
        return id != null;
    }
}