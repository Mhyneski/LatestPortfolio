import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-5 h-full justify-center md:text-left sm:text-center w-full min-w-0">
      <p className="lg:text-2xl md:text-lg sm:text-sm uppercase text-lightCyan font-bold md:tracking-[0.14em] sm:tracking-[0.08em] leading-7 break-words">
        Full-Stack Software Engineer
      </p>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-3xl text-orange font-bold uppercase leading-tight break-words [overflow-wrap:anywhere]">
        <span className="block">Mhyne Jhestine</span>
        <span className="block">Magno</span>
      </h1>
      <p className="md:text-xl sm:text-base md:leading-8 sm:leading-7 mt-2 text-white max-w-[620px] md:mx-0 sm:mx-auto">
        Next.js, TypeScript, and AWS serverless developer building cloud-based
        business web applications.
      </p>
    </div>
  );
};

export default HeroText;
