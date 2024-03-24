import React from "react";
import Link from "next/link";

const Footer = () => {
  const teamMembers = [
    {
      name: "Lunar Salameh",
      github: "https://github.com/LunarSalameh",
      linkedin: "https://www.linkedin.com/in/LunarSalameh",
    },
    {
      name: "Hakiema ismail",
      github: "https://github.com/hakimahalzaidanin",
      linkedin: "https://www.linkedin.com/in/hakimah-al-zaidanin-31917a2b6",
    },
    {
      name: "Abdullah Alawad ",
      github: "https://github.com/Abdullah-Alawad",
      linkedin: "https://www.linkedin.com/in/abdullah-alawad-0989b7269",
    },
    {
      name: "Ammar kolko",
      github: "https://github.com/Abdullah-Alawad",
      linkedin: "https://www.linkedin.com/in/ammar-kolko-39755674/",
    },
  ];

  return (
    <footer className="mt-auto ">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8 mt-12">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <Link href={`/Home`}>
                <img src="/Logo.png" alt="Logo" className="w-4/6"></img>
              </Link>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className=" text-[#180800] font-bold hover:border-4 border-transparent hover:border-b-[#180800]  w-2/4">
                LFLFHA
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-[#555555] font-medium transition hover:opacity-75"
                  >
                    Cart
                  </a>
                </li>
                <li>
                  <a
                    href="/restaurants"
                    className="text-[#555555] font-medium transition hover:opacity-75"
                  >
                    restaurants
                  </a>
                </li>
                <li>
                  <a
                    href="/orders"
                    className="text-[#555555] font-medium transition hover:opacity-75"
                  >
                    orders
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className=" text-[#180800] font-bold hover:border-4 border-transparent hover:border-b-[#180800]  w-2/4">
                Pages
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-[#555555] font-medium transition hover:opacity-75"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="/about"
                    className="text-[#555555] font-medium transition hover:opacity-75"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    className="text-[#555555] font-medium transition hover:opacity-75"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold w-2/3 text-[#180800] hover:border-solid hover:border-4 border-transparent hover:border-b-[#180800] ">
                Social Media
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <div>
                  <div className=" space-y-4">
                    <div className="col-span-2 flex justify-start flex-col gap-3 ">
                      <div className="flex flex-col">
                        <li>
                          <p className="text-[#555555] mb-5 font-medium transition hover:opacity-75">
                            contact@lflfha.com
                          </p>
                        </li>
                        <li>
                          <p className="text-[#555555] font-medium transition hover:opacity-75">
                            +962-789631452
                          </p>
                        </li>
                      </div>
                      <div className="flex flex-row justify-start items-center">
                        {/* Github */}
                        <div className="text-[#F46739] transition hover:opacity-75">
                          <svg
                            className="h-8 w-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        {/* Facebook */}
                        <div className="transition hover:opacity-75">
                          <svg
                            className="h-10 w-10"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
                              fill="#F46739"
                            />
                          </svg>
                        </div>
                        {/* Linkedin */}
                        <div className="text-[#F46739] transition hover:opacity-75">
                          <svg
                            className="h-8 w-8"
                            viewBox="0 0 50 50"
                            fill="currentColor"
                          >
                            <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
                          </svg>
                        </div>
                        {/* Instagram */}
                        <div className="text-[#F46739] transition hover:opacity-75">
                          <svg
                            className="h-10 w-10 p-1"
                            viewBox="0 0 19.2 19.2"
                            id="instagram"
                            fill="currentColor"
                          >
                            <path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.03 2.02.03s1.493-.006 2.02-.03a2.766 2.766 0 0 0 .929-.172 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.03-.685.03-2.02s-.006-1.493-.03-2.02a2.766 2.766 0 0 0-.172-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6z" />
                            <circle cx="9.6" cy="9.6" r="1.667" />
                            <path d="M9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.662a3.67 3.67 0 0 1-.233 1.213 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .233-1.213 2.556 2.556 0 0 1 1.462-1.462 3.67 3.67 0 0 1 1.213-.233c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.233 2.556 2.556 0 0 1 1.462 1.462 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-500 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; 2024. LFLFha. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="https://github.com/202309-EKTA-JO-FSW/capstone-team-7-1"
                  target="_blank"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Full Project Link
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
