"use client";
import React from "react";
import VerticalTimeline from "@/components/VerticalTimeline";
import timelineItems from "./data/descriptions";

const ExperiencePage = () => {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center">
      <section className="container mx-auto px-4 py-8 lg:w-[65%] xl:w-[40%]">
        <h1 className="text-main mb-8 text-left text-4xl font-bold sm:text-5xl ml-4">
          My Experience
        </h1>
        <VerticalTimeline items={timelineItems} />
      </section>
    </main>
  );
};

export default ExperiencePage;
