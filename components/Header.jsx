import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "@/context/DarkModeContext"; // Import the global dark mode context

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access global dark mode state and toggle function

  // Scroll to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 80; // Adjust this value to match your header's height
    const sectionPosition = section?.offsetTop || 0;
    const scrollPosition = sectionPosition - offset;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  // Navigation items
  const navItems = [
    { id: "landing", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-[50] flex items-center justify-center gap-x-30 py-4 shadow-md bg-[var(--background)] dark:bg-[var(--background)] text-main dark:text-main">
      {/* Dev Name */}
      <h1
        className="text-2xl font-semibold cursor-pointer"
        onClick={() => scrollToSection("landing")}
      >
        Amenyuwel
      </h1>

      {/* Navigation Buttons */}
      <nav className="flex space-x-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="p-2 cursor-pointer font-semibold text-xl text-main dark:text-main"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full cursor-pointer bg-[var(--opposite)] dark:bg-[var(--opposite)]"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <SunIcon className="h-6 w-6 text-black" />
        ) : (
          <MoonIcon className="h-6 w-6 text-white" />
        )}
      </button>
    </header>
  );
};

export default Header;
