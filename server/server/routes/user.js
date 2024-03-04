const express = require("express");
const router = express.Router();
const checkBlackListedToken = require('../middlewares/blackListedTokens');


const userController = require("../controllers/userController");


// Add user routes
// router.post("/user/signin", userController.signin);
// router.post("/user/signup", userController.signup);
// router.post("/user/signout",checkBlackListedToken, userController.signout);


// Add cart routes
// router.get('/users/:userId/cart', cartController.getUserCart);
// router.post('/users/:userId/cart', cartController.addItemToCart);
// router.put('/users/:userId/cart', cartController.updateCart);
// router.delete('/users/:userId/cart',cartController.emptyCart);

// Add restaurant route // user can just fetch multi resturants and specfic resturant 
// router.get('/restaurants', restaurantController.getAllRestaurants);
// router.get('/restaurants/:restaurantId', restaurantController.getRestaurant);

// Add profile route // just fetch and update the profile
router.get('/users/:userId',checkBlackListedToken, userController.getUserProfile);
router.put('/users/:userId', checkBlackListedToken, userController.updateUserProfile);

// Add dish routes
// router.get('/dishes', dishController.getAllDishes);
// router.get('/dishes/:dishId',dishController.getDish);

// Add order routes
// router.get('/users/:userId/orders', orderController.getUserOrders);
// router.post('/users/:userId/orders',  orderController.createOrder);
// router.get('/orders/:orderId',  orderController.getOrder);
// router.delete('/orders/:orderId',  orderController.deleteOrder);


// Add favorites routes
// router.get('/users/:userId/favorites/restaurants',favoriteController.getUserFavoriteRestaurants);
// router.post('/users/:userId/favorites/restaurants',favoriteController.addFavoriteRestaurant);
// router.delete('/users/:userId/favorites/restaurants/:restaurantId',  favoriteController.removeFavoriteRestaurant);
// router.get('/users/:userId/favorites/dishes',favoriteController.getUserFavoriteDishes);
// router.post('/users/:userId/favorites/dishes', favoriteController.addFavoriteDish);
// router.delete('/users/:userId/favorites/dishes/:dishId', favoriteController.removeFavoriteDish);

// Add review routes - need check
// router.get('/restaurants/:restaurantId/reviews',reviewController.getRestaurantReviews);
// router.post('/restaurants/:restaurantId/reviews',reviewController.addReviewForRestaurant);
// router.put('/reviews/:reviewId',  reviewController.updateReview);
// router.delete('/reviews/:reviewId', reviewController.deleteReview);

module.exports = router;
