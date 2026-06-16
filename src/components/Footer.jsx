import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer
      className={`w-full mt-16 border-t transition-all duration-300 ${
        darkMode
          ? "bg-[#0f172a] border-gray-800 text-gray-300"
          : "bg-white border-gray-200 text-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold">
            Dev<span className="text-violet-600">Finder</span>
          </h2>

          <p className="text-sm mt-3 opacity-80 leading-relaxed">
            A modern GitHub discovery platform for exploring developers,
            repositories, and coding activity in real time.
          </p>

          <p className="text-xs mt-4 opacity-60">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        
        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-violet-600 transition" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-violet-600 transition" href="/explore">
                Explore
              </a>
            </li>
            <li>
              <a className="hover:text-violet-600 transition" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-violet-600 transition" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-sm font-semibold mb-3">Connect</h3>

          <p className="text-sm opacity-80 mb-4">
            Let’s connect and collaborate on developer tools and projects.
          </p>

          <div className="flex flex-col gap-3 text-sm">
            
            <a
              href="https://github.com/teecodes-dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-violet-600 transition"
            >
              <FaGithub />
              GitHub
            </a>

           
            <a
              href="https://ng.linkedin.com/in/adeyanju-ayotomide"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-violet-600 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            
            <a
              href="mailto:ayotomideadeyanju@gmail.com"
              className="flex items-center gap-2 hover:text-violet-600 transition"
            >
              <FaEnvelope />
              Email
            </a>
          </div>
        </div>
      </div>

      
      <div
        className={`text-center text-xs py-4 border-t ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        Designed by Adeyanju Ayotomide • Built for developers who love exploring
        GitHub
      </div>
    </footer>
  );
};

export default Footer;
