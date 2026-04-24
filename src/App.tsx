import { useRoutes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Works from "./pages/Works";
import { createContext, useState, useEffect, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import React from "react";

interface AppProps {}

type ThemeContextType = {
  isDarkmode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDarkmode: false,
  toggleTheme: () => {},
});

const App: React.FunctionComponent<AppProps> = () => {
  /* LOAD FROM SESSION STORAGE */
  const [isDarkmode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = sessionStorage.getItem("theme-mode");
    return savedTheme === "dark";
  });

  /* TOGGLE */
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  /* SAVE TO SESSION STORAGE */
  useEffect(() => {
    sessionStorage.setItem("theme-mode", isDarkmode ? "dark" : "light");

    document.body.classList.toggle("dark-mode", isDarkmode);
  }, [isDarkmode]);

  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <ContactMe />,
    },
    {
      path: "/works",
      element: <Works />,
    },
  ]);

  const location = useLocation();

  const themeValue = useMemo(
    () => ({
      isDarkmode,
      toggleTheme,
    }),
    [isDarkmode],
  );

  if (!element) return null;

  return (
    <ThemeContext.Provider value={themeValue}>
      <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, {
          key: location.pathname,
        })}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

export default App;
