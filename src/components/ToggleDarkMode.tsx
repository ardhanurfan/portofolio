import { useEffect, useState } from "react";
import "../style/toggleDarkMode.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToggleDarkMode = () => {
  const [isDark, setDark] = useState(true);

  const changeMode = () => {
    if (isDark) {
      setDark(false);
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setDark(true);
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const localStorageMode = localStorage.getItem("theme");

    if (localStorageMode === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  return (
    <>
      <div className="mt-2 flex items-center lg:mt-0">
        <span
          className={
            isDark
              ? "mr-2 text-lg text-slate-500"
              : "mr-2 text-lg text-yellow-500"
          }
        >
          <MdLightMode></MdLightMode>
        </span>
        <input
          type="checkbox"
          onChange={changeMode}
          checked={isDark}
          className="hidden"
          id="dark-toggle"
        />
        <label htmlFor="dark-toggle">
          <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
            <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
          </div>
        </label>
        <span
          className={
            isDark ? "ml-2 text-lg text-sky-500" : "ml-2 text-lg text-slate-500"
          }
        >
          <MdDarkMode></MdDarkMode>
        </span>
      </div>
    </>
  );
};

export default ToggleDarkMode;
