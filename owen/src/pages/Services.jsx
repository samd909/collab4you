import React from "react";
import { Title, Meta } from "react-head";

const Services = () => {
  return (
    <>
      <Title>Diensten - Collab4You</Title>
      <Meta
        name="description"
        content="Ontdek hoe Collab4You bedrijven helpt groeien via op maat gemaakte Meta Ads strategieën."
      />

      <main className="bg-bg min-h-screen py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <section className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-dark">Onze Diensten</h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Met <span className="font-semibold text-accent">COLLAB4YOU</span> haal je niet zomaar een adverteerder in huis, maar een partner die meedenkt.  
              Onze aanpak is volledig op maat — van strategie tot groei.
            </p>
          </section>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🎯",
                title: "Strategie & Doelgroepanalyse",
                desc: "We onderzoeken waar jouw ideale klant zich bevindt en hoe we hen het beste kunnen bereiken.",
              },
              {
                icon: "✍️",
                title: "Advertentiecreatie",
                desc: "Van pakkende visuals tot overtuigende teksten — wij zorgen dat klikken klanten worden.",
              },
              {
                icon: "📊",
                title: "Campagnebeheer & Optimalisatie",
                desc: "We volgen prestaties op de voet en sturen continu bij voor het beste rendement.",
              },
              {
                icon: "📈",
                title: "Rapportage & Groei",
                desc: "Heldere resultaten en concrete stappen om verder te schalen en je merk te laten groeien.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-10">
            <p className="text-gray-700 mb-4">
              Klaar om jouw bedrijf te laten groeien met Meta Ads?
            </p>
            <a
              href="mailto:info@collab4you.nl"
              className="bg-accent text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
