// const express= require('express'); 
// const router=express.Router(); 
// const empleado=require('../controllers/empleados.controllers'); 

import express from 'express';
const router=express.Router(); 
import empleado from '../controllers/empleados.controllers.js';


router.get('/empleados',empleado.getEmpleado); 
router.post('/empleados', empleado.addEmpleado); 
router.put('/empleados', empleado.updateEmpleado); 
router.delete('/empleados', empleado.deleteEmpleado); 

module.exports=router;