import React from "react";
import ContactMeForm from "./ContactMeForm";

const ContactMeLeft = () => {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
        Contact
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
        Let us talk about your next system.
      </h2>
      <p className="mt-5 max-w-[620px] text-lg leading-8 text-lightGrey">
        Reach out for full-stack web development, cloud application work, or
        collaboration opportunities. I am currently based in Dubai.
      </p>
      <div className="mt-8">
        <ContactMeForm />
      </div>
    </div>
  );
};

export default ContactMeLeft;
