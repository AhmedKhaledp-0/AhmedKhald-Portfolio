import { skills } from "../../utils/constants";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between gap-6 "
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="  h-10  w-10 lg:w-16 lg:h-16"
              />
              <div className="relative flex-1 lg:h-5 lg:w-4/6 w-3/5 h-3  bg-secondary  rounded-full">
                <div
                  className="absolute top-0 left-0 h-full rounded-full bg-primary"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <p className="text-gray-700  text-center">{skill.percentage} %</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
