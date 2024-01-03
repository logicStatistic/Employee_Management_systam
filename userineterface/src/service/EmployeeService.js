import axios from "axios";

const  BASE_URL=  "http://localhost:8080/api/v1/employees";
const  BASE_URL2 = "http://localhost:8080/api/v1/list-employees";

class EmployeeService{
    saveEmployee(employees){
        return axios.post(BASE_URL, employees);
    }
    getEmployee(){
        return axios.get(BASE_URL2);
    }
    deleteEmployee(id){
        return axios.delete(BASE_URL + "/"+ id);
    }
    getEmployeeById(id){
        return axios.get(BASE_URL + "/"+ id);
    }
    updateEmployee(employee, id){
        return axios.put(BASE_URL + "/"+ id, employee);
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();