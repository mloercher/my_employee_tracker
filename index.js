const inquirer = require('inquirer');
const mysql2 = require('mysql2');
require('dotenv').config();
require('console.table');

const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: 

});



const promptUser = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["view all departments","view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
        }
    ])
}

promptUser().then((answers) => {
    switch(answers.action){
        case "view all departments":
            viewAllDepartments();
            break;
        case "view all roles":

            break;
        case "view all employees":

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

//mysql queries________________
function viewAllDepartments () {
    connection.query(`SELECT * FROM department`).then(([rows])=> {
        console.table(rows);
    })
}



