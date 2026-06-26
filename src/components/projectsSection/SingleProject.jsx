import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleProject = ({
  name,
  industry,
  role,
  description,
  architecture,
  technologies,
  align,
  image,
  link,
}) => {
  const hasLiveLink = link && link !== "#";

  return (
    <div
      className={`flex w-full sm:flex-col-reverse items-stretch gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div
        className={`flex flex-col justify-center gap-4 flex-1 min-w-0 ${
          align === "left" ? "md:text-right" : "md:text-left"
        } sm:text-center`}
      >
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-lightCyan">
            {industry} / {role}
          </p>
          <h2 className="md:text-3xl sm:text-2xl text-orange leading-tight mt-2">
            {name}
          </h2>
        </div>
        <p className="text-white text-lg leading-7">{description}</p>
        {architecture && (
          <div className="border-l-2 border-cyan bg-lightBrown/70 px-4 py-3 sm:text-left">
            <p className="text-lightOrange text-sm uppercase tracking-[0.14em] mb-2">
              How it is built
            </p>
            <p className="text-lightGrey leading-6">{architecture}</p>
          </div>
        )}
        <div
          className={`flex flex-wrap gap-2 ${
            align === "left" ? "md:justify-end" : "md:justify-start"
          } sm:justify-center`}
        >
          {technologies.map((technology) => (
            <span
              key={technology}
              className="border border-darkGrey bg-lightBrown px-3 py-1 text-sm text-white rounded-full"
            >
              {technology}
            </span>
          ))}
        </div>
        {hasLiveLink ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-center ${
              align === "left" ? "md:justify-end" : "md:justify-start"
            }`}
          >
            Visit site
            <BiSolidRightTopArrowCircle />
          </a>
        ) : (
          <p className="text-lightGrey text-sm">Private client project</p>
        )}
      </div>
      <div className="w-full max-w-[400px] md:min-h-[260px] sm:min-h-[220px] rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-500 relative border border-darkGrey flex-shrink-0 bg-lightBrown/70 sm:mx-auto">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {!hasLiveLink && (
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] flex items-center justify-center">
            <span className="border border-white/40 bg-black/80 px-4 py-2 text-sm text-white rounded-full">
              Preview hidden
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
