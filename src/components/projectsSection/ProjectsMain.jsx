import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Inventory System with Analytics and Borrowing Module",
    year: "2025",
    align: "right",
    Image: "../../images/Inventory.jpg",
    link: "#",
  },
  {
    name: "Project estimation With Progress construction monitoring for Fox Construction",
    year: "2024",
    align: "left",
    Image: "../../images/foxconsstruction.png",
    link: "#",
  },
  {
    name: "Social media platform for the church of jesus christ of latter-day saints",
    year: "2023",
    align: "right",
    Image: "../../images/ldsmedia.png",
    link: "#",
  },
  {
    name: "Bike lock system using RFID",
    year: "2023",
    align: "left",
    Image: "../../images/bike.jpg",
    link: "#",
  },
  {
    name: "Barber shop management system",
    year: "2023",
    align: "right",
    Image: "../../images/sharp.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.Image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
