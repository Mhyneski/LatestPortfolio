import React from "react";
import { Link } from 'react-scroll';

const AboutMeText = () => {
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear - 2023; // since 2023
  // professional work began April 2025; calculate full years
  const startProfessional = new Date(2025, 3); // April is month index 3
  const now = new Date();
  let professionalYears = now.getFullYear() - startProfessional.getFullYear();
  if (
    now.getMonth() < startProfessional.getMonth() &&
    now.getFullYear() === startProfessional.getFullYear() + professionalYears
  ) {
    professionalYears -= 1;
  }
  professionalYears = Math.max(1, professionalYears);

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About me</h2>
      <p className="text-white">
       Hi, I’m Mhyne Jhestine Magno, a software engineer with over {totalYears} years of experience in software development, including {professionalYears} {professionalYears === 1 ? 'year' : 'years'} of professional industry experience and freelance projects.
      </p>
      <Link to="projects" smooth={true} spy={true} duration={500} offset={-130} className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Projects</Link>
    </div>
  );
};

export default AboutMeText;
