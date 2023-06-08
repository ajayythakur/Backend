const express = require('express');
const {resgisterController, loginController, testController} = require('../controller/authController');
const { signInMiddleware } = require('../midddleware/authMiddleware');

//Router Object
const router=express.Router();

//Routes
// router.post('/register',resgisterController); 
router.post('/register',resgisterController);
router.post('/login',loginController);
router.get('/test',signInMiddleware,testController)

module.exports=router; 