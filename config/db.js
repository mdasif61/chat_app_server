const mongoose=require('mongoose');
const colors=require('colors')

const connectDB=async()=>{
    try {
        const connection=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`Database connected: ${connection.connection.host}`.yellow.underline.bold)
    } catch (error) {
        console.log(error);
        process.exit()
    }
};

module.exports=connectDB;