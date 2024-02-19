const express = require("express");
const router = express.Router();

const authToken=require('../middlewares/isAuthenticated')

const userController = require("../controllers/userController");
const restaurantController = require('../controllers/restaurantController');
const dishController = require('../controllers/dishController');
// const OrderController = require('./controllers/OrderController');
const cartController = require('../controllers/cartController');
// const FavoriteController = require('./controllers/FavoriteController');
// const ReviewController = require('./controllers/ReviewController');

// Public API Endpoints..........
router.post("/signin", userController.signIn);
router.post("/signup", userController.signUp);

// private API Endpoints..........
// here i put the cart crud 
router.get('/users/:userId/cart', authToken, cartController.getUserCart);
router.post('/users/:userId/cart', authToken, cartController.addItemToCart);
router.put('/users/:userId/cart', authToken, cartController.updateCart);
router.delete('/users/:userId/cart', authToken, cartController.emptyCart);

// here i put the restaurant crud, user can just fetch multi resturants and specfic resturant 
router.get('/restaurants', restaurantController.getAllRestaurants);
router.get('/restaurants/:restaurantId', restaurantController.getRestaurant);

// profile crud , just fetch and update the profile
router.get('/users/:userId', authToken, userController.getUserProfile);
router.put('/users/:userId', authToken, userController.updateUserProfile);

// dish crud
router.get('/dishes', dishController.getAllDishes);
router.get('/dishes/:dishId',dishController.getDish);


module.exports = router;
