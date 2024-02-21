const express = require("express");
const router = express.Router();

const authToken=require('../middlewares/isAuthenticated')

// const userController = require("../controllers/userController");
// const restaurantController = require('../controllers/restaurantController');
// const dishController = require('../controllers/dishController');
// const orderController = require('../controllers/orderController');
const cartController = require('../controllers/cartController');
// const favoriteController = require('./controllers/favoriteController');
// const reviewController = require('./controllers/reviewController');



// router.post("/signin", userController.signIn);
// router.post("/signup", userController.signUp);



router.get('/cart/:userId', authToken, cartController.getUserCart);
// router.post('/cart', authToken, cartController.addItemToCart);
// router.put('/cart', authToken, cartController.updateCart);
// router.delete('/cart', authToken, cartController.emptyCart);


// router.get('/restaurants', restaurantController.getAllRestaurants);
// router.get('/restaurants/:restaurantId', restaurantController.getRestaurant);

// profile crud , just fetch and update the profile
// router.get('/users/:userId', authToken, userController.getUserProfile);
// router.put('/users/:userId', authToken, userController.updateUserProfile);


// router.get('/dishes', dishController.getAllDishes);
// router.get('/dishes/:dishId',dishController.getDish);

// router.get('/users/:userId/orders', authToken, orderController.getUserOrders);
// router.post('/users/:userId/orders', authToken, orderController.createOrder);
// router.get('/orders/:orderId', authToken, orderController.getOrder);
// router.delete('/orders/:orderId', authToken, orderController.deleteOrder);


// router.get('/users/:userId/favorites/restaurants', authToken, favoriteController.getUserFavoriteRestaurants);
// router.post('/users/:userId/favorites/restaurants', authToken, favoriteController.addFavoriteRestaurant);
// router.delete('/users/:userId/favorites/restaurants/:restaurantId', authToken, favoriteController.removeFavoriteRestaurant);
// router.get('/users/:userId/favorites/dishes', authToken, favoriteController.getUserFavoriteDishes);
// router.post('/users/:userId/favorites/dishes', authToken, favoriteController.addFavoriteDish);
// router.delete('/users/:userId/favorites/dishes/:dishId', authToken, favoriteController.removeFavoriteDish);


// router.get('/restaurants/:restaurantId/reviews', reviewController.getRestaurantReviews);
// router.post('/restaurants/:restaurantId/reviews', authToken, reviewController.addReviewForRestaurant);
// router.put('/reviews/:reviewId', authToken, reviewController.updateReview);
// router.delete('/reviews/:reviewId', authToken, reviewController.deleteReview);


module.exports = router;
