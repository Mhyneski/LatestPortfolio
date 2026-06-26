import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleProject = ({
  name,
  industry,
  role,
  description,
  architecture,
  technologies,
  image,
  link,
}) => {
  const hasLiveLink = link && link !== "#";

  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-black">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
        />
        {!hasLiveLink && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-[2px]">
            <span className="rounded-md border border-white/15 bg-black/75 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lightGrey">
              Private
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
          {industry} / {role}
        </p>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-tight text-white">{name}</h3>
          {hasLiveLink && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${name}`}
              className="mt-1 shrink-0 text-cyan transition-colors hover:text-white"
            >
              <BiSolidRightTopArrowCircle size={24} />
            </a>
          )}
        </div>
        <p className="mt-4 leading-7 text-lightGrey">{description}</p>
        {architecture && (
          <p className="mt-4 border-l border-cyan/40 pl-4 text-sm leading-6 text-lightGrey">
            {architecture}
          </p>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.slice(0, 7).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-black/25 px-2.5 py-1 text-xs text-lightGrey"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
