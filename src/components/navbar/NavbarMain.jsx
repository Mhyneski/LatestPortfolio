import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-darkBrown/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-4">
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <div className="flex items-center gap-3">
          <NavbarBtn />
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden rounded-md border border-white/10 p-2 text-lightGrey transition-colors hover:text-white"
          >
            {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
