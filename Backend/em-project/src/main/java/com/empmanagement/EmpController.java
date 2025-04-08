package com.empmanagement;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@CrossOrigin("http://localhost:5173/")
public class EmpController {
	
	@Autowired
	private EmpService empService;

	@GetMapping("employees")
	public List<Employee> getAll() {
		return empService.getAllEmployees();
	}
	
	@GetMapping("employees/{id}")
	public Employee getEmployeeById(@PathVariable int id) {
		return empService.getEmployeeById(id);
	}
	
	@PostMapping("employees")
	public String createEmployee(@RequestBody Employee employee) {

		
		return empService.createEmployee(employee);
	}
	
	@DeleteMapping("employees/{id}")
	public String deleteEmployee(@PathVariable int id) {
		if(empService.deleteEmployee(id)) {
			return "delete successfully";
		}
		else {
			return "not found";
		}
		
	}
	@PutMapping("employees/{id}")
	public String updateEmployee(@PathVariable int id, @RequestBody Employee emp) {
		
		
		return empService.updateEmployee(id, emp);
	}
	
	
}
