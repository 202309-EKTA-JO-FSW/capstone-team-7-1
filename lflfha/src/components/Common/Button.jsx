// Button.jsx
import React from "react";
import Link from "next/link";

const Button = ({ text, destination }) => {
  return (
    <Link href={{ pathname: destination }}>
      <button className="bg-[#F36839] hover:bg-[#f36839c3] text-[#FCFCFC] shadow-[#d04b0892] shadow-lg font-bold py-3 px-4 rounded-xl mx-3 my-10 ">
        {text}
      </button>
    </Link>
  );
};

export default Button;
