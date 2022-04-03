// Require all npm packages needed to run the app
require('dotenv').config();
require('console.table');
const inquirer = require('inquirer');
const db = require('./config/connection');
const prompts = require('./helpers/promptHelper');
const queries = require('./helpers/queryHelper');


// Initialize top-level function to display main menu choices
const sqlQuery = (sql) => {
  if (sql) {
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.log('\n');
      console.table(rows);
      console.log('\n');
    });
    displayChoices();
  } else {
    process.exit();
  }
}



// Destructure menuPrompts for easy reference
const { viewDepts, viewRoles, viewEmps, addDept, addRole, addEmp, updateEmpRole } = prompts.menuPrompts;

const displayChoices = () => {

  // Start inquirer prompts
  inquirer
    .prompt(prompts.menu)
    .then((data) => {
      // Save the menu value selected to a constant called action
      const { menu } = data;

      // Check the selected value to determine the next step and assign the correct sql query
      switch (menu) {
        case viewDepts:
          sqlQuery(queries.allDepts);
          break;

        case viewRoles:
          sqlQuery(queries.allRoles);
          break;

        case viewEmps:
          sqlQuery(queries.allEmps);
          break;

        case addDept:
          inquirer.prompt(prompts.newDept)
            .then((data) => {
              sqlQuery(queries.createDept(data.deptName));
            });
            break;

        case addRole:
          inquirer.prompt(prompts.newRole)
            .then((data) => {
              sqlQuery(queries.createRole(data.roleTitle, data.roleSalary, data.roleDept));
            });
            break;

        case addEmp:
          inquirer.prompt(prompts.newEmp)
            .then((data) => {
              sqlQuery(queries.createEmp(data.empFirst, data.empLast, data.empRole, data.empManager));
            });
            break;

        case updateEmpRole:
          inquirer.prompt(prompts.changeRole)
            .then((data) => {
              sqlQuery(queries.changeRole(data.affectedEmp, data.empNewRole));
            });
            break;

        default:
          break;
      }
    })
}

// Connect to database and initialize application
db.connect((error) => {
  if (error) throw error;
  displayChoices();
})