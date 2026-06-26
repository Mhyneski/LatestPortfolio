import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { projects } from "../../data/projectsData";

const ProjectsMain = () => {
  return (
    <section id="projects" className="border-b border-white/10 px-4 py-24">
      <div className="mx-auto max-w-[1180px]">
        <ProjectsText />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((item) => {
            return (
              <SingleProject
                key={item.name}
                name={item.name}
                industry={item.industry}
                role={item.role}
                description={item.description}
                architecture={item.architecture}
                technologies={item.technologies}
                image={item.image}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMain;
