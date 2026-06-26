import React from "react";
import HeroPic from "./HeroPic";
import HeroText from "./HeroText";

const HeroMain = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-4 pb-20 pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_30%)]"></div>
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <HeroText />
        <HeroPic />
      </div>
    </section>
  );
};

export default HeroMain;
