import React, { useState, useEffect } from "react";
import Link from "next/link";
import useAuthStore from "@/Store/authStore";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [options, setOptions] = useState(false);

  const handleOptions = () => {
    setOptions(!options);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setNavbarOpen(false);
      } else {
        // Scrolling up
        setNavbarOpen(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const userId = useAuthStore((state) => state.userId); //add...........
  console.log({ userId });
  const logout = useAuthStore((state) => state.logout); //add
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated); //add

  return (
    <nav
      className={`fixed top-0 shadow-xl left-0 z-50 backdrop-blur-xl bg-opacity-50 w-full transition-opacity duration-550 ${
        navbarOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/">
          <img
            src="/Logo.png"
            className="lg:h-16 sm:h-12 h-12 md:h-14"
            alt="Logo"
          />
        </a>
        <div className="flex md:order-2 gap-4 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isAuthenticated ? (
            <Link
              href="/LandingPage"
              type="button"
              onClick={logout}
              className="text-[#FCFCFC] text-lg bg-[#FF6868] hover:bg-[#f36839c3] shadow-[#d04b0892] shadow-md font-medium rounded-3xl px-4 py-2 text-center"
            >
              Signout
            </Link>
          ) : (
            <div className="flex gap-4">
              <Link
                href="/Auth/Login"
                type="button"
                className="text-[#FCFCFC] text-lg bg-[#FF6868] hover:bg-[#f36839c3] shadow-[#d04b0892] shadow-md font-medium rounded-3xl px-4 py-2 text-center"
              >
                Login
              </Link>
              <Link
                href="/Auth/Signup"
                type="button"
                className="text-[#FCFCFC] text-lg bg-[#FF6868] hover:bg-[#f36839c3] shadow-[#d04b0892] shadow-md font-medium rounded-3xl px-4 py-2 text-center"
              >
                SignUp
              </Link>
            </div>
          )}

          <button
            id="drop-down-on-click"
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-[#FF6868] rounded-lg md:hidden hover:bg-[#d04b082d]"
            aria-controls="navbar-cta"
            aria-expanded="true"
            onClick={handleOptions}
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

        {options && (
          <div className="md:hidden flex flex-col flex-wrap justify-center items-center w-full ">
            <ul className=" w-full rounded-xl flex  flex-wrap justify-center items-center font-bold p-4 mt-4 md:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="/LandingPage"
                  className="rounded-2xl w-full text-lg block hover:bg-[#ff68685d] py-2 px-3 text-[#180800] hover:text-[#FCFCFC]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/About/About"
                  className=" rounded-2xl w-full text-lg block hover:bg-[#ff68685d] py-2 px-3 text-[#180800] hover:text-[#FCFCFC]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Contact/Contact"
                  className=" rounded-2xl w-full text-lg block hover:bg-[#ff68685d] py-2 px-3 text-[#180800] hover:text-[#FCFCFC]"
                >
                  Contact
                </a>
              </li>
              {isAuthenticated ? ( //add from here
                <li>
                  <Link
                    href={`/Profile/${userId}`} //add
                    className="block py-2 px-3 md:p-0 text-[#180800] rounded md:bg-transparent hover:text-[#FF6868]"
                  >
                    Profile
                  </Link>
                  <li>
                    <Link
                      href="/Order/Order"
                      className=" rounded-2xl w-full text-lg block hover:bg-[#ff68685d] py-2 px-3 text-[#180800] hover:text-[#FCFCFC]"
                    >
                      Order
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Cart/Cart"
                      className=" rounded-2xl w-full text-lg block hover:bg-[#ff68685d] py-2 px-3 text-[#180800] hover:text-[#FCFCFC]"
                    >
                      Cart
                    </Link>
                  </li>
                </li>
              ) : null}
            </ul>
          </div>
        )}

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="/LandingPage"
                className=" rounded-2xl w-full text-lg block hover:text-[#FF6868] py-2 px-3 text-[#180800] "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/About/About"
                className=" rounded-2xl w-full text-lg block hover:text-[#FF6868] py-2 px-3 text-[#180800] "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Contact/Contact"
                className=" rounded-2xl w-full text-lg block hover:text-[#FF6868] py-2 px-3 text-[#180800] "
              >
                Contact
              </a>
            </li>
            {isAuthenticated ? (
              <li className="flex flex-row justify-between items-center gap-7">
                <li>
                  <Link
                    href={`/Profile/${userId}`}
                    className=" rounded-2xl w-full text-lg block hover:text-[#FF6868] py-2 px-3 text-[#180800] "
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Order/Order"
                    className=" rounded-2xl w-full text-lg block hover:text-[#FF6868] py-2 px-3 text-[#180800] "
                  >
                    Order
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Cart/Cart"
                    className=" rounded-2xl w-full text-lg block hover:text-[#FF6868] py-2 px-3 text-[#180800] "
                  >
                    Cart
                  </Link>
                </li>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
