import React from "react";
import { Title, Meta } from "react-head";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Title>Home - Collab4You</Title>
      <Meta rel="canonical" href="https://collab4you.nl" />
      <Meta
        name="description"
        content="Bij Collab4You helpen we bedrijven groeien via gerichte Meta Ads campagnes op Facebook en Instagram."
      />

      <main className="bg-transparent min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16 text-center">
          {/* Intro section */}
          <section className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Welkom bij Collab4You
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Bij <span className="font-semibold text-blue-700">COLLAB4YOU</span> helpen we bedrijven om zichtbaar te worden bij de juiste doelgroep via krachtige Meta Ads op Facebook en Instagram.  
              We creëren en beheren effectieve advertentiecampagnes die niet alleen bereik vergroten, maar ook échte resultaten opleveren — meer klanten, meer omzet en meer merkbekendheid.
            </p>
            <Link
              to="/services"
              className="inline-block mt-4 bg-blue-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800 transition"
            >
              Ontdek onze diensten
            </Link>
          </section>

          {/* Visual cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Meta Ads Expertise",
                desc: "Wij weten hoe je jouw merk zichtbaar maakt op Facebook en Instagram voor maximale impact.",
              },
              {
                title: "Doelgerichte Strategie",
                desc: "Met data en inzicht bouwen we campagnes die precies de juiste mensen bereiken.",
              },
              {
                title: "Resultaatgericht",
                desc: "Wij meten, optimaliseren en schalen jouw campagnes voor blijvende groei.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            ))}
          </section>

        </div>
      </main>
    </>
  );
};

export default Home;
