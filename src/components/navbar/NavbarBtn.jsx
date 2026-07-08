import { openResumeModal } from "../resumeSection/resumeModalEvents";

const NavbarBtn = () => {
  return (
    <button
      type="button"
      onClick={openResumeModal}
      className="cursor-pointer rounded-md border border-cyan/40 px-3 py-2 text-sm font-semibold text-cyan transition-colors hover:bg-cyan hover:text-black"
    >
      Resume
    </button>
  );
};

export default NavbarBtn;
