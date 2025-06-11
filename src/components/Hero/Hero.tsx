import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../utils/icons";
import myPhoto from "../../assets/ahmed.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                Available for work
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-2 font-medium">
              Hello, I'm
            </h2>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-800 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-200 bg-clip-text text-transparent animate-gradient">
                Ahmed Khaled
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-700 dark:text-zinc-300 mb-6">
              Frontend{" "}
              <span className="text-zinc-900 dark:text-zinc-100">
                Developer
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl leading-relaxed">
              Passionate about creating beautiful, responsive web applications
              with modern technologies. I specialize in React.js and bring
              designs to life with clean, efficient code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <a
                href="https://ahmed-khaled-portfolio-orcin.vercel.app/AhmedKhaledCV.pdf"
                download="Ahmed_Khaled_CV.pdf"
                className="group bg-gradient-to-r from-zinc-900 to-zinc-700 hover:from-zinc-800 hover:to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 dark:hover:from-zinc-200 dark:hover:to-zinc-400 text-white dark:text-zinc-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
              >
                <FontAwesomeIcon
                  icon={icons.download}
                  className="h-5 w-5 group-hover:animate-bounce"
                />
                Download CV
              </a>

              <a
                href="#contact"
                className="group border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center backdrop-blur-sm"
              >
                <span>Let's Connect</span>
                <FontAwesomeIcon
                  icon={icons.arrow}
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 max-w-lg relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-zinc-200 dark:bg-zinc-700 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-zinc-300 dark:bg-zinc-600 rounded-full opacity-60"></div>

            {/* Profile Photo Container */}
            <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-600 dark:from-zinc-300 dark:to-zinc-500 rounded-3xl p-1 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="bg-white dark:bg-zinc-800 rounded-3xl">
                <img
                  src={myPhoto}
                  alt="Ahmed Khaled photo"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-8 -right-8 bg-white dark:bg-zinc-800 rounded-full p-4 shadow-lg animate-float">
              <FontAwesomeIcon
                icon={icons.code}
                className="h-6 w-6 text-zinc-700 dark:text-zinc-300"
              />
            </div>
            <div className="absolute bottom-8 -left-8 bg-white dark:bg-zinc-800 rounded-full p-4 shadow-lg animate-float-delayed">
              <FontAwesomeIcon
                icon={icons.design}
                className="h-6 w-6 text-zinc-700 dark:text-zinc-300"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative mt-16 flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-400 dark:border-zinc-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
