import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <div className="mt-8">
          {/* Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[400px] md:h-[450px] lg:h-[750px] mb-5">
            {/* Background Image */}
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/690c171f-077d-49fa-8440-b6ca7aeb3d69.png"
              alt="ICAI NY"
              className="w-full h-full object-cover brightness-75 transition-transform duration-500 hover:scale-105"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
                ICAI
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mt-2">New York</p>
            </div>
          </div>
        </div>

        {/* Second Content */}

        <div className="w-full p-4 flex flex-col lg:flex-row md:flex-row items-center gap-8 shadow-xl mb-16 mt-6">
          {/* Left: Image */}
          <div className="w-full lg:w-1/3 md:w-1/2 h-80 md:h-96 flex items-center justify-center shadow-2xl rounded-2xl">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6eb210f9-88d2-4a99-9134-93698f3eb6a0.png"
              alt="ICAI NY"
              className="h-full object-contain rounded-2xl"
            />
          </div>

          {/* Right: Text and Buttons */}
          <div className="w-full lg:w-1/1 md:w-1/2 text-black">
            <p className="text-base md:text-lg lg:text-2xl leading-relaxed">
              Welcome to the Institute of Chartered Accountants of India New
              York Chapter! We are a professional organization dedicated to
              promoting and advancing the accounting profession in New York and
              beyond. Our mission is to provide support and resources to our
              members, as well as to enhance the visibility and credibility of
              the accounting profession.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row lg:flex-row gap-4 mt-6">
              <Link
                to="#"
                className="bg-violet-700 px-6 py-4 rounded-2xl text-white text-lg font-semibold text-center hover:bg-violet-500 duration-300"
              >
                Become a member of <br /> ICAI NY Chapter
              </Link>
              <Link
                to="#"
                className="bg-blue-700 px-6 py-4 rounded-2xl text-white text-lg font-semibold text-center hover:bg-blue-500 duration-300"
              >
                Know About <br /> Upcoming <br /> Events
              </Link>
            </div>
          </div>
        </div>

        {/* Third Section */}

<div className="w-full px-4 py-6 mb-10">
  {/* Heading */}
 <h4 className="text-center text-xl md:text-4xl lg:text-6xl mb-6 font-bold tracking-tight">
  STRONGER{" "}
  <span className="bg-gradient-to-r from-blue-500 via-violet-600 to-pink-500 bg-clip-text text-transparent">
    TOGETHER
  </span>
</h4>


  {/* Image section */}
  <div className="w-full h-72 md:h-96 lg:h-[680px] overflow-hidden rounded-xl shadow-lg">
    <img
      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/da03c2f3-f4e5-422e-aad1-993c91f5ef7d.png"
      alt="Stronger Together"
      className="w-full h-full object-cover"
    />
  </div>
</div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
