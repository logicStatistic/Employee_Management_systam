package com.employement.mployementmanagementsystem.service;

import com.employement.mployementmanagementsystem.entity.EmployeeEntity;
import com.employement.mployementmanagementsystem.model.Employee;
import com.employement.mployementmanagementsystem.repositroy.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EmployeeService implements EmployeeServiceImpl {

    @Autowired
    private EmployeeRepository employeeRepository;


    @Override
    public Employee addAnEmployee(Employee employee) {

        EmployeeEntity employeeEntity = new EmployeeEntity();

        BeanUtils.copyProperties(employee, employeeEntity);

        employeeRepository.save(employeeEntity);

        return employee;
    }

    @Override
    public List<Employee> listOfEmployees() {

        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

        List<Employee> emp = employeeEntities.stream().map(u-> new Employee(
                u.getId(),
                u.getFirstName(),
                u.getLastName(),
                u.getEmail()))
                .toList();

                return emp;
   }

    @Override
    public Boolean deleteEmployee(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        employeeRepository.delete(employeeEntity);
        return true;
    }

    @Override
    public Employee getEmployeeById(Long id) {

        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);

        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {

        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());
        employeeEntity.setEmail(employee.getEmail());

        employeeRepository.save(employeeEntity);

        return employee;
    }


}


