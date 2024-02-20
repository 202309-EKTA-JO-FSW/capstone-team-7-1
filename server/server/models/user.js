const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true, 
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    profilePicture: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['Male','Female'],
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    }


}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);