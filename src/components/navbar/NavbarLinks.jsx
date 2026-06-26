import React from "react";
import { Link } from "react-scroll";

const links = [
  { links: "About", section: "about" },
  { links: "Skills", section: "skills" },
  { links: "Experience", section: "experience" },
  { links: "Projects", section: "projects" },
  { links: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="absolute left-4 right-4 top-[72px] rounded-lg border border-white/10 bg-brown p-4 shadow-2xl lg:static lg:flex lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
      {links.map((link) => {
        return (
          <li key={link.section}>
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-90}
              className="block cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-lightGrey transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.links}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
