import React, { useState, useEffect } from "react";
import axios from "axios";

import Cards from "@/components/Common/Cards";
import Button from "@/components/Common/Button";
import Link from "next/link";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

function AllRestaurants() {
  const [search, setSearch] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchALLRestaurant();
  }, []);

  const fetchALLRestaurant = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/restaurants`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const sortedRestaurants = response.data.sort((a, b) => b.rate - a.rate);
      setAllRestaurants(sortedRestaurants);
    } catch (error) {
      console.error("Error fetching popular restaurants:", error);
    }
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <div>
      <Navbar />
      <div className="restaurant flex flex-col flex-wrap bg-[#FCFCFC]">
        {/* Header Page */}
        <div className="restaurant-header lg:min-h-[90vh] sm:min-h-[60vh] md:min-h-[70vh] min-h-[50vh] w-full flex flex-col justify-center items-center">
          <div className=" text-shadow-lg shadow-white lg:text-8xl md:text-7xl sm:text-5xl text-4xl flex justify-center flex-col items-center text-[#180800] opacity-100 font-bold  ">
            Where Food Gets <div>Delievered </div>
            <div className="text-[#ea5137] text-shadow-lg shadow-black ">
              {" "}
              Easily !
            </div>
          </div>
        </div>

        <div className="lg:mx-32 md:mx-16 sm:mx-12 mx-6 mt-16">
          {/* Search */}
          <div className="flex flex-row  justify-between items-center gap-4 sm:gap-2 font-semibold ">
            <div className="lg:text-4xl md:text-3xl sm:text-2xl text-lg">
              Find Your Favourite Restaurants
            </div>
            <form>
              <div className="flex items-center">
                <input
                  type="search"
                  className="lg:w-64 h-14 md:w-52 sm:w-44 w-32 rounded-2xl p-5 border-gray-500 border-2  border-solid"
                  placeholder="Find Your Restaurant"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                ></input>
                {search && (
                  <button
                    type="button"
                    className="bg-[#F36839] hover:bg-[#f36839c3] text-[#FCFCFC] shadow-[#d04b0892] shadow-lg font-bold py-3 px-4 rounded-xl mx-3 my-10 "
                    onClick={handleClearSearch}
                  >
                    Clear
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className=" hover:border-solid hover:border-gray-700 hover:border-5  flex flex-row flex-wrap justify-center  gap-4 mt-5">
            {allRestaurants
              .filter((rest) => {
                return search.toLowerCase() === ""
                  ? rest
                  : rest.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((restaurant, index) => (
                <Link
                  href={`/SingleRestaurant/${restaurant._id}`} // Using dynamic routing for restaurant details
                  key={restaurant._id}
                >
                  <Cards
                    image={restaurant.logo}
                    title={restaurant.name}
                    rating={restaurant.rate}
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllRestaurants;
