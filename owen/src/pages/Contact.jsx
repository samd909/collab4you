import React from "react";
import { Title, Meta } from "react-head";

const Contact = () => {
  return (
    <>
      <Title>Contact - Collab4You</Title>
      <Meta name="description" content="Contact information for Collab4You" />

      <main className="bg-bg min-h-screen py-12 px-6 overflow-auto md:overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <section className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-dark">Contact</h2>
            <p className="text-gray-700">
              Heb je vragen of wil je samenwerken? Neem gerust contact op met ons team.
            </p>
          </section>

          {/* Contact info grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark mb-2">Bedrijfsgegevens</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium text-dark">Bedrijfsnaam:</span>{" "}
                  Collab4You B.V.
                </li>
                <li>
                  <span className="font-medium text-dark">KVK-nummer:</span>{" "}
                  12345678
                </li>
                <li>
                  <span className="font-medium text-dark">BTW-nummer:</span>{" "}
                  NL001234567B01
                </li>
                <li>
                  <span className="font-medium text-dark">Adres:</span>{" "}
                  Innovatieplein 12, 1234 AB Amsterdam
                </li>
                <li>
                  <span className="font-medium text-dark">Website:</span>{" "}
                  <a
                    href="https://www.collab4you.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    www.Collab4You.nl
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark mb-2">Contactinformatie</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium text-dark">E-mail:</span>{" "}
                  <a
                    href="mailto:info@collab4you.nl"
                    className="text-accent hover:underline"
                  >
                    info@collab4you.nl
                  </a>
                </li>
                <li>
                  <span className="font-medium text-dark">Telefoon:</span>{" "}
                  06 14800072
                </li>
                <li>
                  <span className="font-medium text-dark">Openingstijden:</span>{" "}
                  Maandag – Vrijdag, 09:00 – 17:30
                </li>
                <li>
                  <span className="font-medium text-dark">Socials:</span>{" "}
                  <div className="flex gap-4 mt-1">
                    <a
                      href="#"
                      className="text-accent hover:text-dark transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-accent hover:text-dark transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-accent hover:text-dark transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Collab4You B.V. — Alle rechten voorbehouden.
          </p>
        </div>
      </main>
    </>
  );
};

export default Contact;
