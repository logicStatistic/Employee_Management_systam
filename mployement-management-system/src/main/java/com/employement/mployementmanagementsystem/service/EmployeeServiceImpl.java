package com.employement.mployementmanagementsystem.service;

import com.employement.mployementmanagementsystem.model.Employee;



import java.util.List;

public interface EmployeeServiceImpl{


    Employee addAnEmployee(Employee employee);

     List<Employee> listOfEmployees();

    Boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);
}
