// Require all npm packages needed to run the app
require('dotenv').config();
require('console.table');
const inquirer = require('inquirer');
const db = require('./config/connection')
const prompts = require('./helpers/promptHelper')
const queries = require('./helpers/queryHelper')


// Initialize top-level function to display main menu choices
const getData = (sql) => {
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log('\n');
    console.table(rows);
    console.log('\n');
  });
}

// Destructure menuPrompts for easy reference
const { viewDepts, viewRoles, viewEmps, addDept, addRole, addEmp, updateEmpRole } = prompts.menuPrompts;

async function displayChoices() {
  await inquirer
    .prompt(prompts.menu)
    .then((data) => {
      // Save the menu value selected to a constant called action
      const { menu } = data;

      // Initialize empty query variable to be populated based on the option the user selected.
      let query = ''

      // Check the selected value to determine the next step and assign the correct sql query
      switch (menu) {
        case viewDepts:
          query = queries.allDepts;
          break;
        case viewRoles:
          query = queries.allRoles;
          break;
        case viewEmps:
          query = queries.allEmps;
          break;
        case addDept:
          query = queries.createDept(deptName);
          break;
        case addRole:
          query = queries.createRole(roleTitle, salary, departmentId);
          break;
        case addEmp:
          query = queries.createEmp(firstName, lastName, roleId, managerId);
          break;
        case updateEmpRole:
          query = queries.changeRole(empId, newRoleId);
          break;
        default:
          break;
      }
      if (query) {
        getData(query);
        displayChoices();
      } else {
        process.exit();
      };
    })
}

// Connect to database and initialize application
db.connect((error) => {
  if (error) throw error;
  displayChoices();
})