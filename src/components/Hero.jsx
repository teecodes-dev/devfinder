import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SearchBar from "./SearchBar";

const Hero = ({ onSearch }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`w-full py-16 px-4 transition-colors duration-300
      ${
        darkMode
          ? "bg-gradient-to-b from-[#0f172a] to-[#020617] text-white"
          : "bg-gradient-to-b from-gray-50 to-white text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
       
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Discover GitHub Developers & Repositories
        </h1>

       
        <p className="mt-4 text-sm md:text-lg opacity-80">
          Search any GitHub user, explore their repositories, and analyze
          developer activity in real time.
        </p>

        
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-xl">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>

        
        <div className="mt-6 text-xs md:text-sm opacity-60">
          Search for a GitHub user to view profile
        </div>
      </div>
    </section>
  );
};

export default Hero;
