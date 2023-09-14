const express=require('express');
const cors=require('cors')
const port=process.env.PORT || 5000;
require('dotenv').config();
const connectDB = require('./config/db');
const userRouters=require('./routes/userRouter');
const { notFount, errorHandler } = require('./middleware/errorMiddleware');

connectDB()
const app=express();
app.use(cors())
app.use(express.json());

app.use('/api/user',userRouters)

app.use(notFount);
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`Chat App is running port :${port}`.bgRed)
})