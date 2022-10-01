const inquire= require("inquirer");
const db = require("../db/connection");

const allRoles = () => {
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

const addRoles =  (firstName,lastName,roleId,manager) => {
  const sql = `INSERT INTO employee(first_name,last_name,role_id,manager_id) 
  VALUES(?,?,?,?)`;
  const params =[firstName,lastName,roleId,manager];
  db.query(sql,params,(err,results)=>{
      if(err){
          console.log(err);
          return;
        }
        console.log(results);
  })

};

module.exports = {
  allRoles,
  addRoles,
};
