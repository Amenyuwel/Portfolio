import React from "react";
import Stacks from "@/components/Stacks";
import ScrollUp from "@/components/ScrollUp";
import Footer from "@/components/Footer";

const StackPage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <section className="container mt-10 flex h-full w-full flex-col px-4 sm:w-full md:w-full lg:w-[85%] xl:w-full">
        <article className="mb-8">
          <h1 className="text-main text-left text-4xl font-bold sm:text-5xl">
            My Tech Stacks
          </h1>
        </article>
        <Stacks />
        <div className="flex w-full justify-end">
          <button className="h-8 w-16 cursor-pointer rounded-lg font-semibold text-[var(--opposite)] underline">
            MORE
          </button>
        </div>
        <div className="place-items-center p-10">
          <ScrollUp />
        </div>
      </section>
    </main>
  );
};

export default StackPage;
