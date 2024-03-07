const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

//Add Admin Routes

router.post("/signin", adminController.signin);
router.post("/signup", adminController.signup);
router.post("/signout", adminController.signout);

//Add Restaurant Routes
router.post("/addRestaurant", adminController.addRestaurant);
router.put("/ubdateRestaurant/:id", adminController.ubdateRestaurant);
router.delete("/removeRestaurant", adminController.removeRestaurant);

//Add Dish Routes
router.post("/addDish", adminController.addDish);
router.put("/updateDish/:id", adminController.updateDish);
router.delete("/removeDish", adminController.removeDish);

//View Requests
router.get("/restaurants", adminController.getAllRestaurants);
router.get("/Dishes", adminController.getAllDishes)
router.get("/customers", adminController.getAllCustomers);
router.get("/orders", adminController.getAllOrders);
router.get("/favoriteDishes", adminController.getFavoriteDishes);

module.exports = router;
