const mongoose= require('mongoose');

const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unqiue:true,
        required:true
    },
    phone:{
        type:String,
        required:true,
    },
    gradYear:{
        type:String,
        required:true,
    },
    college:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,     
    },
    date:{
        type:String,
        required:true,
    }
},{timestamps:true})

const detailSchema = mongoose.model("userClassroomInfo",Schema);

module.exports={detailSchema};