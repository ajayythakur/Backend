const { hashedPassword, comparePassword } = require('../helper/authHelper');
const {userSchema} = require('../models/userModel');
const jwt = require('jsonwebtoken');

const resgisterController=async(req,res)=>{
    try {
        const {name,last_name,email,phone,address,age,password}=req.body;
        //check if fields are provided or not
        if(!name){
            return res.send({message:'Name is Required'});
        }
        if(!last_name){
            return res.send({message:'Last Name is Required'});
        }
        if(!email){
            return res.send({message:'Email is Required'});
        }
        if(!phone){
            return res.send({message:'Phone is Required'});
        }
        if(!address){
            return res.send({message:'Address is Required'});
        }
        if(!age){
            return res.send({message:'Age is Required'});
        }
        if(!password){
            return res.send({message:'Password is Required'});
        }

        //check if user exist
        const userExist=await userSchema.findOne({email});

        //if user exists then
        if(userExist){
        return res.status(200).send({
            success:false,
            message:'User Already Exists...Try to Login or use some different E-mail Address'
        });
        }

        //if user is not registered then registering the user

        //hashing the password before saving in database
        const hashPassword=await hashedPassword(password);

        // saving user details

        const user=await new userSchema({
            name, 
            last_name,
            email,
            address,
            phone,
            age,
            password:hashPassword
        }).save();
        res.status(201).send({
            success:true,
            message:"User Registered Successfully",
            user,
        });
    } catch (error) {
        console.log('Error in User Registration',error);
    }
}

const loginController=async(req,res)=>{
try {
    const{email,password}=req.body;

    //checking if input fields are Empty
    if(!email || !password){
        return res.status(404).send({
            success:false,
            message:'Invalid Email or Password'
        });
    }

            //checking if user is registered or not
            const user=await userSchema.findOne({email})
            if(!user){
                return res.status(404).send({
                    success:false,
                    message:'User is not registered. Try to register first'
                });
            }

            //if user is registered then compare the password
            const match=await comparePassword(password,user.password);
            if(!match){
                res.status(200).send({
                    success:false,
                    message:'Invalid Password',
                    entered_password:password,
                    // user_password:user.password
                });
            }

            //if password is matched then generating token
            const token =await jwt.sign({_id:user._id}, process.env.Secret_Key, {expiresIn:"1d"});
            res.status(200).send({
                success:true,
                message:'Login Successfully',
                user:{
                    _id:user._id,
                    name:user.name,
                    last_name:user.last_name,
                    email:user.email,
                    address:user.address,
                    phone:user.phone,
                    age:user.age
                },
                token
            });
} catch (error) {
    console.log('Error in generating token',error);
    res.status(500).send({
        success:false,
        message:'Error in Login',
        error
    });
}
}

const testController=(req,res)=>{
    try {
        res.send('Protected Route')
    } catch (error) {
        res.send('Error');
    }
}

module.exports={resgisterController,loginController,testController}