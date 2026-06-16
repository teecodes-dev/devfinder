import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen px-4 py-12 transition-colors duration-300
      ${darkMode ? "bg-[#0f172a] text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-3xl md:text-4xl font-bold">About This Project</h1>

        <p className="mt-3 opacity-80 text-sm md:text-base">
          A modern GitHub Explorer built with React and the GitHub API.
        </p>

       
        <div
          className={`mt-10 p-6 md:p-8 rounded-xl border shadow-sm transition
          ${
            darkMode
              ? "bg-[#1e293b] border-gray-800"
              : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-3"> What This App Does</h2>

          <p className="text-sm md:text-base opacity-80 leading-relaxed">
            This application allows users to search for GitHub profiles, explore
            repositories, and view developer insights in real time. It is
            designed to make discovering developers and projects fast, simple,
            and visually clean.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">✨ Features</h3>
              <ul className="mt-2 text-sm opacity-80 space-y-1">
                <li>• Search GitHub users</li>
                <li>• View repositories and stats</li>
                <li>• Dark/light mode support</li>
                <li>• Responsive UI design</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">⚙️ Tech Stack</h3>
              <ul className="mt-2 text-sm opacity-80 space-y-1">
                <li>• React (Frontend)</li>
                <li>• Tailwind CSS (Styling)</li>
                <li>• GitHub API (Data source)</li>
                <li>• Context API (Theme management)</li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="mt-8 text-center text-sm opacity-70">
          Built for learning, practice, and real-world API integration.
        </div>
      </div>
    </div>
  );
};

export default About;
