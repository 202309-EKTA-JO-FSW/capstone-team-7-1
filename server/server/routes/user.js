const express = require("express");
const router = express.Router();
const checkBlackListedToken = require('../middlewares/blackListedTokens');


const userController = require("../controllers/userController");


// Add user routes
router.post("/signin", userController.signin);
router.post("/signup", userController.signup);
router.post("/signout",checkBlackListedToken, userController.signout);


// Add cart routes
router.get('/cart', userController.getUserCart);
router.post('/users/:userId/cart', userController.addItemToCart);
router.put('/users/:userId/cart', userController.updateCart);
router.delete('/users/:userId/cart',userController.emptyCart);

// Add restaurant route // user can just fetch multi resturants and specfic resturant 
router.get('/restaurants', userController.getAllRestaurants);
router.get('/restaurants/:restaurantId', userController.getRestaurant);

// Add profile route // just fetch and update the profile
router.get('/users/:userId', checkBlackListedToken, userController.getUserProfile);
router.put('/users/:userId', checkBlackListedToken, userController.updateUserProfile);

// Add dish routes
router.get('/dishes', userController.getAllDishes);
router.get('/dishes/:dishId',userController.getDish);

// Add order routes
router.get('/users/:userId/orders', checkBlackListedToken, userController.getUserOrders);
router.post('/users/:userId/orders', checkBlackListedToken, userController.createOrder);
router.get('/orders/:orderId', checkBlackListedToken, userController.getOrder);
router.delete('/orders/:orderId', checkBlackListedToken, userController.deleteOrder);


// Add favorites routes
router.get('/users/:userId/favorites/restaurants', checkBlackListedToken, userController.getUserFavoriteRestaurants);
router.post('/users/:userId/favorites/restaurants', checkBlackListedToken, userController.addFavoriteRestaurant);
router.delete('/users/:userId/favorites/restaurants/:restaurantId', checkBlackListedToken, userController.removeFavoriteRestaurant);
router.get('/users/:userId/favorites/dishes', checkBlackListedToken, userController.getUserFavoriteDishes);
router.post('/users/:userId/favorites/dishes', checkBlackListedToken, userController.addFavoriteDish);
router.delete('/users/:userId/favorites/dishes/:dishId', checkBlackListedToken, userController.removeFavoriteDish);

// Add review routes - need check
router.get('/restaurants/:restaurantId/reviews', userController.getRestaurantReviews);
router.post('/restaurants/:restaurantId/reviews', checkBlackListedToken, userController.addReviewForRestaurant);
router.put('/reviews/:reviewId', checkBlackListedToken, userController.updateReview);
router.delete('/reviews/:reviewId', checkBlackListedToken, userController.deleteReview);

module.exports = router;
