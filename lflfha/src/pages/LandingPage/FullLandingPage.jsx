"use client";
import React from "react";

import StartupSection from "./StartupSection";
import PopulerRestaurantSection from "./PopularRestaurantSection";
import BrowsingByCategorySection from "./BrowsingSection";

const LandingPage = () => {
  return (
    <div className="z-10 items-center flex flex-col justify-center text-sm lg:flex">
      <StartupSection />
      <PopulerRestaurantSection />
      <BrowsingByCategorySection />
    </div>
  );
};

export default LandingPage;
