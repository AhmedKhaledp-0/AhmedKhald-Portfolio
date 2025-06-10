import { skills } from "../../utils/constants";

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-zinc-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-zinc-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-800 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-200 bg-clip-text text-transparent">
              Skills &
            </span>{" "}
            <span className="text-zinc-700 dark:text-zinc-300">
              Technologies
            </span>
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            I work with modern technologies to create scalable and efficient web
            applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-zinc-200/50 dark:border-zinc-700/50"
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-100/20 dark:to-zinc-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className="w-12 h-12 md:w-14 md:h-14 mb-3 flex items-center justify-center bg-white dark:bg-zinc-700 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                        <skill.icon className="w-6 h-6 md:w-8 md:h-8 text-zinc-700 dark:text-zinc-300" />
                      </div>

                      {/* Skill name */}
                      <h4 className="font-semibold text-sm md:text-base text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Subtle animated border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-zinc-300 via-transparent to-zinc-300 dark:from-zinc-600 dark:via-transparent dark:to-zinc-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-zinc-300 dark:to-zinc-600"></div>
            <span className="text-sm font-medium">
              Always learning & growing
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-zinc-300 dark:to-zinc-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
