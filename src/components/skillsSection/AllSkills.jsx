import React from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Python", "FastAPI", "GraphQL", "REST APIs", "Zod"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS Amplify Gen 2", "Lambda", "Cognito", "AppSync", "S3", "CDK"],
  },
  {
    title: "Data & Quality",
    skills: ["PostgreSQL", "Prisma ORM", "DynamoDB", "MongoDB", "Supabase", "Vitest"],
  },
];

const AllSkills = () => {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {skillGroups.map((group) => (
        <div key={group.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="text-base font-bold text-white">{group.title}</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/10 bg-black/25 px-3 py-1.5 text-sm text-lightGrey"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllSkills;
