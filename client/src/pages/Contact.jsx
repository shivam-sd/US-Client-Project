import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  const Carddata = [
    {
      title: "Q. How can I become a member of the ICAI New York Chapter?",
      data: "You must first be a member of ICAI. Once you are a member of ICAI, you can sign up for the membership by following the process on our website.",
    },
    {
      title:
        "Q. What are the benefits of becoming ICAI New York Chapter Member?",
      data: "As a member of our organization, you will have access to a variety of resources and benefits, including networking opportunities, professional development events, and educational resources.",
    },
    {
      title: "Q. How do I get in touch for inquiry?",
      data: "You can submit the form below to let us know if we can help you in any way or send us an email.",
    },
  ];

  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Section First */}
        <div className="mt-5 flex flex-col items-center gap-10">
          {/* Title Section */}
          <div className="text-center max-w-3xl">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-800">
              Frequently Asked Questions (FAQ)
            </h1>
            <p className="text-sm md:text-lg mt-2 text-gray-600">
              We’ve compiled a list of frequently asked questions and answers
              for your convenience. If you can’t find what you’re looking for,
              please get in touch and we’ll respond to your inquiry as quickly
              as possible.
            </p>
          </div>

          {/* Cards Section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Carddata.map((elm, idx) => (
              <div
                key={idx}
                className="bg-white shadow-xl rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300"
              >
                <p className="text-indigo-700 font-semibold text-base md:text-lg mb-3">
                  {elm.title}
                </p>
                <p className="text-gray-700 text-sm md:text-base">{elm.data}</p>
              </div>
            ))}
          </div>
        </div>

        {/* form section */}

        <div className="w-full px-4 py-10 flex lg:flex-row flex-col gap-16 justify-center shadow-2xl bg-gray-100 mt-5">
          <form className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              Get in touch with us!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Name */}
              <div>
                <label className="block text-lg font-medium mb-1 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-lg font-medium mb-1 text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="+1 123 456 7890"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1 text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Arriving From */}
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1 text-gray-700">
                Arriving From
              </label>
              <input
                type="text"
                placeholder="City or place"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-lg font-medium mb-1 text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Your message here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition duration-200 text-lg font-bold w-full cursor-pointer"
            >
              Send
            </button>
          </form>

{/* social media */}

        <div className="p-3 text-center flex items-center justify-center flex-col">
          <p className="lg:text-4xl md:text-2xl text-2xl">Follow us on social media</p>
          <div className="flex items-center gap-20 justify-center mt-6 text-4xl">
            <FaLinkedin className="text-blue-500 rounded-2xl" />
            <FaInstagram className="text-pink-600 rounded-2xl" />
          </div>
          <p className="text-xl mt-4 ">admin@icainy.us</p>
        </div>

        </div>

        
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
