import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300
      ${
        darkMode
          ? "bg-slate-950/70 border-slate-800 text-white"
          : "bg-white/70 border-slate-200 text-slate-900"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-3xl"></span>

          <h1 className="text-2xl font-bold">
            Dev<span className="text-violet-600">Finder</span>
          </h1>
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-violet-600 font-semibold"
                : "hover:text-violet-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? "text-violet-600 font-semibold"
                : "hover:text-violet-600 transition"
            }
          >
            Explore
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-violet-600 font-semibold"
                : "hover:text-violet-600 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-violet-600 font-semibold"
                : "hover:text-violet-600 transition"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition hover:scale-105
            ${darkMode ? "border-slate-700" : "border-slate-300"}`}
          >
            <FaGithub size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
