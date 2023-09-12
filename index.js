const express=require('express');
const app=express();
require('dotenv').config();
const connectDB = require('./config/db');
const userRouters=require('./routes/userRouter');
const { notFount, errorHandler } = require('./middleware/errorMiddleware');

connectDB()
app.use(express.json());

app.use('/api/user',userRouters)

app.use(notFount);
app.use(errorHandler);

app.get('/',(req,res)=>{
    res.send('chat app running')
});

const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Chat App is running port :${port}`.bgRed)
})