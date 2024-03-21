import React from "react";

const Cards = ({ image, title, rating, price, ingredients }) => {
  return (
    <div className="w-72 h-96 bg-white rounded-2xl shadow-xl flex flex-col justify-center">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full p-5 rounded-lg"
      />

      <div className="flex-grow flex flex-col justify-between p-4">
        <div className="flex justify-between items-end ">
          <div className="font-bold text-xl">{title}</div>
          {rating ? (
            <div className="flex items-end">
              <svg
                className="h-6 w-6 text-yellow-500"
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
              <div className="mr-2 font-bold text-xl ml-2">{rating}</div>
            </div>
          ) : (
            <div className="font-bold text-xl">{price}</div>
          )}
        </div>
        {ingredients && (
          <div className="px-6">
            <div className="font-bold text-xl">{ingredients}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
