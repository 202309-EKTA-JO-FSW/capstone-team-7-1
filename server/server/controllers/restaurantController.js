
const restaurantModel = require("../models/restaurant");


//getting all Restaurants 
const getAllRestaurants = async (req, res) => {
    try {
        const allRestaurants = await restaurantModel.find({})
        res.status(200).json(allRestaurants)
    }
    catch {
        // im not sure what status to add here ( 422 / 500 ) ?
        res.status(422).json({ error: 'unable to fetch restaurants' });
    }
}


// getting a specific restaurant
const getRestaurant = async (req, res) => {
    const {restaurantID} = req.params
    try {
        const getRestaurantWithID = await restaurantModel.findById(restaurantID)
        
        if (!getRestaurantWithID)
        res.status(422).json("No Restaurant Found")    

        res.status(200).json(getRestaurantWithID)
    }
    catch {
        res.json({ error: 'unable to fetch restaurant' });
    }
}

module.exports = {
    getAllRestaurants,
    getRestaurant
};


