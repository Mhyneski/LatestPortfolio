import React from "react";
import { RiReactjsLine } from "react-icons/ri";

const HeroPic = () => {
  return (
    <div className="h-full flex items-center justify-center relative">
      <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-orange/70 bg-lightBrown shadow-cyanShadow">
        <img
          src="../../images/Mhynedp.jpg"
          alt="Profile of Mhyne Jhestine Magno"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>
      </div>
      <div className="absolute inset-0 -z-10 md:flex sm:hidden justify-center items-center overflow-hidden">
        <RiReactjsLine className="max-h-[560px] md:h-[90%] sm:h-[120%] w-auto text-cyan/30 blur-sm animate-[spin_20s_linear_infinite] max-w-full" />
      </div>
    </div>
  );
};

export default HeroPic;
