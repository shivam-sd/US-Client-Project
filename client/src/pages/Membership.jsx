import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Membership = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-5 rounded-2xl flex flex-col items-center ">
        <h1 className="lg:text-5xl md:text-4xl text-3xl text-center mb-10 mt-4">
          ICAI Membership Plan
        </h1>
        <div className="p-4 border-2 border-black text-center">
          <p className="lg:text-3xl md:3xl text-2xl">Annual membership</p>
          <p className="lg:text-6xl md:text-5xl mt-8 text-5xl">$100</p>
          <span className="text-lg">Every Year</span>
          <p className="lg:text-2xl md:text-2xl mt-8">For CAs located in the Greater New York City Area</p>
          <button className="p-3 w-40 cursor-pointer bg-blue-800 mt-10 text-3xl text-white rounded">Select</button>

          <p className="border-t-2 mt-8 mb-6">Access to member community, networking events, and more</p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Membership;
