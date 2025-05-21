import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "@/context/darkModeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const router = useRouter();

  // Scroll to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 70;
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

  // Get current path (App Router doesn't provide pathname directly)
  const isHome =
    typeof window !== "undefined" && window.location.pathname === "/";

  // Scroll to section if hash is present in URL (after navigation)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        // Timeout ensures DOM is ready after navigation
        setTimeout(() => scrollToSection(id), 10);
      }
    }
  }, []);

  return (
    <header className="text-main dark:text-main sticky top-0 z-[50] flex w-full items-center justify-center gap-x-30 bg-[var(--background)] py-4 shadow-md dark:bg-[var(--background)]">
      {/* Dev Name */}
      <h1
        className="cursor-pointer text-2xl font-semibold"
        onClick={() => {
          if (
            typeof window !== "undefined" &&
            window.location.pathname === "/"
          ) {
            scrollToSection("landing");
          } else {
            setTimeout(() => {
              router.push("/");
            }, 50);
          }
        }}
      >
        &lt; Amenyuwel /&gt;
      </h1>

      {/* Navigation Buttons */}
      <nav className="flex space-x-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              if (
                typeof window !== "undefined" &&
                window.location.pathname === "/"
              ) {
                scrollToSection(item.id);
              } else {
                router.push(`/#${item.id}`);
              }
            }}
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
