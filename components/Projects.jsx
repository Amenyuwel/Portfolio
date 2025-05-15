import React from "react";
import {
  SiNextdotjs,
  SiPocketbase,
  SiPhp,
  SiMysql,
  SiTailwindcss,
  SiNodedotjs,
  SiTensorflow,
  SiPython,
  SiFlask,
} from "react-icons/si";
import Button from "@/components/Button";

const Projects = () => {
  return (
    <main className="bg-main mb-8 grid h-full w-full flex-grow grid-cols-1 gap-4 rounded-lg border-1 border-[var(--text-secondary)] p-4">
      {/* AI-REFINE */}
      <article className="bg-main group relative overflow-hidden rounded-lg border-1 border-[var(--text-secondary)] shadow-md">
        <img
          src="./images/Example.PNG"
          alt="AI-REFINE Project Thumbnail"
          className="h-full w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <section className="text-main absolute bottom-0 flex w-full translate-y-full cursor-pointer flex-col bg-[var(--cover)] p-4 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          <h1 className="text-2xl font-bold">AI-REFINE</h1>
          <div className="mt-2 flex items-center space-x-4">
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiNextdotjs className="h-10 w-5" />
              <span className="text-sm font-medium">Next.js</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiTailwindcss className="h-10 w-5" />
              <span className="text-sm font-medium">TailwindCSS</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiNodedotjs className="h-10 w-5" />
              <span className="text-sm font-medium">Node.JS</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiPocketbase className="h-10 w-5" />
              <span className="text-sm font-medium">Pocketbase</span>
            </div>
          </div>
          <p className="mt-2 text-sm font-medium">
            Generate augmented data variants effortlessly, simply drag <br />
            and drop your image, then adjust the augmentation intensity to your
            preference.
          </p>
          <Button />
        </section>
      </article>

      {/* HARVEST ASSISTANT */}
      <article className="bg-main group relative overflow-hidden rounded-lg border-1 border-[var(--text-secondary)] shadow-md">
        <img
          src="./images/Harvest.PNG"
          alt="Harvest Assistant Project Thumbnail"
          className="h-full w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <section className="text-main absolute bottom-0 flex w-full translate-y-full cursor-pointer flex-col bg-[var(--cover)] p-4 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          <h1 className="text-lg font-bold">
            Harvest Assistant: A Smart Pest Management and Enhanced Grain
            Production
          </h1>
          <div className="mt-2 flex items-center space-x-4">
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiPhp className="h-10 w-5" />
              <span className="text-sm font-medium">PHP</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiTensorflow className="h-10 w-5" />
              <span className="text-sm font-medium">TensorFlow</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiPython className="h-10 w-5" />
              <span className="text-sm font-medium">Python</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiFlask className="h-10 w-5" />
              <span className="text-sm font-medium">Flask</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiMysql className="h-10 w-15" />
            </div>
          </div>
          <p className="mt-2 text-sm font-medium">
            A thesis project developed at STI–General Santos City, designed to
            systematically <br /> bridge the gap between the City
            Agriculturist's Office and the farmers of General Santos City.
          </p>
          <Button />
        </section>
      </article>
    </main>
  );
};

export default Projects;
