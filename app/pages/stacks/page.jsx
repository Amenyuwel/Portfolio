"use client";
import React from "react";
import Stacks from "@/components/Stacks";
import ScrollUp from "@/components/ScrollUp";
import Footer from "@/components/Footer";

const StackPage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <section className="container mt-10 flex h-full w-full flex-col px-4 sm:w-full md:w-screen lg:w-full xl:w-full">
        <article className="mb-8">
          <h2 className="text-main text-left text-4xl font-bold sm:text-5xl">
            My Tech Stacks
          </h2>
        </article>
        <Stacks />
        <div className="flex justify-center items-center p-10">
          <ScrollUp />
        </div>
      </section>
    </main>
  );
};

export default StackPage;
