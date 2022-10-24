USE employee_db;

INSERT INTO DEPARTMENT (name)
VALUES
("Human Resources"),
("Finance"),
("IT"),
("Sales"),
("Marketing"),
("Research and Development");

INSERT INTO role (title, salary, department_id)
VALUES
("Manager", 200000, 1),
("Accountant", 100000, 2),
("Web Developer", 90000, 3),
("Salesperson", 150000, 4),
("Customer Rep", 75000, 5),
("Researcher", 120000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Brett", "Shulman", 1, 123),
("Hiren", "Patel", 2, 321),
("Mack", "Nelson", 3, 456),
("Jordan", "Smith", 4, 654),
("John", "Doe", 5, 789),
("Jane", "Doe", 6, 987);

