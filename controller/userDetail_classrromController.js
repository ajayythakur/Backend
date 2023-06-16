const {detailSchema} = require('../models/userDetails_classroom');

const userDetail=async(req,res)=>{
    try {
        const {name,email,phone,gradYear,degree,college,target_company,goal,state,pincode,city,address_one,address_two,country}=req.body;
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
        if(!degree){
           return res.send("Date is required");
        }
        if(!email){
           return res.send("Email is required");
        }
        if(!country){
            return res.send("Country is required");
         }
         if(!address_one){
            return res.send("Address is required");
         }
         if(!address_two){
            return res.send("Address is required");
         }
         if(!state){
            return res.send("State is required");
         }
         if(!city){
            return res.send("City is required");
         }
         if(!pincode){
            return res.send("Pincode is required");
         }
         if(!goal){
            return res.send("Goal is required");
         }
         if(!target_company){
            return res.send("Company is required");
         }

        // const userExist= detailSchema.findOne({email});
        const findUser =await detailSchema.findOne({email})
        if(findUser){
            res.status(200).send({
                success:false,
                message:'You have submitted already'
            });
        }
        else{
            const user= await new detailSchema({
                name,
                email, 
                address_one,
                address_two,
                phone,
                gradYear,
                college,
                degree,
                state,
                city,
                pincode,
                goal,
                target_company,
                country
            }).save();
            res.status(201).send({
                success:true,
                message:"Detail's Submitted Successfully..Thank You !",
                user
            })

        }  

    } catch (error) {
        console.log('Error in saving classroom detail',error)
    }
}

module.exports={userDetail};
