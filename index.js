const express=require('express');
const app=express();
require('dotenv').config()
const port=process.env.PORT || 5000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('chat app running')
});

app.listen(port,()=>{
    console.log(`Chat App is running port :`, port)
})