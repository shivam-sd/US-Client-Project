import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminAccess = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // console.log(email,password,import.meta.env.VITE_API_URL);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}admin/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);

      // console.log("Login response:", response.data);
      toast.success("Login successful!");
      navigate("/admindashboard");
    } catch (error) {
      toast.error("Invalid Credentials. Please try again.");
      // console.error("Error during admin login:", error);
      setIsSubmitting(false);
      return;
    } 
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="bg-white/80 shadow-xl rounded-2xl p-8 w-full max-w-md backdrop-blur-md animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2 tracking-tight">
          Admin Login
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Sign in to access the admin panel
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 active:scale-95 disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
      {/* Animation keyframes */}
      <style>
        {`
                    .animate-fade-in {
                        animation: fadeIn 0.8s cubic-bezier(.4,0,.2,1);
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(40px);}
                        to { opacity: 1; transform: translateY(0);}
                    }
                `}
      </style>
    </div>
  );
};

export default AdminAccess;
