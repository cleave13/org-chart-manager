// Query all fields and records from department table
const allDepts = `SELECT * FROM department`;

// Query all fields and records from role table
const allRoles = `SELECT * FROM role`;

// Join all tables together into a single query to show all employees and related data
const allEmps = `
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
`
// Add new department name
const createDept = (deptName) => {
    const query = `INSERT INTO department (name) VALUES ('${deptName}')`;
    return query;
};

// Add a new role
const createRole = (roleTitle, salary, departmentId) => {
    const query = 
        `INSERT INTO role (title, salary, department_id)
        VALUES (${roleTitle}, ${salary}, ${departmentId})`;
    return query;
};

// Add a new employee
const createEmp = (firstName, lastName, roleId, managerId) => {
    const query = 
        `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES (${firstName}, ${lastName}, ${roleId}, ${managerId})`;
    return query;
};

// Update an existing employee's role
const changeRole = (empId, newRoleId) => {
    const query = 
        `UPDATE employee SET role_id = ${newRoleId}
        WHERE id = ${empId}`;
    return query;
};

module.exports = { allDepts, allRoles, allEmps, createDept, createRole, createEmp, changeRole };