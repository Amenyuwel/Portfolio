import React from "react";
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiTensorflow,
  SiExpress,
  SiFigma,
} from "react-icons/si";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
} from "react-icons/fa";

const Stacks = () => (
  <main className="flex h-full w-full">
    <section className="grid h-full w-full grid-cols-4 gap-4 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-4">
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <FaJsSquare className="text-main h-12 w-12" />
        <span className="text-main text-lg font-semibold">JavaScript</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <FaReact className="text-main h-12 w-12" />
        <span className="text-lg font-semibold">React</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <FaNodeJs className="text-main h-12 w-12" />
        <span className="text-lg font-semibold">Node.js</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <SiTailwindcss className="text-main h-12 w-12" />
        <span className="text-lg font-semibold">Tailwind CSS</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <SiMongodb className="text-main h-12 w-12" />
        <span className="text-lg font-semibold">MongoDB</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <FaGitAlt className="text-main h-12 w-12" />
        <span className="text-lg font-semibold">Git</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <SiNextdotjs className="text-main h-12 w-12" />
        <span className="text-lg font-semibold">Next.js</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <SiTensorflow className="text-main h-12 w-12" />
        <span className="text-lg font-semibold">Tensor</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <FaDocker className="text-main h-12 w-12" />
        <span className="text-lg font-semibold">Docker</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <FaPython className="text-main h-12 w-12" />
        <span className="text-lg font-semibold">Python</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <SiExpress className="text-main h-12 w-12" />
        <span className="text-lg font-semibold">Express</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <SiFigma className="text-main h-12 w-12" />
        <span className="text-lg font-semibold">Figma</span>
      </div>
    </section>
  </main>
);

export default Stacks;
