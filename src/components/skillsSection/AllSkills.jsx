import React from "react";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAmazoncognito,
  SiAmazonrds,
  SiAmazons3,
  SiAmazonwebservices,
  SiAwslambda,
  SiFastapi,
  SiGraphql,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReactquery,
  SiShadcnui,
  SiTypescript,
  SiVitest,
  SiZod,
} from "react-icons/si";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "Next.js",
    icon: SiNextdotjs,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "AWS",
    icon: SiAmazonwebservices,
  },
  {
    skill: "Lambda",
    icon: SiAwslambda,
  },
  {
    skill: "GraphQL",
    icon: SiGraphql,
  },
  {
    skill: "Cognito",
    icon: SiAmazoncognito,
  },
  {
    skill: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    skill: "Prisma",
    icon: SiPrisma,
  },
  {
    skill: "S3",
    icon: SiAmazons3,
  },
  {
    skill: "RDS",
    icon: SiAmazonrds,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "shadcn/ui",
    icon: SiShadcnui,
  },
  {
    skill: "TanStack Query",
    icon: SiReactquery,
  },
  {
    skill: "FastAPI",
    icon: SiFastapi,
  },
  {
    skill: "Zod",
    icon: SiZod,
  },
  {
    skill: "Vitest",
    icon: SiVitest,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 max-w-[1100px] mx-auto">
        {skills.map((item, index) => {
          return (
            <div key={index}>
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
