package com.cognizant.spring_data_jpa_demo;

import com.cognizant.spring_data_jpa_demo.model.Employee;
import com.cognizant.spring_data_jpa_demo.service.EmployeeService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringDataJpaDemoApplication {

	public static void main(String[] args) {

		ApplicationContext context =
				SpringApplication.run(SpringDataJpaDemoApplication.class, args);

		EmployeeService service =
				context.getBean(EmployeeService.class);

		Employee employee =
				new Employee("John", "IT", 60000);

		service.addEmployee(employee);

		System.out.println("Employee inserted successfully.");

	}

}