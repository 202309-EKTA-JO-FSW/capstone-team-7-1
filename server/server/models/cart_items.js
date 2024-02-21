const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
        enum: ['Current', 'Previous'],
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',       
    },
    
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);