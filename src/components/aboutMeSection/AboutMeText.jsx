import React from "react";

const AboutMeText = () => {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
        About
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
        Full-stack engineering for internal tools and cloud platforms.
      </h2>
      <p className="mt-6 text-lg leading-8 text-lightGrey">
        I have 2 years of software development experience across full-time
        work, freelance projects, and internship work. I build cloud-based
        business applications with Next.js, React, TypeScript, AWS,
        PostgreSQL, GraphQL APIs, Lambda functions, authentication flows, file
        uploads, inventory systems, and internal operations platforms.
      </p>
    </div>
  );
};

export default AboutMeText;
