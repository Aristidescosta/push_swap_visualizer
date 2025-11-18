import { useTheme } from "../hooks/useTheme";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-900"
          : "bg-slate-50"
      }`}
    >
      {children}
    </div>
  );
};