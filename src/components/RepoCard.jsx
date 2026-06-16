import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const RepoCard = ({ repo }) => {
  const { darkMode } = useContext(ThemeContext);

  if (!repo) return null;

  return (
    <div
      className={`p-5 rounded-xl border shadow-sm transition hover:scale-[1.02] flex flex-col h-full
      ${
        darkMode
          ? "bg-[#1e293b] border-gray-800 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      {/* TOP CONTENT */}
      <div className="flex-1">
        {/* Repo Name */}
        <h2 className="text-lg font-semibold">{repo.name}</h2>

        {/* Description */}
        <p className="text-sm mt-2 opacity-80 line-clamp-3">
          {repo.description || "No description provided."}
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm opacity-80">
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
          {repo.language && <span>💻 {repo.language}</span>}
        </div>
      </div>

      {/* FIXED BOTTOM ACTION */}
      <div className="mt-5">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className={`text-sm font-medium hover:underline
          ${darkMode ? "text-blue-400" : "text-blue-600"}`}
        >
          View Repository →
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
