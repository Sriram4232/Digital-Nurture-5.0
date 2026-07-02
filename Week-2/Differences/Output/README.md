# Hands-on 2: Difference Between JPA, Hibernate and Spring Data JPA

## Objective

To understand the difference between JPA, Hibernate, and Spring Data JPA by creating a simple Spring Boot application that performs database operations using Spring Data JPA.

---

# Prerequisites

- IntelliJ IDEA
- JDK 17
- MySQL Server
- MySQL Workbench
- Spring Initializr
- Maven

---

# Step 1: Create a Spring Boot Project

Open **https://start.spring.io** and configure the project as follows:

| Property | Value |
|----------|-------|
| Project | Maven |
| Language | Java |
| Spring Boot | 3.5.16 |
| Group | com.cognizant |
| Artifact | spring-data-jpa-demo |
| Name | spring-data-jpa-demo |
| Package Name | com.cognizant.springdatajpademo |
| Packaging | Jar |
| Java | 17 |

---

# Step 2: Add Dependencies

Add the following dependencies:

- Spring Web
- Spring Data JPA
- MySQL Driver
- Spring Boot DevTools

Click **Generate**, extract the ZIP file, and open it in IntelliJ IDEA.

Wait until Maven downloads all dependencies.

---

# Step 3: Create the Database

Open MySQL Workbench and execute:

```sql
CREATE DATABASE employee_db;

USE employee_db;
```

Create the Employee table:

```sql
CREATE TABLE employee(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DOUBLE
);
```

---

# Step 4: Configure application.properties

Open:

```
src/main/resources/application.properties
```

Replace the contents with:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

logging.level.org.hibernate.SQL=DEBUG
```

Replace **YOUR_PASSWORD** with your MySQL root password.

---

# Step 5: Create Packages

Inside

```
src/main/java/com/cognizant/springdatajpademo
```

Create the following packages:

```
model
repository
service
```

---

# Step 6: Create Employee Entity

Create

```
Employee.java
```

inside the **model** package.

```java
package com.cognizant.springdatajpademo.model;

import jakarta.persistence.*;

@Entity
@Table(name="employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String department;

    private double salary;

    public Employee() {
    }

    public Employee(String name, String department, double salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", department='" + department + '\'' +
                ", salary=" + salary +
                '}';
    }
}
```

---

# Step 7: Create Repository

Create

```
EmployeeRepository.java
```

inside the **repository** package.

```java
package com.cognizant.springdatajpademo.repository;

import com.cognizant.springdatajpademo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
```

---

# Step 8: Create Service

Create

```
EmployeeService.java
```

inside the **service** package.

```java
package com.cognizant.springdatajpademo.service;

import com.cognizant.springdatajpademo.model.Employee;
import com.cognizant.springdatajpademo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {

        employeeRepository.save(employee);

    }
}
```

---

# Step 9: Modify the Main Class

Replace the contents of

```
SpringDataJpaDemoApplication.java
```

with

```java
package com.cognizant.springdatajpademo;

import com.cognizant.springdatajpademo.model.Employee;
import com.cognizant.springdatajpademo.service.EmployeeService;
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
```

---

# Step 10: Run the Project

Run the Spring Boot application.

Hibernate will execute the following SQL:

```sql
insert into employee
(name, department, salary)
values
(?, ?, ?)
```

Console Output:

```text
Employee inserted successfully.
```

---

# Step 11: Verify Data in MySQL

Execute:

```sql
USE employee_db;

SELECT * FROM employee;
```

Expected Output:

| ID | Name | Department | Salary |
|----|------|------------|--------|
| 1 | John | IT | 60000 |

---

# Difference Between JPA, Hibernate and Spring Data JPA

| JPA | Hibernate | Spring Data JPA |
|-----|-----------|-----------------|
| Java Persistence API specification | ORM framework implementing JPA | Abstraction layer over JPA |
| Defines standards for persistence | Implements persistence logic | Simplifies database access |
| No implementation | Complete ORM implementation | Uses Hibernate internally |
| Requires implementation provider | Requires manual session and transaction management | Provides repository-based CRUD operations |
| No transaction management | Transactions handled manually | Automatic transaction management using `@Transactional` |

---

# Conclusion

Successfully created a Spring Boot application using Spring Data JPA to perform CRUD operations on the Employee table. This exercise demonstrates how Spring Data JPA reduces boilerplate code compared to Hibernate while utilizing Hibernate as the JPA implementation.