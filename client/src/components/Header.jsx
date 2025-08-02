import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const navLinks = {
    "/": "Home",
    "/events": "Events",
    "/gallery": "Gallery",
    "/membership": "Membership",
    "/about-us": "About Us",
    "/contact": "Contact",
  };

  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      {/* Mobile Slide-down Animation */}
      <style>
        {`
        @keyframes slideDown {
          0% {
            transform: translateY(-30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slideDown 0.4s ease-out;
        }
      `}
      </style>

      <div className="w-full shadow-xl sticky top-0 z-50 bg-white">
        {/* Desktop Navbar */}
        <div className="container mx-auto p-5 lg:flex md:hidden items-center justify-between hidden">
          <div className="flex items-center gap-4 cursor-pointer hover:gap-5 duration-300">
            <Link to={"/"}><img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1800b28b-1f1a-44de-be44-53ef3f4f0a5a.png"
              alt=""
              className="w-14 rounded-full hover:scale-105 transition"
            /></Link>
            <Link to={"/"}><p className="text-3xl font-bold text-blue-700">ICAI NY</p></Link>
          </div>

          <div className="flex items-center gap-6 font-semibold text-lg">
            {Object.entries(navLinks).map(([path, label]) => (
              <Link
                to={path}
                key={path}
                className="text-xl hover:text-blue-600 font-bold hover:underline transition"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 ">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="p-2 rounded-xl text-lg pl-3 lg:w-80 outline-none border-2 border-black"
              />
              <FaSearch className="absolute right-3 top-3 text-xl text-gray-600" />
            </div>
            {/* <Link to="/login" className="flex items-center gap-2 hover:gap-3 duration-300">
              <RiLoginCircleLine className="text-2xl text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
                Log In
              </span>
            </Link> */}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="w-full lg:hidden md:flex flex-col shadow">
          <div className="flex p-4 items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1800b28b-1f1a-44de-be44-53ef3f4f0a5a.png"
                alt=""
                className="w-10 rounded-full hover:scale-105 transition"
              />
              <p className="text-xl font-bold text-blue-700">ICAI NY</p>
            </div>
            <button onClick={() => setIsMenu(!isMenu)}>
              <TiThMenu
                className={`text-3xl transition-transform ${
                  isMenu ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenu && (
            <div className="bg-white w-full p-5 animate-slide-down">
              <div className="flex flex-col items-center gap-4 text-lg font-semibold">
                {Object.entries(navLinks).map(([path, label], idx) => (
                  <Link
                    to={path}
                    key={path}
                    className="text-xl hover:text-blue-600 font-bold hover:underline transition"
                    style={{
                      animationDelay: `${idx * 70}ms`,
                      animation: "slideDown 0.3s ease-out",
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              {/* <Link to="/login" className="flex items-center justify-center mt-4 bg-amber-100 p-2 rounded-2xl">
              <RiLoginCircleLine className="text-2xl text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
                Log In
              </span>
            </Link> */}
            </div>
          )}

          {/* Mobile Search */}
          <div className="bg-white flex items-center px-4 py-2 mt-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 text-lg rounded-xl pl-3 border-2 border-black outline-none"
            />
            <FaSearch className="ml-[-30px] text-gray-600" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
