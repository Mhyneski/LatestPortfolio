import React from "react";
import AboutMeText from "./AboutMeText";

const capabilities = [
  "Role-based dashboards",
  "AWS serverless workflows",
  "GraphQL and REST APIs",
  "PostgreSQL and Prisma",
];

const AboutMeMain = () => {
  return (
    <section id="about" className="border-b border-white/10 px-4 py-24">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <AboutMeText />
        <div className="grid gap-3 md:grid-cols-2">
          {capabilities.map((capability) => (
            <div
              key={capability}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-sm font-semibold text-white">{capability}</p>
              <p className="mt-3 text-sm leading-6 text-lightGrey">
                Production-focused implementation with maintainability in mind.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMeMain;
