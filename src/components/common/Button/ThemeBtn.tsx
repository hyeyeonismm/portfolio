"use client";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export const ThemeBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        className="h-8 mt-8 flex flex-row items-center justify-center border-2 border-solid rounded-3xl px-3 py-1 dark:bg-slate-600"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <MdLightMode className="visible dark:invisible" />
        <MdDarkMode className="invisible dark:visible" />
      </button>
    </>
  );
};
