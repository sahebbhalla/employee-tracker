const mysql = require('mysql2')

const db = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'Prototype@905',
        database:'company'
    },
    console.log("Connected to the Company Database. ")
)

module.exports=db;