import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import NavBar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export default function SingleRestaurant() {
  const router = useRouter();
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [error, setError] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [dishDetails, setDishDetails] = useState(null);
  const [openSectionIndex, setOpenSectionIndex] = useState(null);
  const [cart, setCart] = useState({});

  const addToCart = (dish) => {
    const newCart = { ...cart };
    newCart[dish.id] = (newCart[dish.id] || 0) + 1;
    setCart(newCart);
  };

  const getQuantity = (dishId) => {
    return cart[dishId] || 0;
  };

  const { RestaurantID } = router.query;

  const fetchRestaurantDetails = async () => {
    if (!RestaurantID) {
      setError("Restaurant ID not provided.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3001/restaurants/${RestaurantID}`
      );
      setRestaurantDetails(response.data);
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
      setError("Error fetching restaurant details.");
    }
  };

  const fetchDishDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/dishes`);
      setDishDetails(response.data);
    } catch (error) {
      console.error("Error fetching Dish details:", error);
      setError("Error fetching Dish details.");
    }
  };

  useEffect(() => {
    if (router.isReady) {
      fetchRestaurantDetails();
      fetchDishDetails();
    }
  }, [router.isReady]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSection = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!restaurantDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <div className=" mt-20 bg-white restaurant-details flex flex-col flex-wrap justify-center gap-4 items-center">
        {/* Restaurant name, logo details  */}
        <div
          id="Gradient-bg"
          className="flex w-full py-12 md:flex-col sm:flex-col lg:flex-row justify-center items-center flex-wrap gap-4"
        >
          {/* restaurants logo */}
          <figure className="rounded-xl md:w-2/4 flex justify-center lg:w-1/4">
            <img
              src={restaurantDetails.logo}
              alt={restaurantDetails.name}
              className=" h-80"
            />
          </figure>
          {/* restaurant details */}
          <div className="bg-gray-100/[0.5] p-10 rounded-xl w-3/4  flex flex-col justify-center lg:w-2/4">
            <div className="text-4xl flex justify-around font-bold uppercase mb-8 ">
              {restaurantDetails.name}
              <div className="flex flex-row">
                <svg
                  className="h-9 w-9 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2l2.371 7.018L22 9.24l-6.132 4.478L18.5 22 12 17.75 5.5 22l2.632-8.282L2 9.24l7.629-.222L12 2z"
                  />
                </svg>
                <div className="">{restaurantDetails.rate}</div>
              </div>
            </div>
            <div className="text-3xl mb-5 font-semibold text-start">
              <p className="inline font-normal  text-gray-700 text-2xl">
                {restaurantDetails.description}{" "}
              </p>
            </div>
            <div className="text-3xl mb-3 font-semibold text-start">
              Address:{" "}
              <p className="inline font-normal text-gray-700 text-2xl">
                {restaurantDetails.restaurantAddress}{" "}
              </p>
            </div>
            <div className="text-3xl mb-3 font-semibold text-start">
              Working hours :{" "}
              <p className="inline font-normal  text-gray-700 text-2xl">
                {restaurantDetails.openingHours}{" "}
              </p>
            </div>
            <div className="text-3xl mb-3 font-semibold text-start">
              Specialized In:{" "}
              <p className="inline font-normal  text-gray-700 text-2xl">
                {restaurantDetails.cuisineType.join(", ")}
              </p>
            </div>
            <div className="text-3xl mb-3 font-semibold text-start">
              Reach out to us through:{" "}
              <p className="inline font-normal  text-gray-700 text-2xl">
                {restaurantDetails.phone}{" "}
              </p>
            </div>{" "}
            <button
              onClick={toggleMenu}
              className="bg-[#F36839] hover:bg-[#f36839c3] text-white shadow-[#d04b0892] shadow-lg font-bold py-3 px-4 rounded-xl mx-3 my-10 "
            >
              {showMenu ? "Close Menu ▲" : "Show Menu ▼"}
            </button>
          </div>
        </div>
        {/* Menu Display */}
        {showMenu && (
          <div className=" lg:w-3/4 md:w-1/2 flex flex-col lg:flex-row  gap-5">
            {/* Side Category */}
            <div className=" w-1/4 rounded-2xl shadow-xl shadow-gray-7 border-gray-500  flex flex-col  font-semibold flex-wrap justify-start items-start p-3 ">
              <h1 className=" w-full mb-5 text-shadow-lg shadow-[#ea5137]/[0.3] lg:text-5xl md:text-3xl sm:text-xl  font-semibold">
                Categories
              </h1>

              {Array.from(
                new Set(
                  dishDetails
                    .filter(
                      (dish) => dish.restaurant.toString() === RestaurantID
                    )
                    .flatMap((dish) => dish.category)
                )
              ).map((category, index) => (
                <a
                  className=" rounded-xl lg:h-[7vh] md:h-[5vh] flex flex-col justify-center items-start lg:text-3xl md:text-xl sm:text-md lg:pl-5 md:pl-3 sm:pl-2 text-gray-700 font-semibold w-full hover:bg-gray-300 hover:text-black mt-3"
                  key={index}
                  onClick={() => toggleSection(index)}
                >
                  {category}
                </a>
              ))}
            </div>
            {/* Show Menu */}
            {/* Dishes Display */}
            <div className="w-3/4 rounded-2xl shadow-xl p-3">
              {Array.from(
                new Set(
                  dishDetails
                    .filter(
                      (dish) => dish.restaurant.toString() === RestaurantID
                    )
                    .flatMap((dish) => dish.category)
                )
              ).map((category, index) => (
                <div
                  key={index}
                  className={`${
                    openSectionIndex === index ? "block" : "hidden"
                  }`}
                >
                  <div className="grid grid-cols-1 gap-6">
                    {dishDetails
                      .filter(
                        (dish) =>
                          dish.restaurant.toString() === RestaurantID &&
                          dish.category.includes(category)
                      )
                      .map((dish, dishIndex) => (
                        <div
                          key={dishIndex}
                          className="bg-white rounded-lg p-4 shadow-md flex"
                        >
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-1/6 h-32 object-cover rounded-md mr-4"
                          />
                          <div className="flex flex-col justify-center">
                            <h3 className="text-xl font-semibold">
                              {dish.name}
                            </h3>
                            <p className="text-gray-600 mt-2">
                              {dish.description}
                            </p>
                            <p className="text-gray-800 font-bold mt-2">
                              {dish.price} JDs
                            </p>
                            <div className="mt-4">
                              <button
                                className="bg-[#F36839] hover:bg-[#f36839c3] text-white shadow-[#d04b0892] shadow-lg font-bold py-2 px-3  rounded-xl"
                                onClick={() => addToCart(dish)}
                              >
                                Add to Cart
                              </button>
                              <span className="ml-4">
                                Quantity: {getQuantity(dish.id)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
