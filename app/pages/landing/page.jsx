"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import Stacks from "@/components/Stacks";

const LandingPage = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center bg-[var(--background)]">
      <section className="flex h-screen w-[45%] flex-col items-center bg-[var(--background)]">
        <article className="bg-main text-main mt-16 flex h-auto w-full flex-col rounded-lg border-2 border-gray-700 p-8 text-3xl font-bold shadow-lg">
          {/* Name and Links */}
          <header className="mb-4 flex w-full items-center justify-between">
            <h1 className="font-heading text-5xl">Emmanuel D. Malagamba</h1>
            <nav className="flex space-x-4">
              <a
                href="https://github.com/Amenyuwel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-main rounded-lg border-1 p-2"
                aria-label="GitHub Profile"
              >
                <FaGithub className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/amenyuwel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-main rounded-lg border-1 p-2"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="h-8 w-8" />
              </a>
            </nav>
          </header>

          {/* Location */}
          <section className="mb-8 w-full">
            <p className="text-main font-body flex items-center text-xl">
              <MapPinIcon
                className="mr-2 h-5 w-5 text-red-600"
                aria-hidden="true"
              />
              <span className="font-normal">General Santos, Philippines</span>
            </p>
          </section>

          {/* Description */}
          <section className="w-full">
            <h2 className="text-main font-serif text-2xl">
              Full-Stack Web Developer with a BS in Computer Science, building
              scalable and user-friendly web applications.
            </h2>
          </section>
        </article>
        {/* Tech Stack */}
        <h1 className="text-main w-full bg-[var(--background)] py-8 text-left text-5xl font-bold">
          Tech Stack
        </h1>
        <Stacks />
      </section>
    </main>
  );
};

export default LandingPage;
