"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MapPinIcon } from "@heroicons/react/24/solid";
import HeroPattern from "@/components/HeroPattern";
import React, { useState, useEffect } from "react";
import TiltedCard from "@/ReactBits/TiltedCard/TiltedCard";
import { FiEye } from "react-icons/fi";

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Emmanuel D. Malagamba",
    "alternateName": "Amenyuwel",
    "jobTitle": "Full-Stack Web & Mobile Developer",
    "description": "Full-Stack Web & Mobile Developer with a Bachelor's degree in Computer Science. Building scalable and user-friendly web and mobile applications.",
    "url": "https://amenyuwel.netlify.app",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "General Santos",
      "addressCountry": "Philippines"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "STI College"
    },
    "knowsAbout": [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Machine Learning",
      "Full-Stack Development",
      "Mobile Development"
    ],
    "sameAs": [
      "https://github.com/Amenyuwel",
      "https://www.linkedin.com/in/amenyuwel/"
    ]
  };

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
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <main className="relative flex h-screen w-full flex-col items-center">
      <HeroPattern
        dotColor={isDarkMode ? "#ebebeb" : "#111111"}
        dotSize={0.5}
        spacing={20}
      />

      <section className="flex h-screen w-full flex-col items-center justify-center px-4">
        <article className="flex h-auto w-full flex-col rounded-lg border-2 border-[var(--opposite)] bg-[var(--background)] p-4 text-xl font-bold shadow-xl backdrop-blur-sm md:p-6 lg:w-[65%] xl:w-[45%] lg:p-8">
          {/* Name and Links */}
          <header className="mb-6 flex w-full flex-col items-center justify-between gap-4 md:mb-8 md:flex-row md:gap-6">
            <div className="flex flex-col items-center space-y-3 sm:items-start md:space-y-4">
              <h1 className="font-heading text-center text-3xl text-[var(--text-main)] md:text-left md:text-4xl lg:text-6xl">
                Emmanuel D. Malagamba
              </h1>

              {/* Location */}
              <section className="xsm:text-center mb-4 w-full sm:text-center md:mb-6 md:text-left">
                <p className="font-body xsm:justify-center flex items-center justify-center text-lg text-[var(--text-main)] sm:justify-center md:justify-start md:text-xl lg:text-2xl">
                  <MapPinIcon
                    className="mr-3 h-5 w-5 text-red-600"
                    aria-hidden="true"
                  />
                  <span className="sm:font-normal text-[var(--text-secondary)]">
                    General Santos, Philippines
                  </span>
                </p>
              </section>

              <div className="mb-4 flex-shrink-0 sm:hidden">
                <TiltedCard />
              </div>

              <nav
                className="flex justify-center space-x-4 md:justify-start md:space-x-5"
                aria-label="Social Links"
              >
                <a
                  href="https://github.com/Amenyuwel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[var(--text-main)] p-2 text-[var(--text-main)] transition-all hover:scale-110 hover:bg-[var(--opposite)] hover:text-[var(--background)] md:p-3"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/amenyuwel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[var(--text-main)] p-2 text-[var(--text-main)] transition-all hover:scale-110 hover:bg-[var(--opposite)] hover:text-[var(--background)] md:p-3"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </nav>
            </div>

            <div className="hidden flex-shrink-0 sm:block lg:mb-15">
              <TiltedCard />
            </div>
          </header>

          {/* Description */} 
          <section className="mb-2 w-full">
            <h2 className="font-normal text-pretty text-xl leading-relaxed text-[var(--text-main)] md:text-2xl lg:text-3xl text-">
              Full-Stack Web & Mobile Developer, with a Bachelor's degree in Computer Science.
              Building scalable and user-friendly web and mobile applications.
            </h2>
          </section>
        </article>

        <section className="mt-4 flex w-full flex-row items-center justify-center gap-3 md:mt-6 md:gap-4">
          {/* RESUME */}
          <a
            href="/Resume/Emmanuel_Malagamba_Resume.pdf"
            download="Emmanuel_Malagamba's_Resume.pdf"
            className="rounded-lg bg-[var(--opposite)] px-4 py-2 font-semibold text-[var(--background)] transition-all hover:scale-105 hover:opacity-90 md:px-6 md:py-3"
            aria-label="Download CV"
          >
            Download CV
          </a>
          <a
            href="/Resume/Emmanuel_Malagamba_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border bg-[var(--opposite)] px-4 py-2 font-semibold text-[var(--background)] transition-all hover:scale-105 hover:bg-[var(--opposite)] hover:text-[var(--background)] md:px-6 md:py-3"
            aria-label="View CV"
          >
            <FiEye className="h-5 w-5 text-[var(--background)]" />
            View CV
          </a>
        </section>
      </section>
    </main>
    </>
  );
};

export default LandingPage;
