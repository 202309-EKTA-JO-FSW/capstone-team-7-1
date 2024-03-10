const mongoose = require('mongoose');

const favRestaurantSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },

    // fav order from a specific Restaurant is an optional choice
    // Optional 
    order: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }],


}, { timestamps: true });

module.exports = mongoose.model('FavRestaurant', favRestaurantSchema);