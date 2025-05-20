"use client";
import React from "react";
import MyContribution from "@/components/MyContribution";
import Footer from "@/components/Footer";
import { FaAngleDoubleUp } from "react-icons/fa";
import Button from "@/components/LearnMore";

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
          <button className="p-2 cursor-pointer rounded-lg bg-[var(--highlight)] text-[var(--text-white)]">
            VIEW MORE
          </button>
        </div>
      </section>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover-animate-updown flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm bg-[var(--opposite)] ease-out"
      >
        <FaAngleDoubleUp className="h-6 w-6 text-[var(--background)]" />
      </button>
      <Footer />
    </main>
  );
};

export default ContributionPage;
