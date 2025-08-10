import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const EventDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}admin/events/${id}`);
        if (!res.ok) throw new Error("Failed to fetch event details");
        const data = await res.json();
        console.log("Event data:", data);
        setEvent(data);
      } catch (err) {
        toast.error("Error fetching event details:", err.message);
        console.error(err);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) {
    return <p className="text-center py-10">Loading event details...</p>;
  }

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const isUpcoming = new Date(event.date) >= new Date();

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto py-10 px-4">
        {/* Event Header */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-80 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">{event.title}</h1>
            <p className="text-gray-500 mt-2">
              📅 {formattedDate} | 📍 {event.location}
            </p>

            {/* Register Button */}
            <div className="mt-4">
              {isUpcoming ? (
                <Link
                  to={`/register/${event._id}`}
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition"
                >
                   Register Now
                </Link>
              ) : (
                <button
                  disabled
                  className="inline-block bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed"
                >
                   Registration Closed
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Event Description */}
        <div className="bg-white shadow-md rounded-lg mt-8 p-6">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
            About this Event
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {event.description}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EventDetails;
