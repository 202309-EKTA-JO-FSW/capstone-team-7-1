const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    restaurant: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
      }],
    image: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    }


}, { timestamps: true });

module.exports = mongoose.model('Dish', dishSchema);