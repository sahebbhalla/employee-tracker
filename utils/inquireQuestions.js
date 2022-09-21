const inquire = require("inquirer");

const Employee = require('../utils/employeeInteractions')


const initialQuestion = () => {
  console.log("------------------------------------------")
  inquire
    .prompt([
      {
        type: "list",
        name: "actionSelection",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department"
        ],
      },
    ])
    .then((answers) => {
        console.log(answers.actionSelection);
        switch(answers.actionSelection){
            case "View All Employees":
                Employee.allEmployee();
                initialQuestion();
                break;
            case "Add Employee":
                Employee.addEmployee();
                initialQuestion();
                break
            case "Update Employee Role":
                Employee.updateEmployeeRole();
                initialQuestion();
                break;
            case "View All Roles":
                Roles.viewRoles();
                initialQuestion();
                break;
            case "Add Role":
                Roles.addRole();
                initialQuestion()
                break;
                
            case "View All Departments":
                Department.viewDepartments()
                initialQuestion();
                break;
              
            case "Add Department":
                Department.addDepartment();
                initialQuestion()
                break;
        }
    });
};


module.exports=initialQuestion