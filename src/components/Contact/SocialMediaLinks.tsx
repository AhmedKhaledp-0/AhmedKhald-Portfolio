import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "../../utils/constants";

export const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center gap-4">
      {links.map(({ href, icon, platform }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-white/80 dark:bg-zinc-700/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-zinc-200/50 dark:border-zinc-600/50 transition-all duration-300 hover:-translate-y-2 hover:scale-110 flex items-center justify-center"
          aria-label={platform}
        >
          <FontAwesomeIcon
            icon={icon}
            className="h-6 w-6 text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300"
          />

          {/* Hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-violet-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Platform tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 text-xs font-medium px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {platform}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-800 dark:border-t-zinc-200"></div>
          </div>
        </a>
      ))}
    </div>
  );
};
