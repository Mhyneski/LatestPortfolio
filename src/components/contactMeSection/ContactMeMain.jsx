import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto grid max-w-[1180px] gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:grid-cols-[1fr_0.85fr]">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </section>
  );
};

export default ContactMeMain;
