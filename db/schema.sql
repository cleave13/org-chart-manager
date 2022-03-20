DROP DATABASE IF EXISTS org_chart_db;
CREATE DATABASE org_chart_db;

USE org_chart_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT, 
  FOREIGN KEY (department_id) REFERENCES department(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  FOREIGN KEY (manager_id) REFERENCES employee(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  PRIMARY KEY (id)
  );