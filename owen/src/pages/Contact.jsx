import React from "react";
import { Title, Meta } from "react-head";

const Contact = () => {
  return (
    <>
      <Title>Contact - Collab4You</Title>
      <Meta rel="canonical" href="https://collab4you.nl/contact" />
      <Meta name="description" content="Contact information for Collab4You" />

      <main className="bg-bg min-h-screen py-12 px-6 overflow-auto md:overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <section className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-dark">Contact</h2>
            <p className="text-gray-700">
              Heb je vragen of wil je samenwerken? Neem gerust contact op met ons op.
            </p>
          </section>

          {/* Contact info grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark mb-2">Bedrijfsgegevens</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium text-dark">Bedrijfsnaam:</span>{" "}
                  Collab4You.
                </li>
                <li>
                  <span className="font-medium text-dark">KVK-nummer:</span>{" "}
                  98612808
                </li>
                <li>
                  <span className="font-medium text-dark">BTW-nummer:</span>{" "}
                  xx--xx--xx--xx
                </li>
                <li>
                  <span className="font-medium text-dark">Adres:</span>{" "}
                  Reuver, Keulseweg 139
                </li>
                <li>
                  <span className="font-medium text-dark">Website:</span>{" "}
                  <a
                    href="https://www.collab4you.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    www.collab4you.nl
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
                  <span className="font-medium text-dark">Socials:</span>{" "}
                  <div className="flex gap-4 mt-1">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/owen-peulen-a33b54387/"
                      className="text-accent hover:text-dark transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/collab4you.nl"
                      className="text-accent hover:text-dark transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/Collab4you/61583247330200/"
                      className="text-accent hover:text-dark transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Contact;
