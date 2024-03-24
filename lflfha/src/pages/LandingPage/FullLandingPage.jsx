"use client";
import React from "react";

import StartupSection from "./StartupSection";
import PopulerRestaurantSection from "./PopularRestaurantSection";
import BrowsingByCategorySection from "./BrowsingSection";
import ReviewsSection from "./ReviewsSection";
import NavBar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
const LandingPage = () => {
  return (
    <div className="z-10 items-center flex flex-col justify-center text-sm lg:flex">
      <StartupSection />
      <PopulerRestaurantSection />
      <BrowsingByCategorySection />
      <ReviewsSection />
    </div>
  );
};

export default LandingPage;
