const inquire= require("inquirer");
const db = require("../db/connection");

const allDepartments = () => {
  const sql = "SELECT * FROM department";

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

const addDepartment =async () => {
    await inquire
    .prompt([
      {
        type: "text",
        name: "departmentName",
        message:"Please Enter the department Name?"
      }
    ])
    .then((results)=>{
      const sql = `INSERT INTO department(name) 
      VALUES(?)`;
      const params =[results.departmentName];
     db.query(sql,params,(err,results)=>{
          if(err){
              console.log(err);
              return;
            }
            console.log(results.affectedRows);
      })
   
    });

};

module.exports = {
    allDepartments,
    addDepartment
};
