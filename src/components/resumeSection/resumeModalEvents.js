export const RESUME_FILE = "/Mhyne-Jhestine-Magno-Resume.pdf";

export const RESUME_MODAL_OPEN_EVENT = "resume-modal:open";

export const openResumeModal = () => {
  window.dispatchEvent(new CustomEvent(RESUME_MODAL_OPEN_EVENT));
};
