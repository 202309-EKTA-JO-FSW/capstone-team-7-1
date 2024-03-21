const express = require("express");
const router = express.Router();

//const authToken=require('../middlewares/isAuthenticated')

const userController = require("../controllers/userController");
const restaurantController = require('../controllers/restaurantController');
const dishController = require('../controllers/dishController');
const orderController = require('../controllers/orderController');
const cartController = require('../controllers/cartController');
const checkBlackListedToken = require('../middlewares/blackListedTokens');


//const userController = require("../controllers/userController");
const favoriteController = require('../controllers/favoriteController');
const reviewController = require('../controllers/reviewController');


// Add user routes
router.post("/user/signin", userController.signin);
router.post("/user/signup", userController.signup);
router.post("/user/signout",checkBlackListedToken, userController.signout);

// here i put the restaurant crud, user can just fetch multi resturants and specfic resturant  //
router.get('/restaurants', restaurantController.getAllRestaurants);
router.get('/restaurants/:restaurantID', restaurantController.getRestaurant);

// Add cart routes //
router.get('/users/:userId/cart', cartController.getUserCart);
router.post('/users/:userId/cart', cartController.addItemToCart);

router.put('/users/:userId/cart', cartController.updateCart);
router.delete('/users/:userId/cart',cartController.emptyCart);

// Add profile route // just fetch and update the profile
router.get('/users/:userId',checkBlackListedToken, userController.getUserProfile);
router.put('/users/:userId', checkBlackListedToken, userController.updateUserProfile);

// dish crud
router.get('/dishes', dishController.getAllDishes);
router.get('/dishes/:dishID', dishController.getDish);

// order crud //
router.get('/users/:userID/orders',  orderController.getUserOrders);
router.post('/users/:userID/orders', orderController.createOrder);

router.get('/orders/:orderID',  orderController.getOrder);
router.delete('/orders/:orderID', orderController.deleteOrder);

// favorites crud 
router.get('/users/:userId/favorites/restaurants', favoriteController.getUserFavoriteRestaurants);
router.post('/users/:userId/favorites/restaurants', favoriteController.addFavoriteRestaurant);
router.delete('/users/:userId/favorites/restaurants/:restaurantId', favoriteController.removeFavoriteRestaurant);
router.get('/users/:userId/favorites/dishes', favoriteController.getUserFavoriteDishes);
router.post('/users/:userId/favorites/dishes', favoriteController.addFavoriteDish);
router.delete('/users/:userId/favorites/dishes/:dishId', favoriteController.removeFavoriteDish);

// review for user - need check
router.get('/reviews', reviewController.getAllReviews);
router.get('/restaurants/:restaurantId/reviews', reviewController.getRestaurantReviews);
router.post('/restaurants/addReview', reviewController.addReviewForRestaurant);
router.put('/reviews/:reviewId', reviewController.updateReview);
router.delete('/reviews/:reviewId', reviewController.deleteReview);


module.exports = router;