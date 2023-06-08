const mongoose = require('mongoose');

const connect=async()=>{
    try {
        const connection=await mongoose.connect(process.env.DB_URL);
        console.log('Connected to Database');
    } catch (error) {
        console.log('Error in connecting to Database',error);
    }

}

module.exports= connect