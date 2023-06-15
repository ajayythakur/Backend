const mongoose = require('mongoose');

const Schema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    gradYear:{
        type:String,
        required:true
    }
},{timestamps:true})

const callbackQery=mongoose.model('callback_Queries',Schema);

module.exports={callbackQery};