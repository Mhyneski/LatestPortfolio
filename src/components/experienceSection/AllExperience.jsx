import React from "react";
import SingleExperience from "./SingleExperience";

const experiences = [
  {
    job: "Software Engineer",
    company: "O-KUN Frontier Innovations Inc.",
    date: "April 2025 - Present",
    responsibilities: [
      "Developed and maintained business web applications using Next.js, React, TypeScript, and AWS.",
      "Built responsive role-based interfaces for administrators, store users, technicians, and head-office managers.",
      "Implemented GraphQL APIs and AWS Lambda functions for ticketing, scheduling, maintenance, and user workflows.",
      "Integrated Cognito authentication, PostgreSQL data models, Prisma ORM, S3 file handling, and AWS serverless infrastructure.",
    ],
  },
  {
    job: "Freelance Developer / Intern",
    company: "Zhiyuan Enterprise Group Inc.",
    date: "January 2025 - March 2025",
    responsibilities: [
      "Developed an inventory management system tailored to company operational needs.",
      "Implemented database structures for efficient product tracking and inventory records.",
      "Integrated the system into the company workflow and supported users during adoption.",
      "Provided technical support, debugging, and system maintenance using a MERN stack foundation.",
    ],
  },
  {
    job: "Freelance Web Developer",
    company: "Self-Employed",
    date: "2023 - January 2025",
    responsibilities: [
      "Designed and developed web-based projects for various clients using full-stack web technologies.",
      "Built client-facing pages, database-backed features, and custom web application workflows.",
      "Handled requirement clarification, implementation, troubleshooting, and delivery support.",
      "Delivered responsive interfaces and practical business workflows with MERN stack tools.",
    ],
  },
  {
    job: "BS Information Technology",
    company: "STI Global City",
    date: "Education",
    responsibilities: [
      "Completed a Bachelor of Science in Information Technology.",
      "Built and presented full-stack academic and capstone project work.",
      "Strengthened software development fundamentals, database design, and application delivery practices.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 mt-12">
      {experiences.map((experience, index) => {
        return (
          <div key={experience.company}>
            <SingleExperience key={index} experience={experience} />
          </div>
        );
      })}
    </div>
  );
};

export default AllExperience;
