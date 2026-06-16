import { NavLink } from "react-router-dom";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-violet-600 font-semibold"
      : "hover:text-violet-600 transition";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`relative sticky top-0 z-[9999] backdrop-blur-md border-b transition-colors duration-300
      ${
        darkMode
          ? "bg-slate-950/70 border-slate-800 text-white"
          : "bg-white/70 border-slate-200 text-slate-900"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <NavLink to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">
            Dev<span className="text-violet-600">Finder</span>
          </h1>
        </NavLink>

        
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/explore" className={linkClass}>
            Explore
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

       
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

          
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      
      {menuOpen && (
        <div
          className={`md:hidden fixed top-[72px] left-0 w-full px-6 py-4 flex flex-col gap-4 border-t z-[9999]
          ${
            darkMode
              ? "bg-slate-950 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <NavLink to="/" onClick={closeMenu} className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/explore" onClick={closeMenu} className={linkClass}>
            Explore
          </NavLink>

          <NavLink to="/about" onClick={closeMenu} className={linkClass}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu} className={linkClass}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
