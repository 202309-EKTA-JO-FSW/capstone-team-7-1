"use client";
import React from "react";

import StartupSection from "./StartupSection";
import PopulerRestaurantSection from "./PopularRestaurantSection";
import BrowsingByCategorySection from "./BrowsingSection";
import NavBar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ReviewsSection from "./ReviewsSection";

const LandingPage = () => {
  return (
    <div className="z-10 items-center flex flex-col justify-center text-sm lg:flex">
      <NavBar />
      <StartupSection />
      <PopulerRestaurantSection />
      <BrowsingByCategorySection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
