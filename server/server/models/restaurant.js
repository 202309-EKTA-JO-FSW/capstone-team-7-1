const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Address: {
        street: {type: String,required: true},
        city: {type: String,required: true}
    },
    openingHours: {
        type: String,
        required: true
    },
    closingHours: {
        type: String,
        required: true
    },
    logo: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    cuisineType: {
        type: [String],
        required: true
    },
    rate: {
        type: Number,
        min: 0,
        max: 5,
    },
},{ timestamps: true });


module.exports = mongoose.model('Restaurant', restaurantSchema);