import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "@/context/DarkModeContext"; // Import the global dark mode context

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access global dark mode state and toggle function

  // Scroll to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 70; // Adjust this value to match your header's height
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
    { id: "experience", label: "Experience" },
    { id: "project", label: "Projects & Contributions" },
  ];

  return (
    <header className="text-main dark:text-main sticky top-0 z-[50] flex w-full items-center justify-center gap-x-30 bg-[var(--background)] py-4 shadow-md dark:bg-[var(--background)]">
      {/* Dev Name */}
      <h1
        className="cursor-pointer text-2xl font-semibold"
        onClick={() => scrollToSection("landing")}
      >
        &lt; Amenyuwel /&gt;
      </h1>

      {/* Navigation Buttons */}
      <nav className="flex space-x-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-main dark:text-main cursor-pointer p-2 text-xl font-semibold"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="cursor-pointer rounded-full bg-[var(--opposite)] p-2 dark:bg-[var(--opposite)]"
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
