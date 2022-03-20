-- Query all fields and records from department table
SELECT * FROM department;

-- Query all fields and records from role table
SELECT * FROM role;

SELECT * FROM employee;

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