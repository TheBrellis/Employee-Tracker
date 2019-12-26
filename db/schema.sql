DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;


CREATE TABLE departments(
	id INTEGER AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles(
	id INTEGER AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE managers(
	id INTEGER AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
    );

CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    salary INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    department_id INTEGER NOT NULL,
	CONSTRAINT fk_department_id FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE,
    manager_id INTEGER NOT NULL,
    CONSTRAINT fk_manager_id FOREIGN KEY (manager_id) REFERENCES managers(id) ON DELETE CASCADE,
    PRIMARY KEY(id)
);
-- Call for all needed table data
/*
SELECT
employees.id as ID, 
employees.first_name as first_name, 
employees.last_name as last_name,
roles.title as title,
departments.name as department,
managers.name as manager,
salary
FROM
employees
LEFT JOIN
departments
ON (employees.department_id = departments.id)
LEFT JOIN
roles
ON (employees.role_id = roles.id)
LEFT JOIN
managers
ON (employees.manager_id = managers.id)
*/