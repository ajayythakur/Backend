const bcrypt = require('bcrypt')

const hashedPassword= async(password)=>{
    try {
        const salt=10;
        const hashPassword=await bcrypt.hash(password,salt);
        return hashPassword;
    } catch (error) {
        console.log('Error in hashing password',error);
    }
};

const comparePassword= async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
}

module.exports={hashedPassword,comparePassword}