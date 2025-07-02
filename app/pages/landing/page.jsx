"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MapPinIcon } from "@heroicons/react/24/solid";
import HeroPattern from "@/components/HeroPattern";
import React, { useState, useEffect } from "react";
import TiltedCard from "@/ReactBits/TiltedCard/TiltedCard";

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

      <section className="flex h-screen w-full max-w-5xl flex-col items-center justify-center px-4">
        <article className="flex h-auto w-full flex-col rounded-lg border-2 border-[var(--opposite)] bg-[var(--background)] p-6 text-3xl font-bold shadow-xl backdrop-blur-sm md:p-10">
          {/* Name and Links */}
          <header className="mb-8 flex w-full flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col space-y-4">
              <h1 className="font-heading text-center text-4xl text-[var(--text-main)] md:text-left md:text-6xl">
                Emmanuel D. Malagamba
              </h1>

              {/* Location */}
              <section className="mb-6 w-full">
                <p className="font-body flex items-center text-xl text-[var(--text-main)] md:text-2xl">
                  <MapPinIcon
                    className="mr-3 h-5 w-5 text-red-600"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-[var(--text-secondary)]">
                    General Santos, Philippines
                  </span>
                </p>
              </section>

              <nav
                className="flex justify-center space-x-5 md:justify-start"
                aria-label="Social Links"
              >
                <a
                  href="https://github.com/Amenyuwel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[var(--text-main)] p-3 text-[var(--text-main)] transition-all hover:scale-110 hover:bg-[var(--opposite)] hover:text-[var(--background)]"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/amenyuwel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[var(--text-main)] p-3 text-[var(--text-main)] transition-all hover:scale-110 hover:bg-[var(--opposite)] hover:text-[var(--background)]"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </nav>
            </div>

            <div className="flex-shrink-0">
              <TiltedCard />
            </div>
          </header>

          {/* Description */}
          <section className="mb-2 w-full">
            <h2 className="font-serif text-2xl leading-relaxed text-[var(--text-main)] md:text-3xl">
              Full-Stack Web & Mobile Developer, with a BS in Computer Science.
              Building scalable and user-friendly web and mobile applications.
            </h2>
          </section>
        </article>

        <section className="mt-6 flex w-full flex-row items-center justify-center gap-4">
          {/* RESUME */}
          <a
            href="/resume.pdf"
            download="Emmanuel_Malagamba_Resume.pdf"
            className="rounded-lg bg-[var(--opposite)] px-6 py-3 font-semibold text-[var(--background)] transition-all hover:scale-105 hover:opacity-90"
            aria-label="Download CV"
          >
            Download CV
          </a>
        </section>
      </section>
    </main>
  );
};

export default LandingPage;
