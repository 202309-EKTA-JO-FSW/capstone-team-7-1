import React from "react";

const Card = ({ image, title, rating, price, ingredients }) => {
  return (
    <div className=" max-w-xs bg-white rounded-2xl shadow-xl px-5 pt-5 m-3">
      <img className="w-full rounded-lg" src={image} alt={title} />
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl font-sans">{title}</div>
        {rating ? (
          <div className="flex items-center">
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
            <div className="mr-2 font-bold text-xl font-sans ml-2">
              {rating}
            </div>
          </div>
        ) : (
          <div className="font-bold text-xl font-sans">{price}</div>
        )}
      </div>
      {ingredients ? (
        <div className="px-6 flex justify-between items-center mb-3font-sans ">
          {ingredients}
        </div>
      ) : (
        <div className="font-sans"></div>
      )}
    </div>
  );
};

export default Card;
