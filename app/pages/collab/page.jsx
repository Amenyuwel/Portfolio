"use client";
import React from "react";
import Collaborated from "@/components/Collaborated";
import Footer from "@/components/Footer";
import { FaAngleDoubleUp } from "react-icons/fa";

const CollabPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[var(--background)]">
      <section className="mb-8 flex h-full w-[45%] flex-col">
        <article className="mb-8">
          <h1 className="text-main w-full bg-[var(--background)] py-8 text-left text-5xl font-bold">
            My Contributions
          </h1>
        </article>
        <Collaborated />
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

export default CollabPage;
