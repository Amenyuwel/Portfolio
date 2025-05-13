"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import Stacks from "@/components/Stacks";

const LandingPage = () => {
  return (
    <main className="h-screen w-full flex flex-col items-center bg-[var(--background)]">
      <section className="h-screen w-[45%] flex flex-col items-center bg-[var(--background)]">
        <article className="h-auto w-full rounded-lg flex flex-col mt-16 p-8 text-3xl bg-main border-2 font-bold text-main shadow-lg">
          {/* Name and Links */}
          <header className="flex items-center justify-between w-full mb-4">
            <h1 className="text-5xl">Emmanuel D. Malagamba</h1>
            <nav className="flex space-x-4">
              <a
                href="https://github.com/Amenyuwel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-1 rounded-lg text-main"
                aria-label="GitHub Profile"
              >
                <FaGithub className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/amenyuwel/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-1 rounded-lg text-main"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="h-8 w-8" />
              </a>
            </nav>
          </header>

          {/* Location */}
          <section className="w-full mb-8">
            <p className="text-main text-xl flex items-center">
              <MapPinIcon
                className="h-5 w-5 text-gray-400 mr-2"
                aria-hidden="true"
              />
              <span>General Santos, Philippines</span>
            </p>
          </section>

          {/* Description */}
          <section className="w-full">
            <h2 className="text-main text-2xl">
              Full-Stack Web Developer with a BS in Computer Science, building
              scalable and user-friendly web applications.
            </h2>
          </section>
        </article>
        {/* Tech Stack */}
        <h1 className="text-left text-main p-8 w-full bg-[var(--background)] text-5xl font-bold">
          Tech Stack
        </h1>
        <Stacks />
      </section>
    </main>
  );
};

export default LandingPage;
