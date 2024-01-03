import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Addemployee.css';
import EmployeeService from '../service/EmployeeService';

const Updateemployee = () => {
const { id } = useParams();
const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
});

const navigate = useNavigate();

const handleChange = (e) =>{
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value}); };

useEffect(() => {
    const fetchData = async() => {
        try{
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
        }catch(error){
            console.log(error);
        }
    };
    fetchData();
},
// eslint-disable-next-line
[]);


const update =(e) =>{
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id).then((response) =>{
        navigate("/Employeelist");
    }).catch((error) =>{
        console.log(error);
    });
};


const cancel =(e)=>{
    e.preventDefault();
    navigate('/employeelist');
};

return (
    <div className='Addemployee-div'>
    <div className='Addemployee-div2'>
        <h1><b>UPDATE EMPLOYEE</b></h1>
    </div>
    <div className="Addemployee-div3">
        <p><i>Please ensure to update correctly</i></p>
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
        onClick={update}
        type='submit' className='button1'>Update</button>
        <button
        onClick={cancel}
        type='submit' className='button2'>Cancel</button>
    </div>
</div>
)
}

export default Updateemployee
