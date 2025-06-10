import { SocialMediaLinks } from "../Contact/SocialMediaLinks";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 border-t border-zinc-200/50 dark:border-zinc-700/50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/20 to-transparent dark:from-zinc-800/20"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Logo/Name */}
          <div className="text-center">
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 font-bold text-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-800 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-200 bg-clip-text text-transparent">
                Ahmed
              </span>
              <span className="text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                Khaled
              </span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </button>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 font-medium">
              Frontend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-600 to-transparent"></div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 px-2">
                Let's Connect
              </span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-600 to-transparent"></div>
            </div>
            <SocialMediaLinks />
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-zinc-200/50 dark:border-zinc-700/50 w-full max-w-md">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              &copy; {new Date().getFullYear()} Ahmed Khaled. All rights reserved.
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
              Made with ❤️ using React & TypeScript
            </p>
          </div>

        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;
