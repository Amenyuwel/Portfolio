"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import moreInformation from "../data/information";

const EcommercePage = () => {
  const projectData = moreInformation.find(
    (project) => project.title === "Appliance Shop E-commerce Website",
  );

  if (!projectData) {
    return (
      <main className="flex h-screen w-full flex-col bg-[var(--background)]">
        <Header />
        <section className="flex flex-1 items-center justify-center p-8 text-center">
          <h1 className="text-2xl font-semibold text-red-500">
            Project not found.
          </h1>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen w-full flex-col bg-[var(--background)]">
      <Header />
      <article className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-start overflow-y-auto px-6 py-12">
        <Breadcrumb
          items={[
            { label: "Contributions", href: "/#contribution" },
            { label: "E-commerce Website" },
          ]}
        />

        <header>
          <h1 className="mb-6 text-left text-4xl font-bold">
            {projectData.title}
          </h1>
        </header>

        <section className="w-full space-y-6">
          <p className="text-left text-lg">{projectData.summary}</p>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Contribution</h2>
            <ul className="list-disc space-y-1 pl-6">
              {projectData.contributed.map((feature, index) => (
                <li key={index} className="text-lg">
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Tech Stack</h2>
            <ul className="list-disc space-y-1 pl-6">
              {projectData.techStack.map((tech, index) => (
                <li key={index} className="text-lg">
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="grid w-full grid-cols-1 gap-10">
              {projectData.snippets.map((snippet, index) => (
                <figure key={index} className="flex flex-col items-start">
                  <img
                    src={snippet.image}
                    alt={snippet.alt || snippet.label}
                    className="w-full rounded-xl object-cover shadow-md"
                  />
                  <figcaption className="m-3 place-self-center text-2xl font-medium">
                    {snippet.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </section>
      </article>
      <Footer />
    </main>
  );
};

export default EcommercePage;
