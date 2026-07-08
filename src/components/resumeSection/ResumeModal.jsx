import { useEffect, useState } from "react";
import { HiDownload, HiExternalLink, HiX } from "react-icons/hi";
import { RESUME_FILE, RESUME_MODAL_OPEN_EVENT } from "./resumeModalEvents";

const ResumeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);

    window.addEventListener(RESUME_MODAL_OPEN_EVENT, handleOpen);

    return () => {
      window.removeEventListener(RESUME_MODAL_OPEN_EVENT, handleOpen);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-viewer-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 py-4 backdrop-blur-sm md:px-6"
    >
      <div className="flex h-full w-full max-w-[1100px] flex-col overflow-hidden rounded-xl border border-white/10 bg-darkBrown shadow-cyanMdShadow">
        <div className="border-b border-white/10 bg-lightBrown px-4 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                Resume
              </p>
              <h2 id="resume-viewer-title" className="mt-1 text-xl font-bold text-white">
                Mhyne Jhestine Magno
              </h2>
            </div>
            <button
              type="button"
              aria-label="Close resume viewer"
              onClick={() => setIsOpen(false)}
              className="inline-flex shrink-0 items-center justify-center rounded-md border border-white/15 p-2 text-lightGrey transition-colors hover:border-cyan hover:text-cyan"
            >
              <HiX size={20} />
            </button>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2 min-[390px]:grid-cols-2 md:flex md:flex-wrap md:items-center">
            <a
              href={RESUME_FILE}
              download
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan px-3 py-2 text-sm font-bold text-black transition-colors hover:bg-lightCyan"
            >
              <HiDownload size={18} />
              Download PDF
            </a>
            <a
              href={RESUME_FILE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm font-bold text-white transition-colors hover:border-cyan hover:text-cyan"
            >
              <HiExternalLink size={18} />
              Open Tab
            </a>
          </div>
        </div>
        <div className="min-h-0 flex-1 bg-black">
          <iframe
            title="Mhyne Jhestine Magno resume"
            src={`${RESUME_FILE}#toolbar=1&navpanes=0`}
            className="h-full min-h-[70vh] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
