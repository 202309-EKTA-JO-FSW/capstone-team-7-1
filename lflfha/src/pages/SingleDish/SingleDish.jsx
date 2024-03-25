import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleDish = ({ dishID }) => {
  const [dishDetails, setDishDetails] = useState(null);

  const fetchDishDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/dishes`);
      setDishDetails(response.data);
    } catch (error) {
      console.error("Error fetching Dish details:", error);
    }
  };

  useEffect(() => {
    fetchDishDetails();
  }, []);

  const dish = dishDetails
    ? dishDetails.find((dish) => dish._id === dishID)
    : null;

  return (
    <div>
      {dish && (
        <div
          className="flex flex-col flex-wrap justify-center items-center"
          key={dish._id}
        >
          <img
            src={dish.image}
            alt={dish.name}
            className="object-cover w-80 pb-8"
          />

          <div className="font-semibold flex flex-col">
            <h1 className="text-5xl font-bold text-center pb-5">{dish.name}</h1>
            <div className="text-gray-500 text-2xl pb-3">
              {dish.description}
            </div>
            <div className="text-gray-500 text-2xl pb-3">
              <p className="text-black inline">Category:</p>{" "}
              {dish.category.join(", ")}
            </div>
            <div className="text-gray-500 text-2xl pb-3">
              <p className="text-black inline">Ingredients:</p>{" "}
              {dish.ingrediants.join(", ")}
            </div>
            <div className="text-gray-500 text-2xl pb-3">
              <p className="text-black inline">Price:</p> {dish.price} JDs
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleDish;
