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
    address_one:{
        type:String,
        required:true
    },
    address_two:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
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
    degree:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true,     
    },
    goal:{
        type:String,
        required:true
    },
    target_company:{
        type:String,
        required:true
    },
},{timestamps:true})

const detailSchema = mongoose.model("userClassroomInfo",Schema);

module.exports={detailSchema};