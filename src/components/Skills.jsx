import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";

const Skills = () => {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-12">
      {" "}
      {/* Removed top margin and adjusted padding */}
      {/* Moved Skills title to top of the section */}
      <h1 className="text-center text-4xl mb-8">Skills</h1>{" "}
      {/* Reduced margin-bottom for title */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-[#F06529]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-[#2965f1]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-[#f0db4f]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <GrReactjs className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoNodejs className="text-7xl text-[#68a063]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-[#4DB33D]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPhp className="text-7xl text-[#787CB5]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-7xl text-[#F1502F]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-[#ffff]" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
