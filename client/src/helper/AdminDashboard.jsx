import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const stats = [
  { label: "Total Events", icon: "📅" },
];

export default function AdminDashboard() {
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}admin/events/fetch`
        );
        setEvents(response.data || []);
        console.log("Fetched events:", response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const handleDelete = async (eventId) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}admin/events/delete/${eventId}`
      );
      setEvents(events.filter((ent) => ent._id !== eventId));
      navigate("/admindashboard");
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <Link to={"/eventpostbyadmin"} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
          Post Event
        </Link>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow p-6 flex items-center space-x-4 hover:shadow-lg transition"
          >
            <span className="text-3xl">{stat.icon}</span>
            <div>
              <div className="text-2xl font-semibold text-gray-700">
                {events.length}
              </div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Events Table */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Events
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="py-3 px-4 text-gray-600 text-left">Title</th>
                <th className="py-3 px-4 text-gray-600 text-left">Location</th>
                <th className="py-3 px-4 text-gray-600 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.length > 0 ? (
                events.map((ent, idx) => (
                  <tr
                    key={ent._id}
                    className={`${
                      idx % 2 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="py-3 px-4 font-medium">{ent.title}</td>
                    <td className="py-3 px-4">{ent.location}</td>
                    <td className="py-3 px-4 text-center space-x-2">
                     
                      <Link
                        to={`/admindashboard/${ent._id}`}
                        onClick={() => handleDelete(ent._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="py-6 text-center text-gray-500 italic"
                  >
                    No events found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
