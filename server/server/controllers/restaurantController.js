
const restaurantModel = require("../models/restaurant");


//getting all Restaurants 
const getAllRestaurants = async (req, res) => {
    try {
        const allRestaurants = await restaurantModel.find({})
        
        if (!allRestaurants)
            return res.status(404).json({message: "No restaurants were found"})

        return res.status(200).json(allRestaurants)
    }
    catch {
        // im not sure what status to add here ( 422 / 500 ) ?
        return res.status(422).json({ error: 'unable to fetch restaurants' });
    }
}

// const addNewRestaurants = async (req, res) => {
//     try{
//         const { name, address, openingHours, closingHours,logo, description, phone, cuisineType, rate } = req.body || {};

//         if (!name || !address || !openingHours || !description || !phone || !cuisineType) {
//             console.log(req.body);

//             return res.status(400).json({ message: `some data is missing ${ req.body }`})
//         }

//         const newRestaurant = new restaurantModel({
//             name,
//             address,
//             openingHours,
//             closingHours,
//             logo,
//             description,
//             phone,
//             cuisineType,
//             rate,
//         });

//         await newRestaurant.save();

//         return res.status(200).json({message: "restaurant added successfully"});
//     }
//     catch(err){
//         return res.status(400).json(err.message);
//     }
// };

// getting a specific restaurant
const getRestaurant = async (req, res) => {
    const { restaurantID } = req.params
    try {
        const getRestaurantWithID = await restaurantModel.findById(restaurantID)
        
        if (!getRestaurantWithID)
            return res.status(422).json("this Restaurant is not Found")    

        return res.status(200).json(getRestaurantWithID)
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getAllRestaurants,
    addNewRestaurants,
    getRestaurant
};


