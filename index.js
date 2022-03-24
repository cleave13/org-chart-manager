const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a new department', 'Add a new role', 'Add an employee', 'Update an employee role'],
        name: 'menu',
    }
  ])
  .then((data) => {
      // Add js logic to respond to user input, execute the correct queries and display follow-up options.
    }