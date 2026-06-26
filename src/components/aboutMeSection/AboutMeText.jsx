import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center max-w-[880px] w-full min-w-0">
      <h2 className="md:text-6xl sm:text-4xl text-cyan mb-10">About me</h2>
      <p className="text-white text-lg leading-8">
        Hi, I am Mhyne Jhestine Magno, a full-stack software engineer based in
        Dubai with 2 years of software development experience across full-time
        work, freelance projects, and internship work. I build cloud-based
        business web applications with Next.js, React, TypeScript, AWS,
        PostgreSQL, GraphQL APIs, Lambda functions, authentication flows, file
        uploads, inventory systems, and internal operations platforms.
      </p>
      <Link
        to="projects"
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
      >
        My Projects
      </Link>
    </div>
  );
};

export default AboutMeText;
