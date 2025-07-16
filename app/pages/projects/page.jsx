"use client";
import MyProjects from "@/components/MyProjects";
import React from "react";

const ProjectPage = () => {
  return (
    <main className="flex h-full w-full items-center justify-center py-8">
      <section className="container mx-auto px-4 lg:w-[60%] xl:w-[50%]">
        <article className="mb-8">
          <h1 className="text-main text-left text-4xl font-bold sm:text-5xl">
            My Projects
          </h1>
        </article>
        <MyProjects />
        <div className="flex w-full justify-end">
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
