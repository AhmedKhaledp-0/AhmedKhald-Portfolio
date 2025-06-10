import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logos/darklogo.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full  z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-6 w-auto lg:h-6" />
            <span className="sr-only">Portfolio</span>
          </a>
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              className="h-6 w-6"
            />
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-primary transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-primary transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-primary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
              <ul className="py-2">
                <li>
                  <a href="#home" className="block px-4 py-2 hover:bg-gray-100">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
