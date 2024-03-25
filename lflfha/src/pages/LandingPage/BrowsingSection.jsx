import React, { useState, useEffect } from "react";
import Link from "next/link";

const browsingByCategorySection = () => {
  return (
    <section className="bg-[#FCFCFC] max-h-full w-full flex flex-col justify-center tracking-widest items-center gap-4 px-16 py-8">
      <div className="uppercase w-full flex flex-col items-center justify-center font-semibold">
        <p className="text-[#FF6868] text-lg">OR</p>
        <Link href="/GetAllRestaurants/AllRestaurants">
          <p className="text-4xl text-[#180800] text-center">
            Browse By Category
          </p>
        </Link>
      </div>
      <div className="h-full w-full flex flex-row justify-center flex-wrap items-center gap-10 m-2">
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center">
          <img
            className="object-contain h-32 mt-5 "
            src="https://imagizer.imageshack.com/v2/1024x768q70/924/zNhG0D.png"
            alt="breakfast logo"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-5 uppercase">Breakfast</div>
            <Link href="/GetAllRestaurants/AllRestaurants">
              <button className="text-[#FF6868] text-base uppercase">
                Explore <p>Restaurants {"->"}</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-sm  rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center">
          <img
            className="object-contain h-32 mt-5 "
            src="https://imagizer.imageshack.com/v2/1024x768q70/923/rxmc2p.png"
            alt="breakfast logo"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-5 uppercase">Main Dishes</div>
            <Link href="/GetAllRestaurants/AllRestaurants">
              <button className="text-[#FF6868] text-base uppercase">
                Explore <p>Restaurants {"->"}</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center">
          <img
            className="object-contain h-32 mt-5 "
            src="https://imagizer.imageshack.com/v2/1024x768q70/923/p6nf32.png"
            alt="Drinks logo"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-5 uppercase">Drinks</div>
            <Link href="/GetAllRestaurants/AllRestaurants">
              <button className="text-[#FF6868] text-base uppercase">
                Explore <p>Restaurants {"->"}</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center">
          <img
            className="object-contain h-32 mt-5"
            src="https://imagizer.imageshack.com/v2/1024x768q70/924/IPMl52.png
"
            alt="Desert logo"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-5 uppercase">Deserts</div>
            <Link href="/GetAllRestaurants/AllRestaurants">
              <button className="text-[#FF6868] text-base uppercase">
                Explore <p>Restaurants {"->"}</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default browsingByCategorySection;
