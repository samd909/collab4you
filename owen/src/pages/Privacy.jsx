import React from "react";
import { Title, Meta } from "react-head";

const Privacy = () => {
  return (
    <>
      <Title>Privacybeleid - Collab4You</Title>
      <Meta
        name="description"
        content="Lees ons privacybeleid over hoe we jouw gegevens beschermen bij Collab4You. Deze website is puur informatief en statisch."
      />

      <main className="bg-bg min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-dark text-center">Privacybeleid</h1>

          <p className="text-gray-700 leading-relaxed">
            Bij <span className="font-semibold text-accent">Collab4You</span> respecteren we je privacy. 
            Deze website is volledig statisch en puur informatief. Er worden geen persoonlijke gegevens van bezoekers verzameld of opgeslagen.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-dark">Gebruik van Google Search Console</h2>
            <p className="text-gray-700">
              We maken gebruik van Google Search Console om de indexering en SEO-prestaties van de website te monitoren. 
              Deze tool verzamelt geen persoonlijke gegevens van bezoekers, het helpt alleen bij het analyseren van de vindbaarheid van de website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-dark">Geen gegevensverzameling</h2>
            <p className="text-gray-700">
              Omdat er geen contactformulieren, inschrijvingen of andere interactieve functies aanwezig zijn, worden er geen persoonsgegevens verzameld of opgeslagen.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-dark">Vragen of opmerkingen</h2>
            <p className="text-gray-700">
              Voor vragen over privacy kun je een mail sturen naar{" "}
              <a
                href="mailto:info@collab4you.nl"
                className="text-accent font-semibold hover:underline"
              >
                info@collab4you.nl
              </a>.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Privacy;
