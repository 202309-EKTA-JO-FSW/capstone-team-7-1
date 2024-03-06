const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    restaurantAddress: {
        street: {type: String,require: true},
        //city: {type: String,require: true}
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
        require: true
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


}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);