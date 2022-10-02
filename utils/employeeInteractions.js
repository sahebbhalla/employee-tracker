const inquire= require("inquirer");
const syncsql =require("sync-sql")
const db = require("../db/connection");
var output=[];
var outputemp=[];
var config ={
  host:'localhost',
  port:3306,
  user:'root',
  password:'Prototype@905',
  database:'company'
}
const loadRoles=()=>{
  const rolesQuery = `SELECT * FROM roles;`;
  var returnArray =[];
     output = syncsql.mysql(config,rolesQuery).data.rows

    output.forEach((result)=>{
        returnArray.push(result.title);
    })
    return returnArray
}

const loadEmployees =()=>{
  const rolesQuery = `SELECT *FROM employee`;
  var returnArray =[];
     outputemp = syncsql.mysql(config,rolesQuery).data.rows
    
    outputemp.forEach((result)=>{
        returnArray.push(result.first_name + " "+ result.last_name);
    })
    return returnArray
}
const allEmployee = () => {
  const sql = `select e.id,e.first_name as FirstName, e.last_name as LastName, r.title as Role,emag.first_name as Manager
   from employee e 
   INNER JOIN roles r ON e.role_id=r.id
   INNER JOIN employee emag ON e.id =emag.manager_id
   
   `;

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
      type: "list",
      name: "roleId",
      message:"Employes Role ?",
      choices:await loadRoles()
    },
    {
      type: "list",
      name: "manager",
      message:"Who is the employee manager ?",
      choices:await loadEmployees()
    }
  ])
  .then((results)=>{
    results.roleId = output.find(element=>element.title==results.roleId);
    results.manager = outputemp.find(result=>(result.first_name + " "+ result.last_name) ==results.manager);
    const sql = `INSERT INTO employee(first_name,last_name,role_id,manager_id) 
    VALUES(?,?,?,?)`;
    const params =[results.firstName,results.lastName,results.roleId.id,results.manager.id];
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
