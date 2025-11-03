import React from "react";
import { Title, Meta } from "react-head";

const Home = () => {
  return (
    <>
      <Title>Home - Collab4You</Title>
      <Meta name="description" content="This is the home page" />

      <main className="bg-bg min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <section className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-dark">
              Welcome to Collab4You
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Bringing creators, developers, and thinkers together — one project
              at a time.
            </p>
          </section>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-dark mb-2">
                  Card {item}
                </h3>
                <p className="text-gray-600">
                  Some example content for card {item}. Customize this section
                  with your own information.
                </p>
                <button className="btn mt-4 bg-accent text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
