const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userModels = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        pic: {
            type: String,
            default: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
        }
    },
    { timestamps: true }
);

userModels.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

userModels.pre('save', async function (next) {
    if (!this.isModified) {
        next()
    };
    const salt =await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userModels);
module.exports = User