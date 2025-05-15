"use client";
import React from "react";
import Collaborated from "@/components/Collaborated";
import Footer from "@/components/Footer";

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
      <Footer />
    </main>
  );
};

export default CollabPage;
