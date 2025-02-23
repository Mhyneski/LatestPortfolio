import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Capstone Project Developer",
    company: "STI Global City",
    date: "2023",
    responsibilities: [
      "Developed a full-stack web application as part of the capstone project.",
      "Designed and implemented key system features using the MERN stack.",
      "Collaborated with teammates to meet project requirements and deadlines.",
      "Presented and defended the project to faculty and evaluators.",
    ],
  },
  {
    job: "Freelance Web Developer",
    company: "Self-Employed",
    date: "2024",
    responsibilities: [
      "Designed and developed web-based projects for various clients.",
      "Worked with modern web technologies, including React.js and Node.js.",
      "Customized and optimized applications for client needs.",
      "Managed project timelines and delivered high-quality solutions.",
    ],
  },
  {
    job: "Freelance Developer / Intern",
    company: "Zhiyuan Company",
    date: "2025",
    responsibilities: [
      "Developed an inventory management system tailored to company needs.",
      "Implemented database structures for efficient product tracking.",
      "Ensured seamless integration of the system into their workflow.",
      "Provided technical support and system maintenance.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row md:gap-10 sm:flex-col sm:gap-0 items-center justify-center ">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
