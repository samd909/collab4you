import React from "react";
import { Title, Meta } from "react-head";

const Terms = () => {
  return (
    <>
      <Title>Algemene Voorwaarden - Collab4You</Title>
      <Meta
        name="description"
        content="Lees de algemene voorwaarden van Collab4You voor onze diensten en verantwoordelijkheden."
      />

      <main className="bg-bg min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-dark text-center">Algemene Voorwaarden</h1>
          <p className="text-gray-700 leading-relaxed">
            Door gebruik te maken van onze diensten gaat u akkoord met onderstaande voorwaarden:
          </p>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-dark">Diensten</h2>
            <p className="text-gray-700">
              Wij bieden Meta Ads campagnes aan. De uitvoering wordt afgestemd op uw wensen, maar resultaten kunnen niet gegarandeerd worden.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-dark">Betaling</h2>
            <p className="text-gray-700">
              Betaling geschiedt vooraf of volgens afgesproken betalingsvoorwaarden.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-dark">Aansprakelijkheid</h2>
            <p className="text-gray-700">
              Collab4You is niet aansprakelijk voor indirecte schade of gemiste omzet.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Terms;
