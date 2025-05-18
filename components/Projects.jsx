import React from "react";
import Links from "@/components/Links";
import { Icon } from "@iconify/react";
import Button from "@/components/Button";

const Projects = () => {
  return (
    <main className="bg-main mb-8 grid h-full w-full flex-grow grid-cols-1 gap-4 rounded-lg border-1 border-[var(--text-secondary)] p-4">
      {/* AI-REFINE */}
      <article className="bg-main group relative overflow-hidden rounded-lg border-1 border-[var(--text-secondary)] shadow-md">
        {/* GitHub Link Button */}
        <a
          href={Links.github.aiRefine.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-10 flex items-center space-x-2 rounded bg-[var(--text-main)] px-3 py-1 text-[var(--background)] shadow transition hover:bg-[var(--text-secondary)]"
          title="View on GitHub"
        >
          <Icon icon={Links.github.aiRefine.icon} className="h-5 w-5" />
          <span className="text-xs font-semibold">PUBLIC</span>
        </a>
        <img
          src="./images/Example.PNG"
          alt="AI-REFINE Project Thumbnail"
          className="h-full w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <section className="text-main absolute bottom-0 flex w-full translate-y-full cursor-pointer flex-col bg-[var(--cover)] p-4 transition-transform duration-500 ease-in-out group-hover:translate-y-1">
          <h1 className="text-2xl font-bold">AI-REFINE</h1>
          <p className="text-s mt-2 font-medium">
            Generate augmented data variants effortlessly, simply drag <br />
            and drop your image, then adjust the augmentation intensity to your
            preference.
          </p>
          <span className="mt-4 mb-1 text-sm font-semibold text-[var(--text-secondary)]">
            TECH STACK
          </span>
          <div className="mt-1 flex flex-row flex-wrap items-center">
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:react-outline"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Next.js
              </span>
            </div>
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:tailwind"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                TailwindCSS
              </span>
            </div>
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:nodejs"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Node.JS
              </span>
            </div>
            <div className="flex items-center space-x-2 px-2 py-1 pr-0 last:border-none">
              <Icon
                icon="mdi:database-outline"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Pocketbase
              </span>
            </div>
          </div>
          <Button />
        </section>
      </article>

      {/* HARVEST ASSISTANT */}
      <article className="bg-main group relative overflow-hidden rounded-lg border-1 border-[var(--text-secondary)] shadow-md">
        {/* GitHub Link Button */}
        <a
          href={Links.github.harvestAssistant.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-10 flex items-center space-x-2 rounded bg-[var(--text-main)] px-3 py-1 text-[var(--background)] shadow transition hover:bg-[var(--text-secondary)]"
          title="View on GitHub"
        >
          <Icon icon={Links.github.harvestAssistant.icon} className="h-5 w-5" />
          <span className="text-xs font-semibold">PUBLIC</span>
        </a>
        <img
          src="./images/Harvest.PNG"
          alt="Harvest Assistant Project Thumbnail"
          className="h-full w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <section className="text-main absolute bottom-0 flex w-full translate-y-full cursor-pointer flex-col bg-[var(--cover)] p-4 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          <h1 className="text-2xl font-bold">
            Harvest Assistant: A Smart Pest Management and Enhanced Grain
            Production
          </h1>
          <p className="text-s mt-2 font-medium">
            A thesis project developed at STI–General Santos City, designed to
            systematically <br /> bridge the gap between the City
            Agriculturist's Office and the farmers of General Santos City.
          </p>
          <span className="mt-4 mb-1 text-sm font-semibold text-[var(--text-secondary)]">
            TECH STACK
          </span>
          <div className="mt-1 flex flex-row flex-wrap items-center">
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:android"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Java
              </span>
            </div>
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:language-php"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                PHP
              </span>
            </div>
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:language-python"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Python
              </span>
            </div>
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:alpha-t-box-outline"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                TensorFlow
              </span>
            </div>
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:flask-outline"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Flask
              </span>
            </div>
            <div className="flex items-center space-x-2 px-2 py-1 pr-0 last:border-none">
              <Icon
                icon="mdi:database-outline"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                MySQL
              </span>
            </div>
          </div>
          <Button />
        </section>
      </article>
    </main>
  );
};

export default Projects;
