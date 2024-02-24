const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    Address: {
        street: {type: String,require: true},
        city: {type: String,require: true}
    },
    openingHours: {
        type: String,
        require: true
    },
    closingHours: {
        type: String,
        require: true
    },
    logo: {
        type: String,
    },
    description: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    cuisineType: {
        type: [string],
        require: true
    },
    rate: {
        type: Number,
        min: 0,
        max: 5,
    },


}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);