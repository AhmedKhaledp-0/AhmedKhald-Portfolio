import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../utils/icons";
import myPhoto from "../../assets/fullImg.png";

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left ">
            <h2 className="text-xl md:text-2xl mb-4">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Ahmed Khaled</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Frontend Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I have a strong foundation in HTML, CSS, and JavaScript, I use
              libraries like React.js to build responsive, performance-
              optimized applications.
            </p>
            <a
              href="https://ahmed-khaled-portfolio-orcin.vercel.app/cv.pdf"
              download="Ahmed_Khaled_CV.pdf"
              className="bg-primary w-full md:w-60 justify-center text-secondary px-8 py-4 font-bold rounded-lg flex items-center gap-2 hover:bg-secondary hover:text-primary transition-colors"
            >
              <FontAwesomeIcon icon={icons.download} className="h-5 w-5" />
              Download CV
            </a>
          </div>
          {/* Right Section */}
          <div className="flex-1 max-w-md justify-center items-center relative">
            {/* Profile Photo */}
            <img
              src={myPhoto}
              alt="Ahmed Khaled photo"
              className="  w-full object-cover clip-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
