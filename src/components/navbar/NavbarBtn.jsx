import React from "react";
import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <Link
      to="contact"
      smooth={true}
      spy={true}
      duration={500}
      offset={-90}
      className="cursor-pointer rounded-md border border-cyan/40 px-3 py-2 text-sm font-semibold text-cyan transition-colors hover:bg-cyan hover:text-black"
    >
      Contact
    </Link>
  );
};

export default NavbarBtn;
