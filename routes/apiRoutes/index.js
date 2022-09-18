const express =require('express');
const router = express.Router();

router.use(require('./departmentRoute'));

module.exports= router;