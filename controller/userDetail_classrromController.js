const {detailSchema} = require('../models/userDetails_classroom');

const userDetail=async(req,res)=>{
    try {
        const {name,email,phone,gradYear,college,date,country}=req.body;
        if(!name){
           return res.send("Name is required");
        }
        if(!phone){
           return res.send("Phone is required");
        }
        if(!gradYear){
           return res.send("Graduation Year is required");
        }
        if(!college){
           return res.send("College Name is required");
        }
        if(!date){
           return res.send("Date is required");
        }
        if(!email){
           return res.send("Email is required");
        }
        if(!country){
            return res.send("Country is required");
         }

        const userExist= detailSchema.findOne({email});
        if(userExist){
            res.status(200).send({
                success:false,
                message:'You have submitted already'
            });
        }
        const user= await new detailSchema({
                name,
                email,
                phone,
                gradYear,
                college,
                country,
                date,
            }).save();
            res.status(201).send({
                success:true,
                message:"Detail's Submitted Successfully..Thank You !",
                user
            })
        

    } catch (error) {
        console.log('Error in saving classroom detail',error)
    }
}

module.exports={userDetail};
