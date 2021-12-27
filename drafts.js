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
//         "80000",
//         "100000",
//         "120000",
//         "125000",
//         "150000",
//         "160000",
//         "190000",
//         "250000",
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
