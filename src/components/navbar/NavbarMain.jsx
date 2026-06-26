import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen]=useState(false);
  const toggleMenu = ()=> {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className="fixed inset-x-0 z-20 mt-2 px-3">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center md:p-6 sm:p-4 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavbarLogo />
        {/* links hidden by default, shown on large screens or when menu is open */}
        <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
        <button className="lg:hidden text-2xl p-3 border border-orange rounded-full text-white" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
