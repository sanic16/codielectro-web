"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

type ContextThemeType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const ContextTheme = createContext<ContextThemeType>({
  theme: "dark",
  toggleTheme: () => {},
});

type ContextThemeProviderProps = PropsWithChildren;

const ContextThemeProvider: FC<ContextThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">(
    typeof window !== "undefined" && localStorage.getItem("darkMode")
      ? (localStorage.getItem("darkMode") as "light" | "dark")
      : "dark"
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light");
      }
    }
    console.log("theme", theme);
  }, [theme]);

  const ctx = {
    theme,
    toggleTheme,
  };

  return <ContextTheme.Provider value={ctx}>{children}</ContextTheme.Provider>;
};

export default ContextThemeProvider;

export const useContextTheme = () => useContext(ContextTheme);