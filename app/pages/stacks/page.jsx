import React from "react";
import Stacks from "@/components/Stacks";
import Footer from "@/components/Footer";

const StackPage = () => {
  return (
    <main className="h-full w-full bg-[var(--background)] px-4 py-6 md:py-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-6 md:mb-8">
          <h1 className="text-main text-4xl font-bold md:text-5xl">
            My Tech Stacks
          </h1>
        </header>
        <Stacks />
      </div>
      <Footer/>
    </main>
  );
};

export default StackPage;
