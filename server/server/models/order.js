const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    item: { 
        itemID: { type: mongoose.Schema.Types.ObjectId, ref:'Cart', required: true },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    deliveryAddress: {
        street: {type: String,required: true},
        city: {type: String,required: true}
    },
    orderDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    Status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Preparing', 'On its Way', 'Delivered', 'Canceled'],
        default: 'Pending',
        required: true
    },
    numberOfItems: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    isDelivered: {
        type: Boolean,
        default: false,
        required: true
    },
    specialRequest: {
        type: String
    },
  


}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);