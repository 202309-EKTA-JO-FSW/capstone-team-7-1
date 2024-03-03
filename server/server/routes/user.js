const express = require("express");
const router = express.Router();
const checkBlackListedToken = require('../middlewares/blackListedTokens');


const userController = require("../controllers/userController");


// Add user routes
router.post("/user/signin", userController.signin);
router.post("/user/signup", userController.signup);
router.post("/user/signout",checkBlackListedToken, userController.signout);


// Add cart routes
// router.get('/users/:userId/cart', cartController.getUserCart);
// router.post('/users/:userId/cart', cartController.addItemToCart);
// router.put('/users/:userId/cart', cartController.updateCart);
// router.delete('/users/:userId/cart',cartController.emptyCart);

// Add restaurant route // user can just fetch multi resturants and specfic resturant 
// router.get('/restaurants', restaurantController.getAllRestaurants);
// router.get('/restaurants/:restaurantId', restaurantController.getRestaurant);

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
