const express =require('express');
const router = express.Router();

router.use(require('./departmentRoute'));
router.use(require('./roleRoute'));

module.exports= router;