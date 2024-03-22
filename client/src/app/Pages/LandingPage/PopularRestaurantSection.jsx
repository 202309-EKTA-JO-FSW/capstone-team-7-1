import React, { useState } from "react";
import Cards from "@/app/components/Common/Cards";

const PopulerRestaurantSection = () => {
  // Define state variables
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3; // Number of cards per page

  // Sample data for cards
  const restaurantData = [
    {
      image:
        "https://i.etsystatic.com/11979725/r/il/425b9a/1431687786/il_fullxfull.1431687786_w5a8.jpg",
      title: "Restaurant A",
      rating: "4",
    },
    {
      image:
        "https://png.pngtree.com/png-clipart/20200727/original/pngtree-red-chilli-food-logo-design-your-company-png-image_5263986.jpg",
      title: "Restaurant B",
      rating: "4",
    },
    {
      image:
        "https://www.logolynx.com/images/logolynx/2f/2fe83a33c4d0888fbb9476d0deda5710.png",
      title: "Restaurant C",
      rating: "4.2",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000",
      title: "Restaurant D",
      rating: "4.7",
    },
    {
      image: "https://penji.co/wp-content/uploads/2020/10/Dave-BURGITOS.jpg",
      title: "Restaurant E",
      rating: "4.2",
    },
    {
      image:
        "https://i.etsystatic.com/11979725/r/il/425b9a/1431687786/il_fullxfull.1431687786_w5a8.jpg",
      title: "Restaurant F",
      rating: "4.8",
    },
  ];

  // Calculate index range for current page
  const indexOfLastCard = currentPage * perPage;
  const indexOfFirstCard = indexOfLastCard - perPage;
  const currentCards = restaurantData.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="uppercase w-full flex flex-col items-center font-semibold">
        <p className="text-[#FF6868] text-lg m-2">EXPLORE</p>
        <p className="text-4xl text-[#180800]">Popular Restaurants</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 my-5">
        <button
          onClick={prevPage}
          className="arrow-button bg-gray-300 w-12 h-12 rounded-full"
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* Cards */}
        {currentCards.map((restaurant, index) => (
          <Cards
            key={index}
            image={restaurant.image}
            title={restaurant.title}
            rating={restaurant.rating}
          />
        ))}

        {/* Right arrow button */}
        <button
          onClick={nextPage}
          className="arrow-button bg-gray-300 w-10 h-10 rounded-full"
          disabled={indexOfLastCard >= restaurantData.length}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default PopulerRestaurantSection;
