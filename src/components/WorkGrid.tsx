// src/components/WorkGrid.tsx
import React from "react";

// Example project data – edit this array to customize the displayed work items
const projects = [
  {
    title: "Project Alpha",
    description: "A full‑stack web app that blends AI with elegant UI.",
    image: "/assets/project-alpha.jpg", // place image under src/assets
    link: "#",
  },
  {
    title: "Project Beta",
    description: "Design system for deep thinkers, built with React + Vite.",
    image: "/assets/project-beta.jpg",
    link: "#",
  },
  // Add more projects here
];

export const WorkGrid: React.FC = () => {
  return (
    <section
      id="work"
      className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-32"
    >
      <h2
        className="text-4xl sm:text-5xl font-medium text-white mb-12 text-center"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <a
            key={i}
            href={proj.link}
            className="group block rounded-xl overflow-hidden shadow-lg bg-[hsl(201,100%,13%)] hover:shadow-2xl transition-shadow"
          >
            <div className="relative aspect-w-16 aspect-h-9">
              <img
                src={proj.image}
                alt={proj.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-[hsl(240,4%,66%)] text-sm">
                {proj.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
