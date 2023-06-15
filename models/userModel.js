const mongoose=require("mongoose");

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },    
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

const userSchema = mongoose.model('user',Schema);
module.exports={userSchema};