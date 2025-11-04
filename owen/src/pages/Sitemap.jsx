import React from "react";
import { Title, Meta } from "react-head";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Diensten", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Privacybeleid", path: "/privacy" },
    { name: "Algemene Voorwaarden", path: "/tos" },
  ];

  return (
    <>
      <Title>Sitemap - Collab4You</Title>
      <Meta name="description" content="Sitemap van de Collab4You website" />

      <main className="bg-bg min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-dark text-center">Sitemap</h1>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {pages.map((page, i) => (
              <li key={i}>
                <Link to={page.path} className="text-accent hover:underline">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Sitemap;
