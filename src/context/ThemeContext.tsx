import { createContext, useState, useEffect, type ReactNode } from "react";

const ThemeContextInternal = createContext<{ theme: "light" | "dark"; toggleTheme: () => void } | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return <ThemeContextInternal.Provider value={{ theme, toggleTheme }}>{children}</ThemeContextInternal.Provider>;
};

export { ThemeContextInternal as ThemeContext };