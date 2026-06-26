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

const AllSkillsSM = () => {
  return (
    <div className="grid grid-cols-1 gap-4 my-12">
      {skills.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border border-darkGrey bg-lightBrown/70 px-4 py-5"
          >
            <item.icon className="text-5xl text-cyan" />
            <p className="text-center mt-4 text-white font-bold leading-tight">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
