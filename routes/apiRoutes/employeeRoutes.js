const express = require('express');
const router = express.Router();
const db =require('../../db/connection');

router.get('/employees',(req,res)=>{
    const sql ="SELECT * FROM employee";

    db.query(sql,(err,results)=>{
        if(err){
            res.status(500).json({error:err.message});
            return;
        }
        res.json({
            message:"Success",
            data:results
        })
    })
})
router.post('/employees',({body},res)=>{
    const sql =`INSERT INTO employee(first_name,last_name,role_id,manager_id) 
    VALUES(?,?,?,?)`;
    const params =[body.first_name,body.last_name,body.role_id,body.manager_id];
    db.query(sql,params,(err,results)=>{
        if(err){
            res.status(500).json({error:err.message});
            return;
        }
        res.json({
            message:"Success",
            data:body
        })
    })
})

module.exports =router