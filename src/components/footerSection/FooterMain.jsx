import React from "react";

const FooterMain = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-3 text-sm text-lightGrey md:flex-row md:items-center md:justify-between">
        <p className="font-semibold text-white">Mhyne Jhestine Magno</p>
        <p>Copyright {year}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterMain;
