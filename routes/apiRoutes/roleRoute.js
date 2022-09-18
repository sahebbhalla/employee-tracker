const express = require('express');
const router = express.Router();
const db =require('../../db/connection');

router.get('/roles',(req,res)=>{
    const sql = "SELECT * FROM roles"
    db.query(sql,(err,results)=>{
        if(err){
            res.status(400).json({err:err.message});
            return;
        }
        res.json({
            message:"Success",
            data:results
        })
    })
})
router.post('/roles',({body},res)=>{
    const sql ="INSERT INTO roles(title,salary,department_id) VALUES(?,?,?)";
    const params=[body.title,body.salary,body.department_id]
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
module.exports = router;