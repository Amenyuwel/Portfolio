"use client";
import React from "react";
import MyContribution from "@/components/MyContribution";

const ContributionPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[var(--background)]">
      <section className="mb-8 flex h-full w-full max-w-3xl flex-col">
        <article className="mb-8">
          <h1 className="text-main w-full bg-[var(--background)] text-left text-5xl font-bold">
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
