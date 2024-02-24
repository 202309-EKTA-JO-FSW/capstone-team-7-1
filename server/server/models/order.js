const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    item: { 
        itemID: { type: mongoose.Schema.Types.ObjectId, ref:'Cart', require: true },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    deliveryAddress: {
        street: {type: String,require: true},
        city: {type: String,require: true}
    },
    orderDate: {
        type: Date(),
        require: true
    },
    Status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Preparing', 'On its Way', 'Delivered', 'Canceled'],
        default: 'Pending',
        required: true
    },
    numberOfItems: {
        type: Number,
        require: true
    },
    totalPrice: {
        type: Number,
        require: true
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