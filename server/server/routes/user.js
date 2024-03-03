const express = require("express");
const router = express.Router();
//const checkBlackListedToken = require('../middlewares/blackListedTokens');

//const authToken=require('../middlewares/isAuthenticated')

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
// router.post("/signout",checkBlackListedToken, userController.signout);


// here i put the restaurant crud, user can just fetch multi resturants and specfic resturant  //
router.get('/restaurants', restaurantController.getAllRestaurants);

router.get('/restaurants/:restaurantID', restaurantController.getRestaurant);

//test purposes
//router.post('/addRestaurant', restaurantController.addNewRestaurants);

// Add cart routes //
router.get('/users/:userId/cart', cartController.getUserCart);
router.post('/users/:userId/cart', cartController.addItemToCart);

router.put('/users/:userId/cart', cartController.updateCart);
router.delete('/users/:userId/cart',cartController.emptyCart);

// Add profile route // just fetch and update the profile //
// router.get('/users/:userId', checkBlackListedToken, userController.getUserProfile);
// router.put('/users/:userId', checkBlackListedToken, userController.updateUserProfile);

// dish crud
router.get('/dishes', dishController.getAllDishes);
router.get('/dishes/:dishID', dishController.getDish);

// test purposes 

//router.post('/addDish', dishController.addNewDish);

// order crud //
router.get('/users/:userID/orders',  orderController.getUserOrders);
router.post('/users/:userID/orders', orderController.createOrder);

router.get('/orders/:orderID',  orderController.getOrder);
router.delete('/orders/:orderID', orderController.deleteOrder);

// // favorites crud  //

// router.get('/users/:userId/favorites/restaurants', authToken, favoriteController.getUserFavoriteRestaurants);
// router.post('/users/:userId/favorites/restaurants', authToken, favoriteController.addFavoriteRestaurant);
// router.delete('/users/:userId/favorites/restaurants/:restaurantId', authToken, favoriteController.removeFavoriteRestaurant);
// router.get('/users/:userId/favorites/dishes', authToken, favoriteController.getUserFavoriteDishes);
// router.post('/users/:userId/favorites/dishes', authToken, favoriteController.addFavoriteDish);
// router.delete('/users/:userId/favorites/dishes/:dishId', authToken, favoriteController.removeFavoriteDish);

// // review for user - need check //

// router.get('/restaurants/:restaurantId/reviews', reviewController.getRestaurantReviews);
// router.post('/restaurants/:restaurantId/reviews', authToken, reviewController.addReviewForRestaurant);
// router.put('/reviews/:reviewId', authToken, reviewController.updateReview);
// router.delete('/reviews/:reviewId', authToken, reviewController.deleteReview);


module.exports = router;