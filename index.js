const express= require("express");
const app= express();
const env = require('dotenv');
const connect = require('./config/db');
const route = require('./routes/authRoute');
// const braintree=require('./routes/paymentRoute');
const cors = require('cors');
const course = require("./API's/Routes for API's/CourseApiRoute");

//configure dot env 
env.config();

//middlewares
app.use(cors({origin:'*'})) 
app.use(express.json());

//Route
app.use(route);
// app.use(braintree);
app.use('/',course);

//rest API
app.get('/',(req,res)=>{
res.send('<h1>Welcome</h1>')
})

const PORT=process.env.PORT || 8080 ;

app.listen(PORT, async()=>{
    try {
       await connect();
       console.log('Connected to Database')
    } catch (error) {
        console.log('Error in Connecting to Port',error)
    }
    console.log(`App is running on Port ${process.env.PORT}`);

})

