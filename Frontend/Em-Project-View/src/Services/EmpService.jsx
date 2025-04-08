import axios from "axios";

const Base_url = "http://localhost:8080/employees";

class EmpService {
  saveEmployee(employee) {
    return axios.post(Base_url, employee);
  }

  getEmployees() {
    return axios.get(Base_url);
  }
  getEmployeeById(id) {
    return axios.get(Base_url + "/" + id);
  }
  deleteEmployeeById(id) {
    return axios.delete(Base_url + "/" + id);
  }
  updateEmployee(employee, id) {
    return axios.put(Base_url + "/" + id, employee);
  }
}
export default new EmpService();
