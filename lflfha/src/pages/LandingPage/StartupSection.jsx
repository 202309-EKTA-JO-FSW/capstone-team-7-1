import Button from "@/components/Common/Button";
import React from "react";

const StartupSection = () => {
  return (
    <section
      id="Gradient-bg"
      className="h-full w-full flex lg:flex-row flex-col-reverse gap-4 p-10"
    >
      <div className="flex flex-col justify-center p-5 gap-4 ">
        <h1 className=" text-[#180800]  text-5xl uppercase font-bold">
          Discover The Most Delectable Dishes To{" "}
          <p className="inline text-[#F46739]">ORDER</p>
        </h1>
        <p className="text-lg font-semibold text-[#515151]">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <form className="flex flex-row justify-center items-center h-1/6  ">
          <input
            type="search"
            placeholder="Delivery Address"
            className="bg-[#D9D9D9]/[0.7] rounded-lg min-h-10 w-1/2 ml-2 px-3 text-[#000000]/[0.47] font-bold border-[#000000]/[0.30]  border-2 shadow-[#000000]/[0.4] shadow-md "
          ></input>
          <Button text="Search" />
        </form>
      </div>
      <div className="min-h-fit w-full flex flex-col items-center justify-center">
        <figure className="relative">
          <img
            src="https://imagizer.imageshack.com/v2/1024x768q70/923/WH7mUz.png"
            alt="Startup-Page"
            className="object-contain rounded-full bg-[#F16939]/[0.5]"
          />
          <img
            src="https://imagizer.imageshack.com/v2/1024x768q70/922/bO3Esp.png"
            alt="yummy"
            className="object-contain absolute h-12 w-30 top-20 -left-4"
          />
          <img
            src="https://imagizer.imageshack.com/v2/1024x768q70/922/bz0Zrf.png"
            alt="Food-1"
            className="object-contain absolute h-16 w-40  lg:h-16 lg:w-32 sm:h-10 sm:w-24 md:h-20 md:w-40 bottom-0 -right-0"
          />
          <img
            src="https://imagizer.imageshack.com/v2/1024x768q70/923/1cj4lU.png"
            alt="Food-2"
            className="object-contain absolute h-16 w-40 lg:h-16 lg:w-32 sm:h-10 sm:w-24 md:h-20 md:w-40 bottom-0 left-2"
          />
        </figure>
      </div>
    </section>
  );
};

export default StartupSection;
