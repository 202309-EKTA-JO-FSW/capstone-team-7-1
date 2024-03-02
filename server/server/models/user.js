const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['Male','Female'],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }


}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);