const mongoose=require('mongoose');

const userModels=mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        pic:{
            type:String,required:true,
            default:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
        }
    },
    {timestamps:true}
);

const User=mongoose.model('User',userModels);
module.exports=User