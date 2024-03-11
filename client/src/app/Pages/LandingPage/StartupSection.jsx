import React from "react";
import "./StartupSection.css";
import Button from "../../components/Common/Button";

const StartupSection = () => {
  return (
    <div className="flex flex-row flex-wrap font-serif justify-evenly">
      <div className="md:w-48 md:h-48 w-64 h-64 m-3">
        <div className="text-[#180800] font-bold text-2xl mx-2">
          Discover The Most Delectable Dishes To
          <h1 className="inline text-[#F46739] font-bold text-2xl"> ORDER</h1>
        </div>
        <div className="text-md m-2 text-[#515151] mx-2">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </div>
        <form className="flex flex-row">
          <input
            type="search"
            placeholder="Delivery Address"
            className="bg-[#D9D9D9]/[0.7] rounded-md w-94 h-94"
          ></input>
          <Button text="Search"></Button>
        </form>
      </div>
      <div className="md:w-48 md:h-48 w-64 h-64 m-3"></div>
    </div>
  );
};

export default StartupSection;
