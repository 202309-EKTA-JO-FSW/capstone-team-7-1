import React, { useState, useEffect } from "react";
import Cards from "@/components/Common/Cards";
import axios from "axios";
import Button from "@/components/Common/Button";
// import { headers } from "next/headers";

const PopulerRestaurantSection = () => {
  const [popularRestaurants, setPopularRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchALLRestaurant("", "", "");
  }, []);

  const fetchALLRestaurant = async (name, logo, rate) => {
    try {
      const response = await axios.get(`http://localhost:3001/restaurants/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setAllRestaurants(response.data);
      setPopularRestaurants(response.data.slice(0, 4));
    } catch (error) {
      console.error("Error fetching popular restaurants:", error);
    }
  };

  const handleFilter = (rate) => {
    if (rate >= 3) {
      const filterRestaurants = allRestaurants.filter((restaurant) => {
        return restaurant.rate >= rate;
      });
      setPopularRestaurants(filterRestaurants);
    }
  };

  return (
    <section className="bg-[#FCFCFC] w-full flex flex-col items-center gap-4 px-16">
      <div className="uppercase w-full flex flex-col items-center justify-center font-semibold">
        <p className="text-[#FF6868] text-lg">EXPLORE</p>
        <p className="text-4xl text-[#180800] text-center">
          Popular Restaurants
        </p>
      </div>
      <div className="popular-restaurants flex flex-row flex-wrap justify-center gap-4 mt-5">
        {popularRestaurants.map((restaurant, index) => (
          <Cards
            key={index}
            image={restaurant.logo}
            title={restaurant.name}
            rating={restaurant.rate}
          />
        ))}
      </div>
      <Button text="Browse Restaurants" />
    </section>
  );
};

export default PopulerRestaurantSection;
