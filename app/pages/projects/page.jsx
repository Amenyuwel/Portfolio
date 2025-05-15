"use client";
import Projects from "@/components/Projects";
import React from "react";

const ProjectPage = () => {
  return (
    <main className="flex h-auto w-full items-center justify-center bg-[var(--background)]">
      <section className="mb-8 flex h-full w-[45%] flex-col">
        <article className="mb-4">
          <h1 className="text-main w-full bg-[var(--background)] py-8 text-left text-5xl font-bold">
            My Projects
          </h1>
        </article>
        <Projects />
      </section>
    </main>
  );
};

export default ProjectPage;
