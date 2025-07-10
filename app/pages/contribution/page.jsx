"use client";
import React from "react";
import MyContribution from "@/components/MyContribution";

const ContributionPage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <section className="mb-8 flex h-full w-full flex-col container mx-auto px-4 sm:w-full lg:w-[50%]">
        <article className="mb-8">
          <h1 className="text-main text-left text-4xl font-bold sm:text-5xl">
            My Contributions
          </h1>
        </article>
        <MyContribution />
        <div className="flex w-full justify-end">
          <button className="h-8 w-16 cursor-pointer rounded-lg font-semibold text-[var(--opposite)] underline">
            MORE
          </button>
        </div>
      </section>
    </main>
  );
};

export default ContributionPage;
