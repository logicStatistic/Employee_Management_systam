package com.employement.mployementmanagementsystem.repositroy;

import com.employement.mployementmanagementsystem.entity.EmployeeEntity;
import com.employement.mployementmanagementsystem.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
