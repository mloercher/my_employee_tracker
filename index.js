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
  database: "tracker_db",
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
console.log("------------------");
console.log(" EMPLOYEE TRACKER ");
console.log("------------------");
mainPromptUser();

//VIEW ALL Functions________________________________****CHANGE PATHWAYS + LITERALS****
const viewAllDepartments = () => {
  console.log("Viewing Departments");
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("-------------------------");
    console.log(" VIEWING ALL DEPARTMENTS ");
    console.log("-------------------------");
    console.table(rows);
    mainPromptUser();
  });
};

const viewAllRoles = () => {
  console.log("Viewing Roles");
  const sql = `SELECT * FROM roles JOIN departments WHERE roles.department_id = departments.id`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("-------------------");
    console.log(" VIEWING ALL ROLES ");
    console.log("-------------------");
    console.table(rows);
    mainPromptUser();
  });
};

const viewAllEmployees = () => {
  console.log("Viewing Employees");
  const sql = `SELECT * FROM employees JOIN roles WHERE employees.role_id = roles.id`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("-----------------------");
    console.log(" VIEWING ALL EMPLOYEES ");
    console.log("-----------------------");
    console.table(rows);
    mainPromptUser();
  });
};

//ADD Functions_______________________________________
function addDepartment() {
  console.log("Adding Department");
  inquirer
    .prompt({
      type: "input",
      name: "departmentName",
      message: "What is the name of the department?",
    })
    .then((answer) => {
      const sql = `INSERT INTO departments (name)
    VALUES ("${answer.departmentName}")`;
      db.query(sql, (err, rows) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("-----------------------");
        console.log("   DEPARTMENT ADDED    ");
        console.log("-----------------------");
        console.table(rows);
        mainPromptUser();
      });
    });
}

function addRole() {
  console.log("Adding Role");
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleTitle",
        message: "What is the Role you would like to add?",
      },
      {
        type: "input",
        name: "roleSalary",
        message: "What is the salary of this role?",
      },
      {
        type: "input",
        name: "roleDeptId",
        message: "What is the department id of this role?",
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES
      ("${answer.roleTitle}","${answer.roleSalary}","${answer.roleDeptId}")`;
      db.query(sql, (err, rows) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("-----------------------");
        console.log("       ROLE ADDED      ");
        console.log("-----------------------");
        console.table(rows);
        mainPromptUser();
      });
    });
}

function addEmployee() {
  console.log("Adding Employee");
  inquirer
    .prompt([
      {
        type: "input",
        name: "empFirst",
        message: "What is employee's first name?",
      },
      {
        type: "input",
        name: "empLast",
        message: "What is employee's last name?",
      },
      {
        type: "input",
        name: "empId",
        message: "What is the role id of this employee?",
      },
      {
        type: "input",
        name: "empMgrId",
        message: "What is the manager id of this employee?",
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES
      ("${answer.empFirst}","${answer.empLast}",${answer.empId},${answer.empMgrId})`;
      db.query(sql, (err, rows) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("------------------");
        console.log("  EMPLOYEE ADDED  ");
        console.log("------------------");
        console.table(rows);
        mainPromptUser();
      });
    });
}

//UPDATE Function______________________________________****CHANGE PATHWAYS + LITERALS****
function updateEmployeeRole() {
  console.log("Updating Employee Role");
  inquirer
    .prompt([
      {
        type: "input",
        name: "selectUpdateEmp",
        message:
          "Which employee's role would you like to update? (enter employee id)",
      },
      {
        type: "input",
        name: "updateEmpRole",
        message: "What is the employee's new role id?",
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO employees SET role_id = '${answer.updateEmpRole}' WHERE id = '${answer.selectUpdateEmp}'`;
      db.query(sql, (err, rows) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("--------------------");
        console.log("  EMPLOYEE UPDATED  ");
        console.log("--------------------");
        console.table(rows);
        mainPromptUser();
      });
    });
}
