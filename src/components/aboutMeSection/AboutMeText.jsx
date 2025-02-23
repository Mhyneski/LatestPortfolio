import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About me</h2>
      <p className="text-white">
        Hi, I’m Mhyne jhestine Magno, a passionate full-stack web developer
        specializing in MERN stack development. Beyond
        development, I’m open for commissions on web-based projects, whether
        it’s crafting a new web app, improving an existing one, or consulting on
        tech solutions. Let’s build something amazing together!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Projects</button>
    </div>
  );
};

export default AboutMeText;
