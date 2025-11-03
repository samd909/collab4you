import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bg text-gray-900 mt-auto w-full md:fixed md:bottom-0 md:left-0 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm md:text-base">
        © {new Date().getFullYear()} <span className="font-semibold">Collab4You</span>. Alle rechten voorbehouden.
      </div>
    </footer>
  );
};

export default Footer;
