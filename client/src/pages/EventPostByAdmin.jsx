import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const EventPostByAdmin = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setErrors({ ...errors, image: "" });
    } else {
      setImage(null);
      setPreview(null);
      setErrors({ ...errors, image: "Please select a valid image file." });
    }
  };

  const validate = () => {
    let temp = {};
    if (!form.title) temp.title = "Title is required";
    if (!form.location) temp.location = "Location is required";
    if (!form.date) temp.date = "Date is required";
    if (!form.time) temp.time = "Time is required";
    if (!image) temp.image = "Image is required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("location", form.location);
      formData.append("date", form.date);
      formData.append("time", form.time);
      formData.append("image", image);

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}admin/event/post`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Event posted successfully:", response);
      if (response.status === 201) {
        toast.success("Event Posted Successfully!");
        setForm({ title: "", location: "", date: "", time: "" });
        setImage(null);
        setPreview(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
      setErrors({});
    } catch (error) {
      toast.error("Error posting event.");
      console.error("Error posting event:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10 px-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in"
        style={{ animation: "fade-in 0.7s cubic-bezier(.4,0,.2,1)" }}
      >
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-2 tracking-tight">
          Post New Event
        </h2>
        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                errors.title ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="Enter event title"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title}</span>
            )}
          </div>
          {/* Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Location/Destination
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                errors.location ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="Enter location"
            />
            {errors.location && (
              <span className="text-red-500 text-sm">{errors.location}</span>
            )}
          </div>
          {/* Date & Time */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                  errors.date ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.date && (
                <span className="text-red-500 text-sm">{errors.date}</span>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                  errors.time ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.time && (
                <span className="text-red-500 text-sm">{errors.time}</span>
              )}
            </div>
          </div>
          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Upload Image
            </label>
            <div
              className={`flex items-center gap-4 border-2 border-dashed rounded-lg p-4 cursor-pointer transition hover:border-purple-400 ${
                errors.image ? "border-red-400" : "border-gray-300"
              }`}
              onClick={() => fileInputRef.current.click()}
            >
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-16 h-16 object-cover rounded-lg shadow-md transition-transform hover:scale-105"
                />
              ) : (
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg text-gray-400 text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 16v1a2 2 0 002 2h14a2 2 0 002-2v-1M16 12l-4-4m0 0l-4 4m4-4v12"
                    />
                  </svg>
                </div>
              )}
              <span className="text-gray-600 hover:text-purple-600 transition font-medium">
                {image ? image.name : "Click to upload image"}
              </span>
            </div>
            {errors.image && (
              <span className="text-red-500 text-sm">{errors.image}</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className={`w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 hover:shadow-2xl"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Posting...
            </span>
          ) : (
            "Post Event"
          )}
        </button>
      </form>
      {/* Animation keyframes */}
      <style>
        {`
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(30px);}
                        to { opacity: 1; transform: translateY(0);}
                    }
                `}
      </style>
    </div>
  );
};

export default EventPostByAdmin;
