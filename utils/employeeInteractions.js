const inquire= require("inquirer");
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
    return results;
  });
};

const addEmployee = async () => {
 await inquire
  .prompt([
    {
      type: "text",
      name: "firstName",
      message:"Employees First name ?"
    },
    {
      type: "text",
      name: "lastName",
      message:"Employees last name ?"
    },
    {
      type: "text",
      name: "roleId",
      message:"Employes Role ?"
    },
    {
      type: "text",
      name: "manager",
      message:"Enter the name of the manager ?"
    }
  ])
  .then((results)=>{
    const sql = `INSERT INTO employee(first_name,last_name,role_id,manager_id) 
    VALUES(?,?,?,?)`;
    const params =[results.firstName,results.lastName,results.roleId,results.manager];
   db.query(sql,params,(err,results)=>{
        if(err){
            console.log(err);
            return;
          }
          console.log(results);
    })
 
  });

};
const updateEmployeeRole = async ()=>{
  await inquire
  .prompt([
    {
      type: "text",
      name: "firstName",
      message:"Employees First name ?"
    },
    {
      type: "text",
      name: "lastName",
      message:"Employees last name ?"
    },
    {
      type: "text",
      name: "roleId",
      message:"Employes Role ?"
    },
    {
      type: "text",
      name: "manager",
      message:"Enter the name of the manager ?"
    }
  ])
  .then((results)=>{
    const sql = `INSERT INTO employee(first_name,last_name,role_id,manager_id) 
    VALUES(?,?,?,?)`;
    const params =[results.firstName,results.lastName,results.roleId,results.manager];
   db.query(sql,params,(err,results)=>{
        if(err){
            console.log(err);
            return;
          }
          console.log(results);
    })
 
  });

};

module.exports = {
  allEmployee,
  addEmployee,
  updateEmployeeRole,
};
