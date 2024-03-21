import React from "react";
import "./StartupSection.css";
import Button from "../../components/Common/Button";
//import { FaSearchengin } from "react-icons/fa";

const StartupSection = () => {
  return (
    <section
      id="StartupSection"
      className="lg:h-[70vh] h-full w-full flex lg:flex-row flex-col-reverse gap-4 p-5 mb-10"
    >
      <div className="min-h-fit w-full flex flex-col justify-center p-4 gap-4 ">
        <h1 className=" text-[#180800]  text-5xl uppercase font-bold">
          Discover The Most Delectable Dishes To{" "}
          <p className="inline text-[#F46739]">ORDER</p>
        </h1>
        <p className="text-lg font-semibold text-[#515151]">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div>
          <form className="flex flex-row justify-center items-center my-5">
            <input
              type="search"
              placeholder="Delivery Address"
              className="bg-[#D9D9D9]/[0.7] rounded-lg min-h-10 w-1/2 ml-2 px-3 text-[#000000]/[0.47] font-bold border-[#000000]/[0.30]  border-2 shadow-[#000000]/[0.4] shadow-md "
            ></input>
            <Button text="Search"></Button>
          </form>
        </div>
      </div>
      <div className="min-h-full w-full relative">
        <div className="rounded-full bg-[#F16939]/[0.5] inset-0 absolute"></div>
        <figure className="relative">
          <img
            src="https://imagizer.imageshack.com/v2/1024x768q70/923/WH7mUz.png"
            alt="Startup-Page"
            className="object-contain "
          />
          <img
            src="https://imagizer.imageshack.com/v2/1024x768q70/922/bO3Esp.png"
            alt="yummy"
            className="object-contain absolute h-12 w-30 top-20"
          />
          <img
            src="https://imagizer.imageshack.com/v2/1024x768q70/922/bz0Zrf.png"
            alt="Food-1"
            className="object-contain absolute h-16 w-42 bottom-0 left-10"
          />
          <img
            src="https://imagizer.imageshack.com/v2/1024x768q70/923/1cj4lU.png"
            alt="Food-2"
            className="object-contain absolute h-16 w-42 bottom-0 right-10"
          />
        </figure>
      </div>
    </section>
  );
};

export default StartupSection;
