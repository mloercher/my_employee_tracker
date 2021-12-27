const inquirer = require("inquirer");
const PORT = process.env.PORT || 3001;
const sql = require("mysql2");
require("dotenv").config();
require("console.table");
//require express___________________
const express = require("express");
const app = express();
//Express middleware
app.use(express.urlencoded({ extended: false }));

//Connect to SQL database
const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "tracker_db"
});

//***END OF REQUIREMENTS/CONNECTION________________

//First, MAIN prompt______________________________
const mainPromptUser = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
        "nothing",
      ],
    })
    .then(function ({ action }) {
      switch (action) {
        case "view all departments":
          viewAllDepartments();
          break;
        case "view all roles":
          viewAllRoles();
          break;
        case "view all employees":
          viewAllEmployees();
          break;
        case "add a department":
          addDepartment();
          break;
        case "add a role":
          addRole();
          break;
        case "add an employee":
          addEmployee();
          break;
        case "update an employee role":
          updateEmployeeRole();
          break;
        case "nothing":
          console.log("Finished making changes to Employee data");
          db.end();
          break;
      }
    });
};

//START prompts
mainPromptUser();

//VIEW ALL Functions(GET)________________________________****CHANGE PATHWAYS + LITERALS****
const viewAllDepartments = () => {
  console.log("Viewing Departments");
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
      return;
    }
    console.table(rows)
  });
  mainPromptUser();
};

const viewAllRoles = () => {
  console.log("Viewing Roles");
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
      return;
    }
    console.table(rows)
  });
  mainPromptUser();
};

const viewAllEmployees = () => {
  console.log("Viewing Employees");
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err)
        return;
      }
      console.table(rows)
  });
  mainPromptUser();
};

//ADD Functions_______________________________________****CHANGE PATHWAYS + LITERALS****
function addDepartment() {
  console.log("Adding Department");
    const sql = `INSERT INTO departments (name)
    VALUES ("Sales");`;
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      console.table(rows)
  });
  mainPromptUser();
}

function addRole() {
  console.log("Adding Role");
    const sql = `INSERT INTO role (title, salary, department_id)
    VALUES
      ('fdf',"100000", NULL);`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err)
        return;
      }
      console.table(rows)
  });
  mainPromptUser();
}

function addEmployee() {
  console.log("Adding Employee");
    const sql = `INSERT INTO role (title, salary, department_id)
    VALUES
      ('fdf',"100000", NULL);`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err)
        return;
      }
      console.table(rows)
  });
  mainPromptUser();
}

//UPDATE Function______________________________________****CHANGE PATHWAYS + LITERALS****
function updateEmployeeRole() {
  console.log("Updating Employee Role");
  
    const sql = `INSERT INTO role (title, salary, department_id)
    VALUES
      ('fdf',"100000", NULL);`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err)
        return;
      }
      console.table(rows)
  });
  mainPromptUser();
};
