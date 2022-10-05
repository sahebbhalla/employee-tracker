const inquire = require("inquirer");
const syncsql =require("sync-sql")
var  output =[]; 
const db = require("../db/connection");
var config ={
    host:'localhost',
    port:3306,
    user:'root',
    password:'Prototype@905',
    database:'company'
}

const loadDepartments = async () => {
  const departmentQuery = `SELECT * FROM department;`;
  var returnArray =[];
     output = syncsql.mysql(config,departmentQuery).data.rows

    output.forEach((result)=>{
        returnArray.push(result.name);
    })
    return returnArray

};

const allRoles = () => {
  const sql = "SELECT * FROM roles";

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("");
    console.table(results);
    return results;
  });
};

const addRoles = async () => {
 
  await inquire
    .prompt([
      {
        type: "text",
        name: "roleName",
        message: "What is the name of this role ?",
      },
      {
        type: "text",
        name: "salary",
        message: "What is the salary of this role ?",
      },
      {
        type: "list",
        name: "department",
        message: "Which department Does this role belong to ? ",
        choices: await loadDepartments(),
      },
    ])
    .then((results) => {
        results.department = output.find(element=>element.name==results.department);

        const sql = `INSERT INTO roles (title,salary,department_id) 
      VALUES(?,?,?)`;
      const params = [
        results.roleName,
        results.salary,
        results.department.id
      ];
      db.query(sql, params, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        allRoles()
      });
    });
};

module.exports = {
  allRoles,
  addRoles,
};
