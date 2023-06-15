const { callbackQery } = require("../models/callbackQueryModel");

const callbackDetail= async(req,res)=>{
try {
    const {first_name,contact,email,gradYear}=req.body;
    if(!first_name){
        res.send("First Name is required");
    }
    if(!contact){
        res.send("Contact number is required");
    }
    if(!email){
        res.send("Email is required");
    }
    if(!gradYear){
        res.send("Graduation year is required");
    }

    const data=await new callbackQery({
        first_name,
        email,
        gradYear,
        contact
    }).save();

    if(data){
        res.status(201).send({
            success:true,
            message:'Details submitted',
            data
        })
    }  
} catch (error) {
    console.log(error);
}
};

module.exports={callbackDetail};