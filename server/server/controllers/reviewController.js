const reviewModel = require('../models/review');

const reviewController = {};


//*********************************************************************done 
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

//*********************************************************************done 
reviewController.addReviewForRestaurant = async (req, res) => {
    try {
        const restaurantId = req.params.restaurantId;
        const { user, comment, rating } = req.body;

        if(!restaurantId || !user || !comment || !rating){
            return res.status(400).json({message: "some data is missing"});
        }

        await reviewModel.create({
            user,
            item: restaurantId,
            comment,
            rating 
        });
        res.status(200).json({message: "review added successfully"});
    } 
    catch (err) {
        res.status(500).json(err.message);
    }
};
//*********************************************************************done 

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
//*********************************************************************done 

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