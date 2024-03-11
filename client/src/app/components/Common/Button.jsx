import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-[#F36839] hover:bg-[#f36839c3] text-white shadow-[#d04b0892] shadow-lg font-bold py-2 px-4 rounded-xl m-2">
      {text}
    </button>
  );
};

export default Button;
