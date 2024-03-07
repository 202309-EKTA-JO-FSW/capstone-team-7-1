const express = require("express");
const router = express.Router();
const checkBlackListedToken = require('../middlewares/blackListedTokens');


const adminController = require("../controllers/adminController");

//Add Admin Routes

router.post("/signin", adminController.signin);
router.post("/signup", adminController.signup);
router.post("/signout", checkBlackListedToken, adminController.signout);

//Add Restaurant Routes
router.post("/addRestaurant",checkBlackListedToken, adminController.addRestaurant);
router.put("/updateRestaurant/:id",checkBlackListedToken, adminController.ubdateRestaurant);
router.delete("/removeRestaurant",checkBlackListedToken, adminController.removeRestaurant);

//Add Dish Routes
router.post("/addDish", adminController.addDish);
router.put("/updateDish/:id",checkBlackListedToken, adminController.updateDish);
router.delete("/removeDish",checkBlackListedToken, adminController.removeDish);

//View Requests
router.get("/restaurants",checkBlackListedToken, adminController.getAllRestaurants);
router.get("/Dishes",checkBlackListedToken, adminController.getAllDishes)
// router.get("/customers", adminController.getAllCustomers);
// router.get("/orders", adminController.getAllOrders);
// router.get("/favoriteDishes", adminController.getFavoriteDishes);

module.exports = router;
