import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const navigate = useNavigate();

  // Fetch all events on mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}admin/events/fetch`
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  // Filter events when searchTerm changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredEvents([]);
    } else {
      const results = events.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEvents(results);
    }
  }, [searchTerm, events]);

  // Navigate to event details
  const handleEventClick = (id) => {
    setSearchTerm("");
    setFilteredEvents([]);
    navigate(`/eventDetails/${id}`);
  };

  // 🔹 Search Results UI (Reusable)
  const SearchResults = ({ isMobile = false }) => (
    <>
      {filteredEvents.length > 0 && (
        <div
          className={`absolute top-full ${
            isMobile ? "left-4 right-4" : "left-0 w-full"
          } bg-white shadow-lg rounded-lg mt-1 max-h-96 overflow-y-auto z-50`}
        >
          {filteredEvents.map((event) => (
            <div
              key={event._id}
              onClick={() => handleEventClick(event._id)}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-none"
            >
              {/* Event Image */}
              <div className="w-14 h-14 flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              {/* Event Info */}
              <div className="flex flex-col">
                <p className="font-medium text-gray-800">{event.title}</p>
                <p className="text-sm text-gray-500">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );

  return (
    <>
      <div className="w-full shadow-xl sticky top-0 z-50 bg-white">
        {/* Desktop Navbar */}
        <div className="container mx-auto p-5 lg:flex md:hidden items-center justify-between hidden">
          {/* Logo */}
          <div className="flex items-center gap-4 cursor-pointer hover:gap-5 duration-300">
            <Link to={"/"}>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1800b28b-1f1a-44de-be44-53ef3f4f0a5a.png"
                alt="logo"
                className="w-14 rounded-full hover:scale-105 transition"
              />
            </Link>
            <Link to={"/"}>
              <p className="text-3xl font-bold text-blue-700">ICAI NY</p>
            </Link>
          </div>

          {/* Navigation */}
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

          {/* Search Bar */}
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 rounded-xl text-lg pl-3 w-full outline-none border-2 border-black"
            />
            <FaSearch className="absolute right-3 top-3 text-xl text-gray-600" />
            <SearchResults />
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

          {isMenu && (
            <div className="bg-white w-full p-5 animate-slide-down">
              <div className="flex flex-col items-center gap-4 text-lg font-semibold">
                {Object.entries(navLinks).map(([path, label], idx) => (
                  <Link
                    to={path}
                    key={path}
                    className="text-xl hover:text-blue-600 font-bold hover:underline transition"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Search */}
          <div className="relative bg-white px-4 py-2 mt-2">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 text-lg rounded-xl pl-3 border-2 border-black outline-none"
            />
            <FaSearch className="absolute right-7 top-5 text-gray-600" />
            <SearchResults isMobile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
