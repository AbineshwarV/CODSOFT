import { HERO } from "../constants";
import abiImg from "../assets/abi.jpeg";
import { FaDownload, FaEnvelope } from "react-icons/fa"; // Import Font Awesome icons

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center mt-16">
      {/* Left section: Text content */}
      <div className="w-full md:w-1/2 px-4">
        <h2 className="my-8 p-2 text-3xl font-bold bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-stone-900 via-zinc-200 to-neutral-200 bg-clip-text text-transparent md:text-4xl lg:text-6xl">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-4 p-2 text-xl">{HERO.description}</p>

        {/* Buttons: Download Resume and Contact Us */}
        <div className="flex flex-col sm:flex-row sm:justify-start gap-6 mt-8 px-3">
          {/* Resume Button */}
          <a
            href="/resume.pdf" // Replace with your actual resume link
            download="resume.pdf"
            className="border border-stone-50/30 bg-black/20 text-white text-lg font-medium py-3 px-8 rounded-lg hover:bg-black/30 hover:border-stone-50 transition duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            {/* Download Icon */}
            <FaDownload className="h-6 w-6 ml-[-4px]" /> {/* Moved left */}
            Download Resume
          </a>

          {/* Contact Us Button */}
          <a
            href="mailto:abineshwarv01@gmail.com" // Replace with your actual email or contact form link
            className="border border-stone-50/30 bg-black/20 text-white text-lg font-medium py-3 px-8 rounded-lg hover:bg-black/30 hover:border-stone-50 transition duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            {/* Mail Icon */}
            <FaEnvelope className="h-6 w-6 ml-[-4px]" /> {/* Moved left */}
            Contact Us
          </a>
        </div>
      </div>

      {/* Right section: Image */}
      <div className="w-full md:w-1/2 lg:p-8 mt-12 md:mt-0 flex justify-center">
        <img
          src={abiImg}
          width={550}
          alt="abi"
          className="rounded-3xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
