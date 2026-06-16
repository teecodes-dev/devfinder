import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import Hero from "../components/Hero";
import UserProfile from "../components/UserProfile";

import { getGithubUser } from "../services/githubApi";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setLoading(true);

    try {
      // ✅ 1. Get user from your API file
      const userData = await getGithubUser(query);

      // ✅ 2. Get repos directly from GitHub (because API file doesn't include repos yet)
      const repoRes = await fetch(userData.repos_url);
      const repoData = await repoRes.json();

      setUser(userData);
      setRepos(repoData);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);

      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen pb-5 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-[#0f172a] to-[#020617] text-white"
          : "bg-gradient-to-b from-gray-50 to-white text-gray-900"
      }`}
    >
      
      <Hero onSearch={handleSearch} />

      
      <UserProfile user={user} repos={repos} loading={loading} />
    </div>
  );
};

export default Home;
