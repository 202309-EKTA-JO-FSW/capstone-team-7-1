const mongoose = require('mongoose');

const blackListedTokensSchema = new mongoose.Schema({
    token: { 
        type: String,
        unique: true 
    },
    expiry: { 
        type: Date,
        default: Date.now(), 
        expires: 3600, 
    },
});

module.exports = mongoose.model('blackListedTokens', blackListedTokensSchema);