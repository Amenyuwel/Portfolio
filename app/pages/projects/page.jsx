"use client";
import MyProjects from "@/components/MyProjects";
import React from "react";

const ProjectPage = () => {
  return (
    <main className="flex h-auto w-full items-center justify-center bg-[var(--background)]">
      <section className="mb-8 flex h-full w-full max-w-3xl flex-col">
        <article className="mb-4">
          <h1 className="text-main w-full bg-[var(--background)] text-left text-5xl font-bold">
            My Projects
          </h1>
        </article>
        <MyProjects />
        <div className="flex w-full justify-end">
          <button className="h-8 w-16 cursor-pointer rounded-lg font-semibold text-[var(--opposite)] underline">
            MORE
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
