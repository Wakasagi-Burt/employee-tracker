const inquirer = require("inquirer"); //dependencies for server.js
const consoleTable = require("console.table");
const mysql2 = require("mysql2");
const { default: Choices } = require("inquirer/lib/objects/choices");
const { Action } = require("rxjs/internal/scheduler/Action");
const { allowedNodeEnvironmentFlags, exit } = require("process");
const { type } = require("os");

const connection = mysql2.createConnection({   //connection to sql db
    host: "localhost",
    port: 3306,
    user: "root",
    password: "8letters",
    database: "employee_db"
});

function choose() {
    inquirer
    .prompt ({
        name: "Action",
        type: "list",
        message: "Please choose one of the options listed",
        choices: 
        [
            "View Departments",
            "View Roles",
            "View Employees",
            "Add Employee",
            "Add Role",
            "Add Department"
        ]
    }) .then(function(answer) {
        switch (answer.Action) {
            case "View Departments":
                viewDepartment();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employees":
                viewEmployees();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Department":
                addDepartment();
                break;
            default:
                break;
        }
    });

    function viewDepartment (){
        let query = "SELECT * FROM department"; connection.query (query,function (err, res){
            if(err) throw err;
            console.table("all Departments:", res);
            choose();
        })
    };

    function viewRoles (){
        let query = "SELECT * FROM role"; connection.query (query,function (err, res){
            if(err) throw err;
            console.table("all roles:", res);
            choose();
        })
    };

    function viewEmployee (){
        let query = "SELECT * FROM employee"; connection.query (query,function (err, res){
            if(err) throw err;
            console.table("all employees:", res);
            choose();
        })
    };
}