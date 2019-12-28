INSERT INTO departments (name) VALUES 
	("Sales"),
	("Engineering"),
	("Finance"),
	("Legal")
;

INSERT INTO roles(title) VALUES
("Sales Lead"),
("Salesperson"),
("Lead Engineer"),
("Software Engineer"),
("Accountant"),
("Legal Team Lead"),
("Lawyer");

INSERT INTO managers(name) VALUES
("John"),("Karen"),("Larry"), ("Stan");

INSERT INTO employees(first_name, last_name, salary, role_id, department_id, manager_id) VALUES
("Dan","Shaneesy",100000, 1,1,1),
("Bill","Brasky",80000, 2,1,1),
("Dave", "Doble",120000,3,2,2),
("Jeff", "Jumbah",75000,4,2,2);
