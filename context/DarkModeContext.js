"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

// Create the context
const DarkModeContext = createContext();

// Custom hook to use the context
export const useDarkMode = () => useContext(DarkModeContext);

// Provider component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from cookies on mount
  useEffect(() => {
    const savedMode = Cookies.get("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
      document.documentElement.classList.toggle("dark", savedMode === "true");
    }
  }, []);

  // Toggle dark mode and save preference in cookies
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    Cookies.set("darkMode", newMode, { expires: 365 }); // Save for 1 year
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
