import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

// Lazy load heavy components
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Services = lazy(() => import("./components/Services/Services"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8 md:py-20">
    <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-b-2 border-zinc-900 dark:border-zinc-100"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <Header />
      <main className="relative">
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Services />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
