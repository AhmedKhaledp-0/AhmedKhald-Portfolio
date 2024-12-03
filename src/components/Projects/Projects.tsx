import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../utils/icons";
import { projects } from "../../utils/constants";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-100 text-gray-700 text-sm font-medium px-2 py-1 rounded"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-self-end self-end gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                  >
                    <FontAwesomeIcon icon={icons.github} className="h-5 w-5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-secondary text-primary hover:text-secondary hover:bg-primary px-4 py-2 font-bold rounded-lg transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={icons.externalLink}
                      className="h-5 w-5"
                    />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
