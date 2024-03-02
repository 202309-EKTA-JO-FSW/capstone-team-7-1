const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Address: {
        street: {type: String,require: true},
        city: {type: String,require: true}
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
        type: [string],
        required: true
    },
    rate: {
        type: Number,
        min: 0,
        max: 5,
    },


}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);