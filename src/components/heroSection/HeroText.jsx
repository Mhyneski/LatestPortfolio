import { Link } from "react-scroll";
import { openResumeModal } from "../resumeSection/resumeModalEvents";

const stats = [
  { value: "2+", label: "Years building software" },
  { value: "AWS", label: "Serverless applications" },
  { value: "Full-stack", label: "Product delivery" },
];

const HeroText = () => {
  return (
    <div className="min-w-0">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan">
        Lead Software Engineer
      </p>
      <h1 className="mt-5 max-w-[760px] text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
        Building reliable web systems for business operations.
      </h1>
      <p className="mt-6 max-w-[680px] text-lg leading-8 text-lightGrey">
        I am Mhyne Jhestine Magno, a Dubai-based Lead Software Engineer
        focused on Next.js, TypeScript, AWS serverless, GraphQL APIs,
        PostgreSQL, Prisma, and role-based internal platforms.
      </p>
      <div className="mt-8 flex flex-col gap-3 md:flex-row">
        <Link
          to="projects"
          smooth={true}
          spy={true}
          duration={500}
          offset={-90}
          className="w-full cursor-pointer rounded-md bg-cyan px-5 py-3 text-center text-sm font-bold text-black transition-colors hover:bg-lightCyan md:w-auto"
        >
          View Projects
        </Link>
        <button
          type="button"
          onClick={openResumeModal}
          className="w-full cursor-pointer rounded-md border border-cyan/40 px-5 py-3 text-center text-sm font-bold text-cyan transition-colors hover:bg-cyan hover:text-black md:w-auto"
        >
          View Resume
        </button>
        <Link
          to="contact"
          smooth={true}
          spy={true}
          duration={500}
          offset={-90}
          className="w-full cursor-pointer rounded-md border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:border-cyan hover:text-cyan md:w-auto"
        >
          Contact Me
        </Link>
      </div>
      <div className="mt-12 grid max-w-[760px] grid-cols-1 gap-3 md:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4 sm:min-h-0">
            <p className="text-lg font-bold text-white md:text-xl">{item.value}</p>
            <p className="mt-1 text-xs leading-5 text-lightGrey md:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroText;
