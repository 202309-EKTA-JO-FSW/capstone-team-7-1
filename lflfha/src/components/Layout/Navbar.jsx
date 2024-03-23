import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";

function Navbar() {
  return (
    <nav className=" border-gray-200 bg-[#FACFC1] drop-shadow-2xl shadow-white w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/">
          <img
            src="/Logo.png"
            className="lg:h-16 sm:h-12 h-12 md:h-14"
            alt="Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* <a href="/Cart">
            {" "}
            <img
              className="h-9 w-8 mr-5 "
              src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png"
              alt="shopping-cart--v1"
            />
          </a>{" "} */}
          <button
            type="button"
            className="text-white bg-[#FF6868] hover:bg-[#f36839c3]  shadow-[#d04b0892] shadow-md font-bold rounded-lg text-sm px-4 py-2 text-center "
          >
            SignUp
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#FF6868] rounded-lg md:hidden hover:bg-[#d04b082d] "
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 text-[#180800] rounded md:bg-transparent hover:text-[#FF6868]"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 md:p-0 text-[#180800] rounded md:bg-transparent hover:text-[#FF6868]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/profile"
                className="block py-2 px-3 md:p-0 text-[#180800] rounded md:bg-transparent hover:text-[#FF6868]"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="/Order"
                className="block py-2 px-3 md:p-0 text-[#180800] rounded md:bg-transparent hover:text-[#FF6868]"
              >
                Order
              </a>
            </li>

            <li>
              <a
                href="/Order"
                className="block py-2 px-3 md:p-0 text-[#180800] rounded md:bg-transparent hover:text-[#FF6868]"
              >
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
