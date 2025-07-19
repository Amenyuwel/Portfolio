"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useDarkMode } from "@/context/DarkModeContext";

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
    <header className="sticky top-0 z-[50] flex w-full items-center justify-between gap-x-30 bg-[var(--background)] px-4 py-4 shadow-md dark:bg-[var(--background)]">
      {/* Dev Name */}
      <span
        className="cursor-pointer text-2xl font-semibold"
        onClick={() => {
          if (
            typeof window !== "undefined" &&
            window.location.pathname === "/"
          ) {
            // Check if we're already at the landing section
            const landingSection = document.getElementById("landing");
            const currentScrollY = window.scrollY;
            const landingPosition = landingSection?.offsetTop || 0;
            const offset = 70;

            // Check if we're within the landing section (accounting for offset)
            if (currentScrollY <= landingPosition + offset) {
              // We're at landing, so refresh the page
              window.location.reload();
            } else {
              // We're not at landing, so scroll to it
              scrollToSection("landing");
            }
          } else {
            setTimeout(() => {
              router.push("/");
            }, 50);
          }
          setMobileMenuOpen(false);
        }}
        aria-label="Go to homepage"
      >
        &lt; Amenyuwel /&gt;
      </span>

      {/* Desktop Navigation - only visible above 768px */}
      <nav className="hidden space-x-4 [@media(min-width:769px)]:flex">
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
        className="small:mr-2 p-2 md:ml-10 [@media(min-width:769px)]:hidden"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label="Open Menu"
      >
        {mobileMenuOpen ? (
          <XMarkIcon className="text-main dark:text-main h-7 w-7" />
        ) : (
          <Bars3Icon className="text-main dark:text-main h-7 w-7" />
        )}
      </button>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="ml-2 hidden cursor-pointer rounded-full bg-[var(--opposite)] p-2 lg:flex dark:bg-[var(--opposite)]"
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
            <XMarkIcon className="text-main dark:text-main h-7 w-7" />
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-main dark:text-main mb-6 text-xl font-semibold sm:text-2xl"
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
