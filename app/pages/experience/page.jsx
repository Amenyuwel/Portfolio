"use client";
import React from "react";
import VerticalTimeline from "@/components/VerticalTimeline";
import timelineItems from "./data/descriptions";

const ExperiencePage = () => {
  // Work Experience Structured Data
  const workExperienceSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emmanuel D. Malagamba",
    workExperience: timelineItems.map((item) => ({
      "@type": "WorkExperience",
      jobTitle: item.role,
      employer: {
        "@type": "Organization",
        name: item.title,
      },
      description: item.description.join(". "),
      startDate: item.period.split(" – ")[0],
      endDate: item.period.includes("Present")
        ? new Date().toISOString().split("T")[0]
        : item.period.split(" – ")[1],
    })),
  };

  return (
    <>
      {/* Work Experience Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workExperienceSchema),
        }}
      />

      <main className="flex min-h-screen w-full items-center justify-center">
        <section className="container mx-auto w-full max-w-full px-4 py-8 lg:w-[67%] xl:w-full">
          <h2 className="text-main mb-8 ml-4 text-left text-4xl font-bold sm:text-5xl">
            My Experience
          </h2>
          <VerticalTimeline items={timelineItems} />
        </section>
      </main>
    </>
  );
};

export default ExperiencePage;
