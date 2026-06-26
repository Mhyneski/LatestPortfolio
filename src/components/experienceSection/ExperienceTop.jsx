import React from "react";

const items = [
  { label: "Experience", value: "2 years" },
  { label: "Current location", value: "Dubai, UAE" },
  { label: "Primary focus", value: "Full-stack cloud apps" },
];

const ExperienceTop = () => {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-lightGrey">{item.label}</p>
          <p className="mt-2 text-xl font-bold text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTop;
