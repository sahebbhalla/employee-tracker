const inquire = require("inquirer");

const { allEmployee, addEmployee ,updateEmployeeRole} = require("../utils/employeeInteractions");
const { allRoles, addRoles } = require("../utils/roleInteractions");

const initialQuestion = () => {
  console.log("------------------------------------------");
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
          "Add Department",
        ],
      },
    ])
    .then(async (answers) => {
      switch (answers.actionSelection) {
        case "View All Employees":
          await allEmployee();
          initialQuestion();
          break;
        case "Add Employee":
          await addEmployee();
          initialQuestion();
          break;
        case "Update Employee Role":
          await updateEmployeeRole();
          initialQuestion();
          break;
        case "View All Roles":
          await allRoles();
          initialQuestion();
          break;
        case "Add Role":
          await addRole();
          initialQuestion();
          break;

        case "View All Departments":
          await allDepartments();
          initialQuestion();
          break;

        case "Add Department":
          await addDepartment();
          initialQuestion();
          break;
      }
    });
};

module.exports = initialQuestion;
