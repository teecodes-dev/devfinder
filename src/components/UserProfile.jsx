import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import StatsCard from "./StatsCard";
import RepoGrid from "./RepoGrid";

const UserProfile = ({ user, repos = [], loading = false }) => {
  const { darkMode } = useContext(ThemeContext);

  if (!user) {
    return (
      <div
        className={`text-center py-16 text-sm opacity-70 ${
          darkMode ? "text-white" : "text-gray-700"
        }`}
      >
        Real-time GitHub Explorer built with React, Tailwind CSS, and GitHub API
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-6xl mx-auto px-4">
      
      <div
        className={`p-6 rounded-xl border shadow-sm flex flex-col md:flex-row gap-6 items-center
        ${
          darkMode
            ? "bg-[#1e293b] border-gray-800 text-white"
            : "bg-white border-gray-200 text-gray-900"
        }`}
      >
       
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-24 h-24 rounded-full border"
        />

        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold">@{user.login}</h2>

          <p className="text-sm opacity-80 mt-1">
            {user.bio || "No bio available"}
          </p>

          <div className="mt-3 text-sm opacity-70">
            🌍 {user.location || "Unknown location"} •
            <span className="ml-2">
              🔗{" "}
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className={`hover:underline ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                GitHub Profile
              </a>
            </span>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <StatsCard label="Followers" value={user.followers} icon="👥" />
        <StatsCard label="Following" value={user.following} icon="➡️" />
        <StatsCard label="Public Repos" value={user.public_repos} icon="📦" />
        <StatsCard label="Gists" value={user.public_gists} icon="📝" />
      </div>

     
      <div className="mt-10">
        <h3
          className={`text-xl font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Repositories
        </h3>

        <RepoGrid repos={repos} loading={loading} />
      </div>
    </div>
  );
};

export default UserProfile;
