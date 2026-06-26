import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";

const SkillsMain = () => {
  return (
    <section id="skills" className="border-b border-white/10 px-4 py-24">
      <div className="mx-auto max-w-[1180px]">
        <SkillsText />
        <AllSkills />
      </div>
    </section>
  );
};

export default SkillsMain;
