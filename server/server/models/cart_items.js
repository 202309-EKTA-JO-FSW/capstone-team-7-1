const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dishID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish',
        required: true
    }],
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);