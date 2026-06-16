import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Explore = () => {
  const { darkMode } = useContext(ThemeContext);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [view, setView] = useState("users"); // users | repos

  const fetchUsers = async (reset = false) => {
    setLoading(true);

    try {
      let searchQuery = query || "followers:>3000";

      if (location) {
        searchQuery += ` location:${location}`;
      }

      const res = await fetch(
        `https://api.github.com/search/users?q=${searchQuery}&per_page=9&page=${reset ? 1 : page}`,
      );

      const data = await res.json();

      if (reset) {
        setUsers(data.items || []);
        setPage(1);
      } else {
        setUsers((prev) => [...prev, ...(data.items || [])]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const refreshUsers = () => {
    // 🔥 new random experience each click
    const randomFollowers = Math.floor(Math.random() * 9000 + 1000);
    setQuery(`followers:>${randomFollowers}`);
    setUsers([]);
    setPage(1);

    setTimeout(() => fetchUsers(true), 300);
  };

  useEffect(() => {
    fetchUsers(true);
  }, []);

  return (
    <div
      className={`min-h-screen px-4 py-10 transition ${
        darkMode ? "bg-[#0f172a] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Explore Developers
        </h1>

        <p className="mt-2 opacity-80">
          Discover GitHub developers and trending profiles
        </p>

        {/* CONTROLS */}
        <div className="mt-6 grid md:grid-cols-3 gap-3">
          {/* SEARCH */}
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search users (e.g react, node, dev)"
            className={`p-3 rounded-lg border text-sm outline-none ${
              darkMode
                ? "bg-[#1e293b] border-gray-700 text-white"
                : "bg-white border-gray-300"
            }`}
          />

          {/* LOCATION FILTER */}
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Filter by location (e.g Nigeria)"
            className={`p-3 rounded-lg border text-sm outline-none ${
              darkMode
                ? "bg-[#1e293b] border-gray-700 text-white"
                : "bg-white border-gray-300"
            }`}
          />

          {/* BUTTONS */}
          <div className="flex gap-2">
            <button
              onClick={() => fetchUsers(true)}
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm"
            >
              Search
            </button>

            <button
              onClick={refreshUsers}
              className="flex-1 border rounded-lg text-sm hover:bg-gray-200 hover:text-white dark:hover:bg-gray-800"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* VIEW SWITCH */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setView("users")}
            className={`px-4 py-2 rounded-lg text-sm ${
              view === "users" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            Developers
          </button>

          <button
            onClick={() => setView("repos")}
            className={`px-4 py-2 rounded-lg text-sm ${
              view === "repos" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            Trending Repos
          </button>
        </div>

        {/* USERS GRID */}
        {view === "users" && (
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {loading &&
              users.length === 0 &&
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border animate-pulse space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                  <div className="h-3 bg-gray-400 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-400 rounded w-3/4"></div>
                </div>
              ))}

            {users.map((user) => (
              <div
                key={user.id}
                className={`p-5 rounded-xl border shadow-sm transition hover:scale-[1.02] ${
                  darkMode
                    ? "bg-[#1e293b] border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full"
                />

                <h3 className="mt-3 font-semibold">@{user.login}</h3>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 text-sm mt-3 inline-block"
                >
                  View Profile →
                </a>
              </div>
            ))}
          </div>
        )}

        {/* TRENDING REPOS (OPTIONAL SIMPLE VERSION) */}
        {view === "repos" && (
          <div className="mt-10 text-center opacity-70">
            Trending repositories feature coming next 🚀
          </div>
        )}

        {/* LOAD MORE */}
        {view === "users" && users.length > 0 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => {
                setPage((p) => p + 1);
                fetchUsers();
              }}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
