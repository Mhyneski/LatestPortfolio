import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto py-20">
        <SkillsText />
        <div className="mt-14 lg:block sm:hidden">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
