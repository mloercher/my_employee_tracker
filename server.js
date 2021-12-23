const inquirer = require("inquirer");
const mysql2 = require("mysql2");
require("dotenv").config();
require("console.table");

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
});

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
          connection.end();
          break;
      }
    });
};

//START prompts
mainPromptUser();

//VIEW ALL Functions________________________________
function viewAllDepartments() {
  console.log("Viewing Departments");
  mainPromptUser();
}
function viewAllRoles() {
  console.log("Viewing Roles");
  mainPromptUser();
}
function viewAllEmployees() {
  console.log("Viewing Employees");
  mainPromptUser();
}

//ADD Functions_______________________________________
function addDepartment() {
  console.log("Adding Department")
  mainPromptUser();
}
function addRole() {
  console.log("Adding Role")
  mainPromptUser();
}
function addEmployee() {
  console.log("Adding Employee")
  mainPromptUser();
}

//UPDATE Function_________________
function updateEmployeeRole() {
  console.log("Updating Employee")
  mainPromptUser();
}


// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: "list",
//       name: "addDept",
//       message: "What department would you like to add?",
//       choices: ["Sales", "Engineering", "Finance", "Legal"],
//     },
//     {
//       type: "list",
//       name: "addRole",
//       message: "What role would you like to add?",
//       choices: [
//         "Sales Lead",
//         "Sales Person",
//         "Lead Engineer",
//         "Software Engingeer",
//         "Account Manager",
//         "Accountant",
//         "Legal Team Lead",
//         "Lawyer",
//       ],
//     },
//     {
//       type: "list",
//       name: "roleSalary",
//       message: "What is the salary of the role?",
//       choices: [
//         "$80,000",
//         "$100,000",
//         "$120,000",
//         "$125,000",
//         "$150,000",
//         "$160,000",
//         "$190,000",
//         "$250,000",
//       ],
//     },
//     {
//       type: "list",
//       name: "roleDept",
//       message: "What department does the role belong to?",
//       choices: ["Sales", "Engineering", "Finance", "Legal"],
//     },
//     {
//       type: "input",
//       name: "employeeFirst",
//       message: "What is the employee's first name? (Required)",
//       validate: (employeeFirstInput) => {
//         if (employeeFirstInput) {
//           return true;
//         } else {
//           console.log("You must enter a first name for your employee!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "employeeLast",
//       message: "What is the employee's last name? (Required)",
//       validate: (employeeLastInput) => {
//         if (employeeLastInput) {
//           return true;
//         } else {
//           console.log("You must enter a last name for your employee!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "list",
//       name: "employeeRole",
//       message: "What is the employee's role?",
//       choices: [
//         "Sales Lead",
//         "Sales Person",
//         "Lead Engineer",
//         "Software Engingeer",
//         "Account Manager",
//         "Accountant",
//         "Legal Team Lead",
//         "Lawyer",
//       ],
//     },
//     {
//       type: "list",
//       name: "employeeRole",
//       message: "What is the employee's role?",
//       choices: [
//         "Sales Lead",
//         "Sales Person",
//         "Lead Engineer",
//         "Software Engingeer",
//         "Account Manager",
//         "Accountant",
//         "Legal Team Lead",
//         "Lawyer",
//       ],
//     },
//     {
//       type: "list",
//       name: "employeeManager",
//       message: "Who is the employee's manager?",
//       choices: [
//         "David Wallace",
//         "Kelly Kapoor",
//         "Pam Beasley",
//         "Dwight Schrute",
//         "Michael Scott",
//         "Jan Levinson",
//         "Leslie Knope",
//         "Ben Wyatt",
//       ],
//     },
//     {
//       type: "input",
//       name: "employeeRole",
//       message: "What employee's role would you like to update?",
//       validate: (employeeChoice) => {
//         if (employeeChoice) {
//           return true;
//         } else {
//           console.log("You must enter an Office number for your manager!");
//           return false;
//         }
//       },
//     },
//   ]);
// };

// //viewALL mysql queries________________
// function viewAllDepartments() {
//   var query = `SELECT * FROM department`
//   connection.query(query, function (err, res) {
//     if (err) throw err;
//     console.table("response", res);
//   mainPromptUser();
//   // connection.query(`SELECT * FROM department`).then(([rows]) => {
//   // });
// }

// function viewallRoles() {
//   connection.query(`SELECT * FROM department`).then(([rows]) => {
//     console.table(rows);
//   });
// }

// function viewallEmployees() {
//   connection.query(`SELECT * FROM department`).then(([rows]) => {
//     console.table(rows);
//   });
// }

// //viewALL mysql queries________________
// function viewAllDepartments() {
//   connection.query(`SELECT * FROM department`).then(([rows]) => {
//     console.table(rows);
//     // promptUser();
//   });
// }

// function viewallRoles() {
//   connection.query(`SELECT * FROM department`).then(([rows]) => {
//     console.table(rows);
//   });
// }

// function viewallEmployees() {
//   connection.query(`SELECT * FROM department`).then(([rows]) => {
//     console.table(rows);
//   });
// }

// //add functions

// // function addDepartment() {
// //   connection.query(`INSERT INTO department ()`).then([rows]) => {
// //   console.table(rows);
