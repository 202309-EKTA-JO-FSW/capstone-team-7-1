const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    item: [{ 
        itemID: { type: mongoose.Schema.Types.ObjectId, ref:'Cart', require: true },
        price: {type: string, required: true},
        quantity: { type: String, require: true, min: 1 },
        specialRequest: { type: string }
    }],
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
        enum: ['Pending', 'Accepted', 'Preparing', 'On its Way', 'Delivered'],
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
    }
  


}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);