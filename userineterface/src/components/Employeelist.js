import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Employeelist.css';
import EmployeeService from '../service/EmployeeService';

const Employeelist = () => {

const navigate = useNavigate();

const [loading, setLoading] = useState(true);
const [employees, setEmployees] = useState(null);

useEffect(() => {
    const fetchData = async()=>{
        setLoading(true);
        try{
            const response = await EmployeeService.getEmployee();
            setEmployees(response.data);
        }catch(error){
            console.log(error);
        }
        setLoading(false);
    };
    fetchData();
}, [])

const deleteEmployee = (e, id) =>{
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((response) =>{
        if(employees){
        setEmployees((previousElement) => {
            return previousElement.filter((employees)=> (employees.id) !==id);
        });
        }
    });
}

const editEmployee =(e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
};

    return (
    <div className='Table-div'>
        <div className='Button-div'>
            <button
            onClick={()=> navigate("/addemployee")}
            className='Button'>Add Employee</button>
        </div>
        <div className='flex shadow border-b'>
                <table className='Table'>
                    <thead className='Tablehead'>
                    <tr>
                        <th className='Th'>First Name</th>
                        <th className='Th'>Last Name</th>
                        <th className='Th'>Email</th>
                        <th className='Th-action'>Action</th>
                    </tr>
                    </thead>
                    {!loading && (
                    <tbody>
                        {employees.map((employee)=>(
                        <tr key={employee.id}>
                            <td >
                                <div className='Td'>{employee.firstName}</div>
                            </td>
                            <td>
                                <div className='Td'>{employee.lastName}</div>
                            </td>
                            <td>
                                <div className='Td'>{employee.email}</div>
                            </td>
                            <td>
                                <a
                                onClick={(e, id) => editEmployee(e, employee.id)}
                                className='Anchor' href='##'>Edit</a>
                                <a
                                onClick={(e, id)=> deleteEmployee(e, employee.id)}
                                className='Anchor2' href='##'>Delete</a>
                            </td>
                        </tr> ))}
                    </tbody> )}
                </table>
        </div>
    </div>
    )
}

export default Employeelist
