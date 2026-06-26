import React from "react";

const SingleExperience = ({ experience }) => {
  return (
    <div className="h-full border border-darkGrey bg-lightBrown/70 rounded-xl p-6">
      <p className="font-bold text-cyan text-xl">{experience.job}</p>
      <p className="text-orange mt-1">{experience.company}</p>
      <p className="text-lightGrey mt-1">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white space-y-2 leading-7">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleExperience;
