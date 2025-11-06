import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer text-gray-900 w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm md:text-base space-y-2">
        {/* Links */}
        <div className="flex justify-center space-x-4 mb-1">
          <Link
            to="/privacy"
            className="text-blue-700 hover:text-blue-800 hover:underline text-sm md:text-base"
          >
            Privacybeleid
          </Link>
          <Link
            to="/tos"
            className="text-blue-700 hover:text-blue-800 hover:underline text-sm md:text-base"
          >
            Algemene Voorwaarden
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-800 text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Collab4You</span>. Alle rechten voorbehouden.
        </div>

        {/* Disclaimer */}
        <div className="text-gray-700 text-xs mt-1 md:mt-2">
          De informatie op deze website is uitsluitend bedoeld voor algemene informatie. Hoewel we streven naar
          correcte informatie, kan <span className="font-semibold">Collab4You</span> niet aansprakelijk worden gesteld
          voor fouten of onvolledigheden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
