const jwt=require('jsonwebtoken');
const userSchema = require('../models/userModel');

const signInMiddleware=(req,res,next)=>{
    try {
        const verify=jwt.verify(req.headers.authorization, process.env.Secret_Key);
        req.user=verify;
        next();
    } catch (error) {
        console.log(error);
        res.send("Invalid token")
    }
};

module.exports={signInMiddleware};