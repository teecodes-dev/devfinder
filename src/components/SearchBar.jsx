import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SearchBar = ({ onSearch }) => {
  const { darkMode } = useContext(ThemeContext);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    if (onSearch) {
      onSearch(query);
    }

    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full flex items-center gap-2 p-2 rounded-xl border transition
      ${
        darkMode ? "bg-[#1e293b] border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub users..."
        className={`flex-1 p-2 text-sm outline-none bg-transparent
        ${
          darkMode
            ? "text-white placeholder-gray-400"
            : "text-gray-900 placeholder-gray-500"
        }`}
      />

      
      <button
        type="submit"
        className={`px-4 py-2 rounded-lg text-sm font-medium transition
        ${
          darkMode
            ? "bg-blue-600 hover:bg-blue-500 text-white"
            : "bg-blue-500 hover:bg-blue-400 text-white"
        }`}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
