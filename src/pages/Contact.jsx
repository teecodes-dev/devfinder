import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Submitted:", formData);

    alert("Message sent successfully (demo mode)");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className={`min-h-screen px-4 py-12 transition-colors duration-300
      ${darkMode ? "bg-[#0f172a] text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Contact Us
        </h1>

        <p className="mt-3 text-center opacity-80 text-sm md:text-base">
          Have feedback or suggestions? Send a message.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className={`mt-10 p-6 md:p-8 rounded-xl border shadow-sm space-y-5 transition
          ${
            darkMode
              ? "bg-[#1e293b] border-gray-800"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Name */}
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`w-full mt-1 p-3 rounded-lg border outline-none text-sm
              ${
                darkMode
                  ? "bg-[#0f172a] border-gray-700 text-white"
                  : "bg-gray-50 border-gray-300"
              }`}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full mt-1 p-3 rounded-lg border outline-none text-sm
              ${
                darkMode
                  ? "bg-[#0f172a] border-gray-700 text-white"
                  : "bg-gray-50 border-gray-300"
              }`}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              className={`w-full mt-1 p-3 rounded-lg border outline-none text-sm resize-none
              ${
                darkMode
                  ? "bg-[#0f172a] border-gray-700 text-white"
                  : "bg-gray-50 border-gray-300"
              }`}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-medium transition
            ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-500 text-white"
                : "bg-blue-500 hover:bg-blue-400 text-white"
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
