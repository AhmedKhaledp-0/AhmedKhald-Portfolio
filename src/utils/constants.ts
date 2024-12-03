import {
  faXTwitter,
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const links = [
  {
    href: "https://x.com/AhmedKhaledp_0",
    icon: faXTwitter,
    hoverColor: "hover:text-black",
    platform: "X",
  },
  {
    href: "https://github.com/AhmedKhaledp-0",
    icon: faGithub,
    hoverColor: "hover:text-black",
    platform: "Github",
  },
  {
    href: "https://www.facebook.com/AhmedKhaldP.0",
    icon: faFacebook,
    hoverColor: "hover:text-blue-700",
    platform: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/ahmed-khaled-8a6450276/",
    icon: faLinkedin,
    hoverColor: "hover:text-blue-500",
    platfort: "Linkedin",
  },
];

export const skills = [
  { name: "HTML5", icon: "html", percentage: 90 },
  { name: "Premiere Pro", icon: "pr", percentage: 60 },
  { name: "CSS3", icon: "css", percentage: 85 },
  { name: "Illustrator", icon: "ai", percentage: 55 },
  { name: "JavaScript", icon: "js", percentage: 75 },
  { name: "LaTeX", icon: "latex", percentage: 93 },
  { name: "React", icon: "react", percentage: 57 },
  { name: "Python", icon: "python", percentage: 77 },
];

export const projects = [
  {
    title: "NEO_SHERXE",
    description: "A 3D interactive space exploration application.",
    image: "../assets/projects/orrerryProject.webp",
    github: "https://github.com/AhmedKhaledp-0/NEO_SHERXE",
    demo: "https://neo-sherxe.vercel.app/",
    skills: ["HTML", "CSS", "React", "Three.js", "R3F"],
  },
  {
    title: "Little Lemon",
    description: "A website showing menu and reservation features.",
    image: "../assets/projects/littleLemonProject.webp",
    github: "https://github.com/AhmedKhaledp-0/little-lemon",
    demo: "https://little-lemon-inky-six.vercel.app/",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Coffee",
    description: "A sleek, static website for a coffee brand.",
    image: "../assets/projects/coffeeProject.webp",
    github: "https://github.com/AhmedKhaledp-0/coffee",
    demo: "https://ahmedkhaledp-0.github.io/coffee/",
    skills: ["HTML", "CSS"],
  },
  {
    title: "WizardZ",
    description: "A magical-themed interactive landing page.",
    image: "../assets/projects/wizardZProject.webp",
    github: "https://github.com/AhmedKhaledp-0/wizardZ",
    demo: "https://ahmedkhaledp-0.github.io/wizardZ/",
    skills: ["HTML", "CSS"],
  },
];
