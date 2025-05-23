"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MapPinIcon } from "@heroicons/react/24/solid";
import HeroPattern from "@/components/HeroPattern";
import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize isDarkMode based on HTML class
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Check initial state
    checkDarkMode();

    // Setup observer to track theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative flex h-screen w-full flex-col items-center">
      <HeroPattern
        dotColor={isDarkMode ? "#ebebeb" : "#111111"}
        dotSize={0.5}
        spacing={20}
      />

      <section className="flex h-screen w-[60%] flex-col items-center justify-center">
        <article className="flex h-auto w-full flex-col rounded-lg border-2 border-[var(--opposite)] bg-[var(--background)] p-10 text-3xl font-bold shadow-xl backdrop-blur-sm">
          {/* Name and Links */}
          <header className="mb-6 flex w-full items-center justify-between">
            <h1 className="font-heading text-6xl text-[var(--text-main)]">
              Emmanuel D. Malagamba
            </h1>
            <nav className="flex space-x-5" aria-label="Social Links">
              <a
                href="https://github.com/Amenyuwel"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-1 p-3 text-[var(--text-main)] transition-transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FaGithub className="h-9 w-9" />
              </a>
              <a
                href="https://www.linkedin.com/in/amenyuwel/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-1 p-3 text-[var(--text-main)] transition-transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="h-9 w-9" />
              </a>
            </nav>
          </header>

          {/* Location */}
          <section className="mb-10 w-full">
            <p className="font-body flex items-center text-2xl text-[var(--text-main)]">
              <MapPinIcon
                className="mr-3 h-6 w-6 text-red-600"
                aria-hidden="true"
              />
              <span className="font-semibold text-[var(--text-secondary)]">
                General Santos, Philippines
              </span>
            </p>
          </section>

          {/* Description */}
          <section className="w-full">
            <h2 className="font-serif text-3xl leading-relaxed text-[var(--text-main)]">
              Full-Stack Web & Mobile Developer, with a BS in Computer Science. Building
              scalable and user-friendly web and mobile applications.
            </h2>
          </section>
        </article>

        <section className="mt-4 flex w-full flex-row items-center justify-center gap-4">
          {/* RESUME */}
          <a
            href="/resume.pdf"
            download="Emmanuel_Malagamba_Resume.pdf"
            className="rounded-lg bg-[var(--opposite)] px-6 py-3 font-semibold text-[var(--background)] transition-opacity hover:opacity-90"
            aria-label="Download CV"
          >
            Download CV
          </a>
          {/* CONTACT */}
          <button
            className="rounded-lg bg-[var(--opposite)] px-6 py-3 font-semibold text-[var(--background)] transition-opacity hover:opacity-90 cursor-pointer"
            aria-label="Contact Me"
          >
            Contact Me
          </button>
        </section>
      </section>
    </main>
  );
};

export default LandingPage;
