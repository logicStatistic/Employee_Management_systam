import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Addemployee.css';
import EmployeeService from '../service/EmployeeService';

const Addemployee = () => {
        
        const [employee, setEmployee] = useState({
            
            id: "",
            firstName: "",
            lastName: "",
            email: "",
        });

        const navigate = useNavigate();

        const handleChange = (e) =>{
            const value = e.target.value;
            setEmployee({...employee, [e.target.name]: value});
        };

        const saveEmployee = (e) =>{
            e.preventDefault();
            EmployeeService.saveEmployee(employee).then((response) =>{
                console.log(response);
                navigate("/Employeelist")
            }).catch((error) =>{
                console.log(error);
            });
        };

        const reset =(e)=>{
            e.preventDefault();
            setEmployee({
                id: "",
                firstName: "",
                lastName: "",
                email: "",
            
                });
        };

    return (
        <div className='Addemployee-div'>
            <div className='Addemployee-div2'>
                <h1><b>ADD EMPLOYEE</b></h1>
            </div>
            <div className="Addemployee-div3">
                <p><i>Please ensure to add correct details</i></p>
            </div>
            <div className='Addemployee-input'>
                <input
                name='firstName'
                value={employee.firstName}
                onChange={(e) => handleChange(e)}
                type='text' className='input' placeholder='First Name'></input>
            </div>
            <div className='Addemployee-input'>
                <input
                name='lastName'
                value={employee.lastName}
                onChange={(e) => handleChange(e)}
                type='text'  className='input' placeholder='Last Name'></input>
            </div>
            <div className='Addemployee-input'>
                <input
                name='email'
                value={employee.email}
                onChange={(e) => handleChange(e)}
                type='email'  className='input' placeholder='Email'></input>
            </div>
            <div className='Addemployee-button'>
                <button
                onClick={saveEmployee}
                type='submit' className='button1'>Save</button>
                <button
                onClick={reset}
                type='submit' className='button2'>Reset</button>
            </div>
        </div>
    );
};

export default Addemployee
