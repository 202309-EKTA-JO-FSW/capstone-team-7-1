const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
      },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    dateOfReview: {
        type: Date,
        required: true,
        default: Date.now,
    },

}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);