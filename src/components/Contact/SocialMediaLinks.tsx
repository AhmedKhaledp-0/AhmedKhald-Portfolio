import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "../../utils/constants";

export const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      {links.map(({ href, icon, hoverColor }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-600 ${hoverColor}`}
        >
          <FontAwesomeIcon icon={icon} className="h-8 w-8" />
        </a>
      ))}
    </div>
  );
};
