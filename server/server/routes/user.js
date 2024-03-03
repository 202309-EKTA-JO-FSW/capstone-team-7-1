const express = require("express");
const router = express.Router();
// const checkBlackListedToken = require('../middlewares/blackListedTokens');

const authToken=require('../middlewares/isAuthenticated')

const userController = require("../controllers/userController");
const restaurantController = require('../controllers/restaurantController');
const dishController = require('../controllers/dishController');
const orderController = require('../controllers/orderController');
const cartController = require('../controllers/cartController');

const favoriteController = require('../controllers/favoriteController');
const reviewController = require('../controllers/reviewController');



// // Public API Endpoints..........
// router.post("/signin", userController.signIn);
// router.post("/signup", userController.signUp);


// here i put the restaurant crud, user can just fetch multi resturants and specfic resturant 
router.get('/restaurants', restaurantController.getAllRestaurants);

router.get('/restaurants/:restaurantID', restaurantController.getRestaurant);

//test purposes
//router.post('/addRestaurant', restaurantController.addNewRestaurants);

// Add cart routes
router.get('/users/:userId/cart', cartController.getUserCart);
router.post('/users/:userId/cart', cartController.addItemToCart);

router.put('/users/:userId/cart', cartController.updateCart);
router.delete('/users/:userId/cart',cartController.emptyCart);

// Add profile route // just fetch and update the profile
// router.get('/users/:userId', checkBlackListedToken, userController.getUserProfile);
// router.put('/users/:userId', checkBlackListedToken, userController.updateUserProfile);

// Add dish routes
// router.get('/dishes', dishController.getAllDishes);
// router.get('/dishes/:dishId',dishController.getDish);

// Add order routes
// router.get('/users/:userId/orders', checkBlackListedToken, orderController.getUserOrders);
// router.post('/users/:userId/orders', checkBlackListedToken, orderController.createOrder);
// router.get('/orders/:orderId', checkBlackListedToken, orderController.getOrder);
// router.delete('/orders/:orderId', checkBlackListedToken, orderController.deleteOrder);


// Add favorites routes
// router.get('/users/:userId/favorites/restaurants', checkBlackListedToken, favoriteController.getUserFavoriteRestaurants);
// router.post('/users/:userId/favorites/restaurants', checkBlackListedToken, favoriteController.addFavoriteRestaurant);
// router.delete('/users/:userId/favorites/restaurants/:restaurantId', checkBlackListedToken, favoriteController.removeFavoriteRestaurant);
// router.get('/users/:userId/favorites/dishes', checkBlackListedToken, favoriteController.getUserFavoriteDishes);
// router.post('/users/:userId/favorites/dishes', checkBlackListedToken, favoriteController.addFavoriteDish);
// router.delete('/users/:userId/favorites/dishes/:dishId', checkBlackListedToken, favoriteController.removeFavoriteDish);

// Add review routes - need check
// router.get('/restaurants/:restaurantId/reviews', reviewController.getRestaurantReviews);
// router.post('/restaurants/:restaurantId/reviews', checkBlackListedToken, reviewController.addReviewForRestaurant);
// router.put('/reviews/:reviewId', checkBlackListedToken, reviewController.updateReview);
// router.delete('/reviews/:reviewId', checkBlackListedToken, reviewController.deleteReview);

module.exports = router;
