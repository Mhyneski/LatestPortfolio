import React from "react";

const ProjectsText = () => {
  return (
    <div className="max-w-[760px]">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
        Selected Projects
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
        Systems built for operations, portals, and internal workflows.
      </h2>
      <p className="mt-5 text-lg leading-8 text-lightGrey">
        A mix of public and client-owned systems. Public projects link to live
        sites; private projects keep previews limited.
      </p>
    </div>
  );
};

export default ProjectsText;
