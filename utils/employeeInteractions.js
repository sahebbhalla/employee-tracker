const { default: inquirer } = require("inquirer");
const db = require("../db/connection");

const allEmployee = () => {
  const sql = "SELECT * FROM employee";

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("");
    console.table(results);
  });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "text",
        name: "firstName",
        
      },
    ])
    .then();
};

module.exports = {
  allEmployee,
  addEmployee,
};
