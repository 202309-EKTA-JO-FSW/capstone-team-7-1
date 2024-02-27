const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true, 
        unique: true
    },
    hashedPassword: {
        type: String,
        require: true
    },
    

}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);