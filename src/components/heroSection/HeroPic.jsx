import React from "react";

const HeroPic = () => {
  return (
    <div className="mx-auto w-full max-w-[380px] lg:ml-auto">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl">
        <div className="overflow-hidden rounded-xl border border-white/10">
          <img
            src="../../images/Mhynedp.jpg"
            alt="Profile of Mhyne Jhestine Magno"
            className="aspect-[4/5] w-full object-cover grayscale"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 pt-3 text-sm">
          <div className="rounded-lg bg-black/30 p-3">
            <p className="text-lightGrey">Location</p>
            <p className="mt-1 font-semibold text-white">Dubai, UAE</p>
          </div>
          <div className="rounded-lg bg-black/30 p-3">
            <p className="text-lightGrey">Focus</p>
            <p className="mt-1 font-semibold text-white">Cloud apps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPic;
