import React from "react";

const SingleExperience = ({ experience }) => {
  return (
    <article className="grid gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[260px_1fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
          {experience.date}
        </p>
        <h3 className="mt-3 text-xl font-bold text-white">{experience.job}</h3>
        <p className="mt-1 text-lightGrey">{experience.company}</p>
      </div>
      <ul className="space-y-3 text-lightGrey">
        {experience.responsibilities.map((resp) => {
          return (
            <li key={resp} className="border-l border-white/10 pl-4 leading-7">
              {resp}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default SingleExperience;
