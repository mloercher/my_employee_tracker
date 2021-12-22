const inquirer = require("inquirer");
const mysql2 = require("mysql2");
require("dotenv").config();
require("console.table");

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
});

const promptUser = () => {
  return inquirer.prompt([
    {
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
      ],
    },
    {
      type: "list",
      name: "addDept",
      message: "What department would you like to add?",
      choices: ["Sales", "Engineering", "Finance", "Legal"],
    },
    {
      type: "list",
      name: "addRole",
      message: "What role would you like to add?",
      choices: [
        "Sales Lead",
        "Sales Person",
        "Lead Engineer",
        "Software Engingeer",
        "Account Manager",
        "Accountant",
        "Legal Team Lead",
        "Lawyer",
      ],
    },
    {
      type: "list",
      name: "roleSalary",
      message: "What is the salary of the role?",
      choices: [
        "$80,000",
        "$100,000",
        "$120,000",
        "$125,000",
        "$150,000",
        "$160,000",
        "$190,000",
        "$250,000",
      ],
    },
    {
      type: "list",
      name: "roleDept",
      message: "What department does the role belong to?",
      choices: ["Sales", "Engineering", "Finance", "Legal"],
    },
    {
      type: "input",
      name: "employeeFirst",
      message: "What is the employee's first name? (Required)",
      validate: (employeeFirstInput) => {
        if (employeeFirstInput) {
          return true;
        } else {
          console.log("You must enter a first name for your employee!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeLast",
      message: "What is the employee's last name? (Required)",
      validate: (employeeLastInput) => {
        if (employeeLastInput) {
          return true;
        } else {
          console.log("You must enter a last name for your employee!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "employeeRole",
      message: "What is the employee's role?",
      choices: [
        "Sales Lead",
        "Sales Person",
        "Lead Engineer",
        "Software Engingeer",
        "Account Manager",
        "Accountant",
        "Legal Team Lead",
        "Lawyer",
      ],
    },
    {
      type: "list",
      name: "employeeRole",
      message: "What is the employee's role?",
      choices: [
        "Sales Lead",
        "Sales Person",
        "Lead Engineer",
        "Software Engingeer",
        "Account Manager",
        "Accountant",
        "Legal Team Lead",
        "Lawyer",
      ],
    },
    {
      type: "list",
      name: "employeeManager",
      message: "Who is the employee's manager?",
      choices: [
        "David Wallace",
        "Kelly Kapoor",
        "Pam Beasley",
        "Dwight Schrute",
        "Michael Scott",
        "Jan Levinson",
        "Leslie Knope",
        "Ben Wyatt",
      ],
    },
    {
      type: "input",
      name: "employeeRole",
      message: "What employee's role would you like to update?",
      validate: (employeeChoice) => {
        if (employeeChoice) {
          return true;
        } else {
          console.log("You must enter an Office number for your manager!");
          return false;
        }
      },
    },
  ]);
};

promptUser().then((answers) => {
  switch (answers.action) {
    case "view all departments":
      viewAllDepartments();
      break;
    case "view all roles":
      viewallRoles();
      break;
    case "view all employees":
      viewallEmployees();
      break;
    case "add a department":
      break;

    case "add a role":
      break;
    case "add an employee":
      break;
    case "update an employee role":
      break;
  }
});

//viewALL mysql queries________________
function viewAllDepartments() {
  connection.query(`SELECT * FROM department`).then(([rows]) => {
    console.table(rows);
    promptUser();
  });
}

function viewallRoles() {
  connection.query(`SELECT * FROM department`).then(([rows]) => {
    console.table(rows);
  });
}

function viewallEmployees() {
  connection.query(`SELECT * FROM department`).then(([rows]) => {
    console.table(rows);
  });
}
