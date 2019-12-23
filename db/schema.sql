-- Build Database
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE departments(
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(name)
);

CREATE TABLE roles(
    name VARCHAR(255) NOT NULL,
    salary INTEGER NOT NULL,
    department_name INTEGER NOT NULL,
    CONSTRAINT fk_department_name FOREIGN KEY (department_name) REFERENCES departments(name) ON DELETE CASCADE,
    PRIMARY KEY(name)
);


CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT,
    first_name varchar(255) NOT NULL,
    last_name varchar(255),
    department_name INTEGER NOT NULL, -- including department
    CONSTRAINT fk_department_name FOREIGN KEY (department_name) REFERENCES departments(name) ON DELETE CASCADE,
    PRIMARY KEY(id);
);

SELECT 
    employees.first_name name as first_name, employees.last_name as last_name, departments.name as department

