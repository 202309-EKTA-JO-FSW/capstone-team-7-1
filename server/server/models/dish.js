const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
      },
    image: {
        type: String,
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: [String],
        require: true
    },
    ingredients: {
        type: [String],
        require: true
    }


}, { timestamps: true });

module.exports = mongoose.model('Dish', dishSchema);