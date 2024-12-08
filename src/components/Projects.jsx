import React from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section className="pt-20 px-4" id="projects">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Projects</h2>

      {/* Adjusting the grid layout for different screen sizes */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Hover effect and text display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-black opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 p-4">
              <h3 className="mb-2 text-xl text-center">{project.name}</h3>
              <p className="mb-4 text-sm text-center">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>View on Github</span>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
