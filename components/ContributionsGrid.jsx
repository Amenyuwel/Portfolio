"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { contributions } from "@/app/newContribution"; // Import contributions data
import Button from "@/components/LearnMore";

const ContributionsGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 h-full w-full">
      {contributions.map((contribution, index) => (
        <article
          key={index}
          className="bg-main group relative overflow-hidden rounded-lg shadow-xl shadow-[rgba(0,0,0,0.2)]"
        >
          {/* GitHub Link Button */}
          <a
            href={contribution.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 z-10 flex items-center space-x-2 rounded bg-[var(--text-main)] px-3 py-1 text-[var(--background)] shadow transition hover:bg-[var(--text-secondary)]"
            title="View on GitHub"
          >
            <Icon icon="mdi:github" className="h-5 w-5" />
            <span className="text-xs font-semibold">
              {contribution.isPrivate ? "PRIVATE" : "PUBLIC"}
            </span>
          </a>
          <img
            src={contribution.image}
            alt={`${contribution.title} Thumbnail`}
            className="h-full w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <section className="text-main absolute bottom-0 flex w-full translate-y-full cursor-pointer flex-col bg-[var(--cover)] p-4 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
            <h3 className="text-2xl font-bold">{contribution.title}</h3>
            <p className="text-s mt-2 font-medium">{contribution.description}</p>
            <span className="mt-4 mb-1 text-sm font-semibold text-[var(--text-secondary)]">
              TECH STACK
            </span>
            <div className="mt-1 flex flex-row flex-wrap items-center">
              {contribution.techStack.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none"
                >
                  <Icon
                    icon={tech.icon}
                    className="h-5 w-5 text-[var(--text-secondary)]"
                  />
                  <span className="text-sm font-medium text-[var(--text-secondary)]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            <Button href={contribution.learnMorePath} />
          </section>
        </article>
      ))}
    </div>
  );
};

export default ContributionsGrid;
