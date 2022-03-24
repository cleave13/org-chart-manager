-- Query all fields and records from department table
SELECT * FROM department;

-- Query all fields and records from role table
SELECT * FROM role;

-- Join all tables together into a single query to show all employees and related data
SELECT  e.id, 
        e.first_name, 
        e.last_name,
        r.title,
        d.name AS department,
        r.salary,
        CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employee AS e 
    LEFT OUTER JOIN employee AS m 
    ON e.manager_id = m.id
    LEFT JOIN role AS r
    ON e.role_id = r.id
    LEFT JOIN department AS d
    ON r.department_id = d.id;

-- Add new department name
INSERT INTO department (name)
VALUES ('sample department');

-- Add a new role
INSERT INTO role (title, salary, department_id)
VALUES ('VP of Nothing', 100000, 1);

-- Add a new employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Samir', 'Notgunnaworkhereanymore', 3, 5);

-- Update an existing employee's role
UPDATE employee SET role_id = 5
WHERE id = 31;