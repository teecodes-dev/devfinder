import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const mailtoLink = `mailto:ayotomideadeyanju@gmail.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`,
    )}`;

    window.location.href = mailtoLink;

    setLoading(false);
  };

  return (
    <div
      className={`min-h-screen px-4 py-12 transition-colors duration-300
      ${darkMode ? "bg-[#0f172a] text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Contact Us
        </h1>

        <p className="mt-3 text-center opacity-80 text-sm md:text-base">
          Have feedback or suggestions? Send a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className={`mt-10 p-6 md:p-8 rounded-xl border shadow-sm space-y-5
          ${
            darkMode
              ? "bg-[#1e293b] border-gray-800"
              : "bg-white border-gray-200"
          }`}
        >
          
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full p-3 rounded-lg border bg-transparent outline-none"
            required
          />

          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full p-3 rounded-lg border bg-transparent outline-none"
            required
          />

          
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 rounded-lg border bg-transparent outline-none"
            required
          />

          
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="5"
            className="w-full p-3 rounded-lg border bg-transparent outline-none resize-none"
            required
          />

          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-500 transition"
          >
            {loading ? "Opening Email..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
