const express =require('express');
const router = express.Router();

router.use(require('./departmentRoute'));
router.use(require('./roleRoute'));
router.use(require('./employeeRoutes'));

module.exports= router;