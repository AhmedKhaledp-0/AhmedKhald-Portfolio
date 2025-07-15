import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../utils/icons";
import { projects } from "../../utils/constants";
import { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [modal, setModal] = useState<{
    imgHigh: string;
    title: string;
    description: string;
    role?: string;
  } | null>(null);

  const openModal = (project: (typeof projects)[0]) => {
    setModal({
      imgHigh: project.imgHigh,
      title: project.title,
      description: project.description,
      role: project.role,
    });
  };

  const closeModal = () => {
    setModal(null);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };

      document.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [modal]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <section
      id="projects"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-zinc-800/80  rounded-full px-4 py-2 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-800 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-200 bg-clip-text text-transparent">
              My
            </span>{" "}
            <span className="text-zinc-700 dark:text-zinc-300">Projects</span>
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Showcasing my latest work in web development and interactive
            experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/60 dark:bg-zinc-800/60  rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-200/50 dark:border-zinc-700/50 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="h-48 lg:h-56 overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                  onClick={() => openModal(project)}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-3 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Role Badge */}
                  {project.role && (
                    <div className="mb-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
                        <FontAwesomeIcon
                          icon={icons.code}
                          className="h-3 w-3 mr-1.5"
                        />
                        {project.role}
                      </span>
                    </div>
                  )}

                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 items-center justify-between mt-auto">
                  {project.github === "NA" ? (
                    <span className="text-zinc-500 dark:text-zinc-400 italic flex items-center gap-2 text-sm">
                      <FontAwesomeIcon
                        icon={icons.github}
                        className="h-4 w-4"
                      />
                      Private Repository
                    </span>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 font-medium"
                    >
                      <FontAwesomeIcon
                        icon={icons.github}
                        className="h-4 w-4"
                      />
                      Code
                    </a>
                  )}

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-zinc-900 to-zinc-700 hover:from-zinc-800 hover:to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 dark:hover:from-zinc-200 dark:hover:to-zinc-400 text-white dark:text-zinc-900 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <FontAwesomeIcon
                      icon={icons.externalLink}
                      className="h-4 w-4"
                    />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-zinc-300 dark:to-zinc-600"></div>
            <span className="text-sm font-medium">
              More projects coming soon
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-zinc-300 dark:to-zinc-600"></div>
          </div>
        </div>
      </div>
      {/* Image Modal */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors duration-200 flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-full bg-zinc-50 dark:bg-zinc-700/50"
            >
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
              Close
            </button>

            {/* Modal Content */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {/* Image */}
              <div className="relative min-h-[300px]">
                <img
                  src={modal.imgHigh}
                  alt={modal.title}
                  className="w-full h-auto max-h-[60vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-0 md:mb-3">
                    <h3 className="text-xl md:text-4xl font-bold text-white">
                      {modal.title}
                    </h3>
                    {modal.role && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/80 text-white border border-blue-400/30">
                        <FontAwesomeIcon
                          icon={icons.code}
                          className="h-3 w-3 mr-1.5"
                        />
                        {modal.role}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-sm md:text-lg leading-relaxed  max-w-2xl">
                    {modal.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
