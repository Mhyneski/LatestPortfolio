import React from "react";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import AllExperience from "./AllExperience";

const ExperienceMain = () => {
  return (
    <section id="experience" className="border-b border-white/10 px-4 py-24">
      <div className="mx-auto max-w-[1180px]">
        <ExperienceText />
        <ExperienceTop />
        <AllExperience />
      </div>
    </section>
  );
};

export default ExperienceMain;
