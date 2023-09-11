const asyngHandler=require('express-async-handler');
const User=require('../models/userModel');
const generateToken = require('../config/generateToken');

const registerUser=asyngHandler(async(req,res)=>{
    const {name,email,password,pic}=req.body;

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please Enter all the Fields')
    };

    const userExists=await User.findOne({email});
    if(userExists){
        res.status(400)
        throw new Error('User Already Exists')
    };

    const user=await User.create({
        name,
        email,
        password,
        pic
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Failed to create the user')
    }

});

module.exports={registerUser}