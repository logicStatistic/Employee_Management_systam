package com.employement.mployementmanagementsystem.model;

import lombok.*;

@Data

public class Employee {

    private long id;
    private String firstName;
    private String lastName;
    private String email;

    public Employee() {
    }

    public Employee(long id, String firstName, String lastName, String email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
