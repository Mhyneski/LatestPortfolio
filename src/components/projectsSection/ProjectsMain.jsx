import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { projects } from "../../data/projectsData";

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
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
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
