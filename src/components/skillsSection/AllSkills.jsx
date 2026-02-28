import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Next.js",
    icon: SiNextdotjs,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "Firebase",
    icon: IoLogoFirebase,
  },
  {
    skill: "NodeJS",
    icon: RiNodejsLine,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Chakra UI",
    icon: SiChakraui,
  },
  {
    skill: "FastAPI",
    icon: SiFastapi,
  },
  {
    skill: "Python",
    icon: SiPython,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1300px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
