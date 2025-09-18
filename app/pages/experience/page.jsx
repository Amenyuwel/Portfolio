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

      <main className="flex h-full w-full flex-col items-center justify-center py-8">
        <section className="mb-8 flex h-full w-full max-w-full flex-col container mx-auto px-4 lg:w-[60%] xl:w-[60%]">
          <article className="mb-8">
            <h2 className="text-main text-left text-4xl font-bold sm:text-5xl">
              My Experience
            </h2>
          </article>
          <div className="bg-main mb-8 w-full rounded-lg p-6">
            <VerticalTimeline items={timelineItems} />
          </div>
        </section>
      </main>
    </>
  );
};

export default ExperiencePage;
