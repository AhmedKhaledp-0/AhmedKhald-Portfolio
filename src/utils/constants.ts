import {
  faXTwitter,
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// projects photos
import orrerryProject from "../assets/projects/neo.webp";
import littleLemonProject from "../assets/projects/little.webp";
import coffeeProject from "../assets/projects/coffie.webp";
import wizardZProject from "../assets/projects/wizard.webp";
import ManouversTask from "../assets/projects/manuvers.webp";
import tasksCountDown from "../assets/projects/count.webp";
import habitura from "../assets/projects/hapit.webp";
import fiscal from "../assets/projects/fiscal.webp";
import pdfAnalize from "../assets/projects/ai.webp";
import toTasky from "../assets/projects/totasky.webp";
// skills icons using react-icons
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiReactquery,
  SiRedux,
  SiGit,
  SiGithub,
  SiLinux,
  SiFirebase,
  SiVercel,
  SiFigma,
  SiLatex,
} from "react-icons/si";

//social links contact section content
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
    platform: "Linkedin",
  },
];

//skills section content
export const skills = [
  {
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React Query", icon: SiReactquery },
      { name: "Redux", icon: SiRedux },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Linux", icon: SiLinux },
      { name: "Firebase", icon: SiFirebase },
      { name: "Vercel", icon: SiVercel },
      { name: "Figma", icon: SiFigma },
      { name: "LaTeX", icon: SiLatex },
    ],
  },
];

export const projects = [
  {
    title: "Habitura",
    description: "A habit tracking application with a sleek design.",
    image: habitura,
    github: "NA",
    demo: "https://habitura-pi.vercel.app",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "firebase"],
  },
  {
    title: "Fiscal",
    description: "A financial management application with advanced features.",
    image: fiscal,
    github: "NA",
    demo: "https://flascflow.vercel.app/",
    skills: ["Next.js", "JavaScript", "Tailwind CSS", "firebase"],
  },
  {
    title: "PDF Analyze",
    description: "An AI-powered PDF analysis tool.",
    image: pdfAnalize,
    github: "NA",
    demo: "https://pdfanalize.vercel.app",
    skills: ["React", "TypeScript", "Tailwind CSS", "Gemini API"],
  },
  {
    title: "ToTasky",
    description: "A task management application with a modern interface.",
    image: toTasky,
    github: "https://github.com/AhmedKhaledp-0/task-manager",
    demo: "https://task-managerdepi.vercel.app",
    skills: ["React", "TypeScript", "Tailwind CSS", "React Query"],
    role: "Frontend developer",
  },
  {
    title: "NEO_SHERXE",
    description: "A 3D interactive space exploration application.",
    image: orrerryProject,
    github: "https://github.com/AhmedKhaledp-0/NEO_SHERXE",
    demo: "https://neo-sherxe.vercel.app/",
    skills: ["HTML", "CSS", "React", "Three.js", "R3F"],
  },
  {
    title: "Little Lemon",
    description: "A website showing menu and reservation features.",
    image: littleLemonProject,
    github: "https://github.com/AhmedKhaledp-0/little-lemon",
    demo: "https://little-lemon-inky-six.vercel.app/",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Coffee",
    description: "A sleek, static website for a coffee brand.",
    image: coffeeProject,
    github: "https://github.com/AhmedKhaledp-0/coffee",
    demo: "https://ahmedkhaledp-0.github.io/coffee/",
    skills: ["HTML", "CSS"],
  },
  {
    title: "WizardZ",
    description: "A magical-themed interactive landing page.",
    image: wizardZProject,
    github: "https://github.com/AhmedKhaledp-0/wizardZ",
    demo: "https://ahmedkhaledp-0.github.io/wizardZ/",
    skills: ["HTML", "CSS"],
  },
  {
    title: "Manouvers Task",
    description: "A task management application for maneuvers.",
    image: ManouversTask,
    github: "https://github.com/AhmedKhaledp-0/Manuvers-Assiment",
    demo: "https://manuvers-assiment.vercel.app/",
    skills: ["React", "TypeScript", "Tailwind CSS", "ChartJS"],
  },

  // {
  //   title: "Tasks Progress",
  //   description: "Track and visualize task progress efficiently.",
  //   image: tasksProgress,
  //   github: "NA",
  //   demo: "https://timeline-rose.vercel.app/",
  //   skills: ["React", "TypeScript", "Tailwind CSS", "CSS"],
  // },
  // {
  //   title: "DEPI Project Manager",
  //   description: "Project management tool for DEPI initiatives.",
  //   image: DEPIProjectManager,
  //   github: "NA",
  //   demo: "https://task-depi-project.vercel.app/",
  //   skills: ["React", "TypeScript", "Tailwind CSS", "supabase"],
  // },
  {
    title: "Tasks CountDown",
    description: "Countdown timer for task management.",
    image: tasksCountDown,
    github: "NA",
    demo: "https://countdown-app-rose.vercel.app/",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
];
