const express = require('express');
const {resgisterController, loginController, testController} = require('../controller/authController');
const { signInMiddleware } = require('../midddleware/authMiddleware');
const { paymentController, tokenController } = require('../controller/paymentController');


//Router Object
const router=express.Router();

//Routes
// router.post('/register',resgisterController); 
router.post('/register',resgisterController);
router.post('/login',loginController);
router.get('/test',signInMiddleware,testController)
router.get('/braintree/token',tokenController)
router.post('/braintree/payment',paymentController);

module.exports=router; 