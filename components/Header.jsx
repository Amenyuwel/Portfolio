import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "@/context/darkModeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navItems = [
    { id: "landing", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Projects & Contributions" },
    { id: "stacks", label: "Tech Stack" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        setTimeout(() => scrollToSection(id), 10);
      }
    }
  }, []);

  const handleNavClick = (id) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="text-main dark:text-main sticky top-0 z-[50] flex w-full items-center justify-between gap-x-30 bg-[var(--background)] py-4 px-4 shadow-md dark:bg-[var(--background)]">
      {/* Dev Name */}
      <h1
        className="cursor-pointer text-2xl font-semibold"
        onClick={() => {
          if (typeof window !== "undefined" && window.location.pathname === "/") {
            scrollToSection("landing");
          } else {
            setTimeout(() => {
              router.push("/");
            }, 50);
          }
          setMobileMenuOpen(false);
        }}
      >
        &lt; Amenyuwel /&gt;
      </h1>

      {/* Desktop Navigation - only visible above 768px */}
      <nav className="hidden [@media(min-width:769px)]:flex space-x-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className="text-main dark:text-main cursor-pointer p-2 text-xl font-semibold"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Hamburger Icon (visible 768px and below) */}
      <button
        className="[@media(min-width:769px)]:hidden p-2 small:mr-2 md:ml-10"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label="Open Menu"
      >
        {mobileMenuOpen ? (
          <XMarkIcon className="h-7 w-7 text-main dark:text-main" />
        ) : (
          <Bars3Icon className="h-7 w-7 text-main dark:text-main" />
        )}
      </button>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="ml-2 cursor-pointer rounded-full bg-[var(--opposite)] p-2 dark:bg-[var(--opposite)] lg:flex hidden"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <SunIcon className="h-6 w-6 text-black" />
        ) : (
          <MoonIcon className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay (only 768px and below) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[var(--background)] dark:bg-[var(--background)] [@media(min-width:769px)]:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2"
            aria-label="Close Menu"
          >
            <XMarkIcon className="h-7 w-7 text-main dark:text-main" />
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="mb-6 text-xl font-semibold text-main dark:text-main sm:text-2xl"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="mt-4 rounded-full bg-[var(--opposite)] p-3 dark:bg-[var(--opposite)]"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <SunIcon className="h-7 w-7 text-black" />
            ) : (
              <MoonIcon className="h-7 w-7 text-white" />
            )}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
