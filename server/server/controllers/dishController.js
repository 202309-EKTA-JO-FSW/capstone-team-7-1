
const dishModel = require("../models/dish");


//getting all Dishes ( get ) 
const getAllDishes = async (req, res) => {
    try {
        const menu = await dishModel.find({})
        
   // if no dishes where found then the is no menu 
        if (!menu)
            res.status(422).json("No menu")
             
            res.status(200).json(menu)

    }
    catch {
        res.status(422).json({error: "unable to fetch menu"})
    }
}

// const addNewDish = async (req,res) => {
//     try{
//         const { name, restaurant,image, description, price,category, ingredients} = req.body;

//         if (!name || !restaurant || !description || !price || !category || !ingredients) {

//             return res.status(400).json({ message: `some data is missing ${ req.body }`})
//         }

//         const newDish = new dishModel({
//             name,
//             restaurant,
//             image,
//             description,
//             price,
//             category,
//             ingredients,
//         });

//         await newDish.save();

//         return res.status(200).json({message: "Dish added successfully"});
//     }
//     catch(err){
//         return res.status(400).json(err.message);
//     }
// }

// getting a specific Dish ( get )
const getDish = async (req, res) => {
    const  {dishID}  = req.params;
    try {
        const getDishWithID = await dishModel.findById(dishID);
        
        if (!getDishWithID)
            return res.status(422).json(`This dish is not found: ${dishID}`);

        return res.status(200).json(getDishWithID);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}



module.exports = {
    getAllDishes,
    addNewDish,
    getDish
};
