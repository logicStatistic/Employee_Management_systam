package com.employement.mployementmanagementsystem.controller;

import com.employement.mployementmanagementsystem.model.Employee;
import com.employement.mployementmanagementsystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/employees")
    public Employee addAnEmployee(@RequestBody Employee employee){
       return employeeService.addAnEmployee(employee);
    }

   @GetMapping("/list-employees")
    public List<Employee> listOfEmployees(){
        return employeeService.listOfEmployees();
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
        Boolean deleted = false;
       deleted = employeeService.deleteEmployee(id);

       Map<String, Boolean> response = new HashMap<>();
       response.put("Deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = null;
        employee = employeeService.getEmployeeById(id);

        return ResponseEntity.ok(employee);
    }
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee (@PathVariable Long id, @RequestBody Employee employee){
        employee = employeeService.updateEmployee(id, employee);

        return ResponseEntity.ok(employee);
    }
}
