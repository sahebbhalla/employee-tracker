const express = require('express');
const router = express.Router();
const db =require('../../db/connection.js');

router.get('/departments',(req,res)=>{
    const sql ="SELECT * FROM department";

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
router.post('/departments',({body},res)=>{
    const sql ="INSERT INTO department(name) VALUES(?)";
    
    db.query(sql,body.department_name,(err,results)=>{
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

module.exports = router;