const mongoose = require('mongoose');

const favDishesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dishes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }],

}, { timestamps: true });

module.exports = mongoose.model('favDishes', favDishesSchema);