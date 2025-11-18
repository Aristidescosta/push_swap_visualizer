
import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../../hooks/useTheme";

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-xl transition-all bg-white dark:bg-slate-800 text-slate-700 dark:text-yellow-400 border border-slate-200 dark:border-slate-700 shadow-sm hover:scale-110"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};
