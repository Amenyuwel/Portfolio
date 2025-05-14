"use client";
import React from "react";
import VerticalTimeline from "@/components/VerticalTimeline";
import timelineItems from "./data/descriptions"; // Fixed import path

const ExperiencePage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-[var(--background)]">
      <section className="flex h-full w-[45%] justify-items-start bg-[var(--background)]">
        <section className="h-full w-full py-8">
          <h1 className="text-main mb-8 w-full bg-[var(--background)] py-8 text-left text-5xl font-bold">
            My Experiences
          </h1>
          {/* Pass timelineItems to VerticalTimeline */}
          <VerticalTimeline items={timelineItems} />
        </section>
      </section>
    </main>
  );
};

export default ExperiencePage;
