# Org Chart Manager

## Description

This project leverages node.js and inquirer to connect to a SQL server database. The inquirer prompts allow you to read, create and update database records through the command line prompts.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath) ![license](https://img.shields.io/github/license/Cleave13/org-chart-manager)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

When installing the application, be sure to open the integrated terminal in your code editor and run ``npm i``. This will install all of the node package dependencies that are required for the application to run. 

Additionally, the user will need to have an active SQL server running and will need to SOURCE the schema.sql and seeds.sql files in order to create and seed the database with sample data. 

Failure to complete these steps will result in failed queries when running the application.

## Usage

Enter ``node index.js`` from the integrated terminal to run the application. Upon completion of that command, the application will open with a root menu that allows the user to perform a variety of database operations. 

Selecting one of these options will either display a table of returned records (if the operation was simple query to get data) or the user could be prompted for subsequent information before inserting or updating records. 

All operations should contain detialed prompts to complete the required information.

## License

This project is licensed under the terms of the [MIT license](https://choosealicense.com/licenses/mit/).

## Contributing

I'm always looking for feedback on how I can improve my code. If you see a way that I could be more succinct, or leverage promises better, I would like to hear the feedback.

## Tests

There are no tests defined for this application.

## Questions

This application was created by [Chris Leavengood](https://github.com/Cleave13). Any questions related to this application can be sent to chrisleavengood@gmail.com