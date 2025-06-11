import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleTheme } from "../../store/themeSlice";

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className=" p-3 w-10 h-10 flex justify-center items-center rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300 hover:scale-105 group shadow-sm"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className=" w-5 h-5">
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          className=" inset-0 h-5 w-5 text-zinc-700 dark:text-zinc-300 transition-all duration-300"
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
