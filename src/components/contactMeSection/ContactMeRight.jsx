import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <aside className="rounded-xl border border-white/10 bg-black/25 p-6">
      <h3 className="text-lg font-bold text-white">Contact details</h3>
      <p className="mt-2 text-sm leading-6 text-lightGrey">
        Best for software engineering roles, web systems, and cloud application
        collaboration.
      </p>
      <div className="mt-8">
        <ContactInfo />
      </div>
      <div className="mt-8">
        <ContactSocial />
      </div>
    </aside>
  );
};

export default ContactMeRight;
