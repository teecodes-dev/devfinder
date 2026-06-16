import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const StatsCard = ({ label, value, icon }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 rounded-xl border shadow-sm transition flex flex-col gap-2
      ${
        darkMode
          ? "bg-[#1e293b] border-gray-800 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      {/* Top row: icon + label */}
      <div className="flex items-center gap-2 text-sm opacity-80">
        {icon && <span className="text-lg">{icon}</span>}
        <span>{label}</span>
      </div>

      {/* Value */}
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
};

export default StatsCard;
