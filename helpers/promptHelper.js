// Create object to house options for normalization throughout code
const menuPrompts = {
    viewDepts: 'View all departments',
    viewRoles: 'View all roles',
    viewEmps: 'View all employees',
    addDept: 'Add a new department',
    addRole: 'Add a new role',
    addEmp: 'Add an employee',
    updateEmpRole: 'Update an employee role',
    close: 'Close application'
};

const menu = [
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            menuPrompts.viewDepts,
            menuPrompts.viewRoles,
            menuPrompts.viewEmps,
            menuPrompts.addDept,
            menuPrompts.addRole,
            menuPrompts.addEmp,
            menuPrompts.updateEmpRole,
            menuPrompts.close],
        name: 'menu',
    }
];

const newDept = [
    {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'deptName',
    }
];

const newRole = [
    {
        type: 'input',
        message: 'What is the title of the new role?',
        name: 'roleTitle',
    },
    {
        type: 'input',
        message: 'What is the annual salary for this new role?',
        name: 'roleSalary',
    },
    {
        type: 'input',
        message: 'What department does this role belong to?',
        name: 'roleDept',
    }
];

const newEmp = [
    {
        type: 'input',
        message: `Enter the employee's first name`,
        name: 'empFirst',
    },
    {
        type: 'input',
        message: `Enter the employee's last name`,
        name: 'empLast',
    },
    {
        type: 'input',
        message: `What is this employee's role?`,
        name: 'empRole',
    },
    {
        type: 'input',
        message: `Who does this employee report to?`,
        name: 'empManager',
    },
];

const changeRole = [
    {
        type: 'input',
        message: `Which employee would you like to change?`,
        name: 'affectedEmp',
    },
    {
        type: 'input',
        message: `What is their new role?`,
        name: 'empNewRole',
    },
]

module.exports = { menuPrompts, menu, newDept, newRole, newEmp, changeRole }