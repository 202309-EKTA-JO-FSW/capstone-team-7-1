const reviewModel = require('../models/review');

const reviewController = {};

reviewController.getAllReviews = async (req, res) => {
    try{
        const reviews = await reviewModel.find({});
        res.status(200).json(reviews);
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

reviewController.getRestaurantReviews = async (req, res) => {
    try {
        const restaurantId = req.params.restaurantId;
        const reviews = await reviewModel.find({ item: restaurantId });
        res.status(200).json(reviews);
    } 
    catch (err) {
        res.status(500).json(err.message);
    }
};

reviewController.addReviewForRestaurant = async (req, res) => {
    try {
        
        const { user, restaurant, comment, rating } = req.body;

        if(!restaurant || !user || !comment || !rating){
            return res.status(400).json({message: "some data is missing"});
        }

        await reviewModel.create({
            user,
            restaurant,
            comment,
            rating 
        });
        res.status(200).json({message: "review added successfully"});
    } 
    catch (err) {
        res.status(500).json(err.message);
    }
};

reviewController.updateReview = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;
        const { comment, rating } = req.body;

        if(!reviewId){
            return res.status(400).json({message: "id not added"})
        }

        const updatedReview = await reviewModel.findById(reviewId);

        if(!updatedReview){
            return res.status(400).json({message: "review not found"})
        }

        if(comment) updatedReview.comment = comment;
        if(rating) updatedReview.rating = rating;

        await updatedReview.save();

        res.status(200).json({message: "review updated", updatedReview});
    } 
    catch (err) {
        res.status(500).json(err.message);
    }
};

reviewController.deleteReview = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;
        await reviewModel.findByIdAndDelete(reviewId);
        res.status(200).json({message: "review removed successfully"});
    } 
    catch (err) {
        res.status(500).json(err.message);
    }
};

module.exports = reviewController;