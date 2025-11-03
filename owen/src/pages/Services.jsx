import React from "react";
import { Title, Meta } from "react-head";

const services = [
  {
    title: "Collaboration Tools",
    description:
      "Streamline teamwork with shared projects, real-time editing, and built-in communication tools.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description:
      "Plan, organize, and execute projects efficiently with intuitive workflows and progress tracking.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-6a2 2 0 012-2h8M9 13h6m-9 4H5a2 2 0 01-2-2V7a2 2 0 012-2h5l2 2h8a2 2 0 012 2v1"
        />
      </svg>
    ),
  },
  {
    title: "Developer Integration",
    description:
      "Easily connect with your favorite platforms and APIs to enhance your development workflow.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 18l6-6-6-6M8 6l-6 6 6 6"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <>
      <Title>Diensten - Collab4You</Title>
      <Meta name="description" content="Explore the services offered by Collab4You" />

      <main className="bg-bg min-h-screen  px-6 overflow-auto md:overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <section className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-dark">Onze Diensten</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We provide simple and powerful tools that help teams collaborate,
              manage projects, and innovate together.
            </p>
          </section>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
