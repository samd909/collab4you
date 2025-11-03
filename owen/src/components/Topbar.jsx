import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center"
        >
          <img
            src="/collab4you.svg"
            alt="Collab4You Logo"
            className="h-20 md:h-24 w-auto transition-transform duration-200 hover:scale-105"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            to="/services"
            className="text-lg font-semibold tracking-wide text-gray-800 hover:text-accent transition-colors relative group"
          >
            Diensten
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="text-lg font-semibold tracking-wide text-gray-800 hover:text-accent transition-colors relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
