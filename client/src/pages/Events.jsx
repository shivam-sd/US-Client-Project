import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// EventCard Component
const EventCard = ({_id, title, date, location, image }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });


  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h2 className="font-semibold text-lg mb-1">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {formattedDate} | {location}
        </p>
        <Link
          to={`/eventDetails/${_id}`}
          className="inline-block bg-blue-700 w-full mt-4 text-white text-lg px-4 py-2 rounded hover:bg-blue-600 duration-300 cursor-pointer"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const today = new Date();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}admin/events/fetch`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("data", data);
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    };

    fetchEvents();
  }, []);

  const upcoming = events.filter((event) => new Date(event.date) >= today);
  const past = events.filter((event) => new Date(event.date) < today);

  upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));
  past.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Header />
      <div className="bg-gray-50 text-gray-900 font-sans py-10 px-4 max-w-6xl mx-auto">
        {upcoming.length > 0 && (
          <section className="mb-12">
            <h1 className="text-3xl font-bold mb-6 border-b pb-2">
              Upcoming Events
            </h1>
            <div className="grid md:grid-cols-3 gap-6">
              {upcoming.map((event) => (
                <EventCard key={event.id || event._id} {...event} />
              ))}
            </div>
          </section>
        )}

        {past.length > 0 && (
          <section>
            <h1 className="text-3xl font-bold mb-6 border-b pb-2">
              Past Events
            </h1>
            <div className="grid md:grid-cols-3 gap-6">
              {past.map((event) => (
                <EventCard key={event.id || event._id} {...event} />
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Events;
