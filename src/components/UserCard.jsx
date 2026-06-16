import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaGithub, FaUsers } from "react-icons/fa";

const UserCard = ({ user }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`shadow-lg rounded-xl p-6 mt-8 transition
      ${darkMode ? "bg-[#1e293b] text-white" : "bg-white text-gray-900"}`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Avatar */}
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full border"
        />

        {/* Info */}
        <div>
          <h2 className="text-2xl font-bold">{user.name || user.login}</h2>

          <p
            className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            @{user.login}
          </p>

          <p className="mt-3 opacity-80">{user.bio || "No bio available"}</p>

          {/* Stats */}
          <div className="flex gap-6 mt-4 text-sm">
            <p className="flex items-center gap-1">
              <FaUsers /> Followers: {user.followers}
            </p>

            <p>Following: {user.following}</p>

            <p>Repos: {user.public_repos}</p>
          </div>

          {/* Link */}
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 mt-4 transition
            ${
              darkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-500"
            }`}
          >
            <FaGithub />
            View GitHub profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
