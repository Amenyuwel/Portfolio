import React from "react";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPocketbase,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import Button from "@/components/Button";

const Collaborated = () => {
  return (
    <main className="bg-main mb-8 grid h-full w-full flex-grow grid-cols-1 gap-4 rounded-lg border-1 border-[var(--text-secondary)] p-4">
      {/* STI Thesis Library Portal */}
      <article className="bg-main group relative overflow-hidden rounded-lg border-1 border-[var(--text-secondary)] shadow-md">
        <img
          src="./images/Thesis Library.PNG"
          alt="ICT-Thesis Library Portal Thumbnail"
          className="h-full w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <section className="text-main absolute bottom-0 flex w-full translate-y-full cursor-pointer flex-col bg-[var(--cover)] p-4 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          <h1 className="text-2xl font-bold">ICT-Thesis Library Portal</h1>
          <div className="mt-2 flex items-center space-x-4">
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiNextdotjs className="h-10 w-5" />
              <span className="text-sm font-medium">Next.js</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiTailwindcss className="h-10 w-5" />
              <span className="text-sm font-medium">TailwindCSS</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiNodedotjs className="h-10 w-5" />
              <span className="text-sm font-medium">Node.JS</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiPocketbase className="h-10 w-5" />
              <span className="text-sm font-medium">Pocketbase</span>
            </div>
          </div>
          <p className="mt-2 text-sm font-medium">
            Contributed to the development of a library portal for the <br />{" "}
            ICT department at STI College, General Santos City.
          </p>
          <Button />
        </section>
      </article>

      {/* Kave Pharmacy */}
      <article className="bg-main group relative overflow-hidden rounded-lg border-1 border-[var(--text-secondary)] shadow-md">
        <img
          src="./images/Kave Pharmacy.PNG"
          alt="Kave Pharmacy Thumbnail"
          className="h-full w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <section className="text-main absolute bottom-0 flex w-full translate-y-full cursor-pointer flex-col bg-[var(--cover)] p-4 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          <h1 className="text-lg font-bold">Kave Pharmacy</h1>
          <div className="mt-2 flex items-center space-x-4">
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiVite className="h-10 w-5" />
              <span className="text-sm font-medium">Vite</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiExpress className="h-10 w-5" />
              <span className="text-sm font-medium">Express</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiTailwindcss className="h-10 w-5" />
              <span className="text-sm font-medium">TailwindCSS</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiNodedotjs className="h-10 w-5" />
              <span className="text-sm font-medium">Node.JS</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiMongodb className="h-10 w-5" />
              <span className="text-sm font-medium">MongoDB</span>
            </div>
            <div className="flex items-center space-x-1 rounded-lg border-1 border-[var(--opposite)] p-2">
              <SiMysql className="h-10 w-15" />
            </div>
          </div>
          <p className="mt-2 text-sm font-medium">
            Contributed to the development of a POS system <br /> for Kave
            Pharmacy during my internship at Kave Guild: Your Web3 Ally.
          </p>
          <Button />
        </section>
      </article>
    </main>
  );
};

export default Collaborated;
