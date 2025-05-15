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

const Stacks = () => {
  return (
    <main className="flex h-full w-full">
      <section className="grid h-full w-full grid-cols-4 gap-4 rounded-lg border-1 border-[var(--text-secondary)] bg-[var(--background)] p-4">
        {/* Tech Stack Items */}
        <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-[var(--text-secondary)] bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105 hover:bg-yellow-400">
          <FaJsSquare className="text-main h-12 w-12" />
          <span className="text-main text-lg font-semibold">JavaScript</span>
        </div>
        <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-[var(--text-secondary)] bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105 hover:bg-blue-400">
          <FaReact className="text-main h-12 w-12" />
          <span className="text-lg font-semibold">React</span>
        </div>
        <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-[var(--text-secondary)] bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105 hover:bg-green-400">
          <FaNodeJs className="text-main h-12 w-12" />
          <span className="text-lg font-semibold">Node.js</span>
        </div>
        <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-[var(--text-secondary)] bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105 hover:bg-teal-400">
          <SiTailwindcss className="text-main h-12 w-12" />
          <span className="text-lg font-semibold">Tailwind CSS</span>
        </div>
        <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-[var(--text-secondary)] bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105 hover:bg-green-500">
          <SiMongodb className="text-main h-12 w-12" />
          <span className="text-lg font-semibold">MongoDB</span>
        </div>
        <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-[var(--text-secondary)] bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105 hover:bg-orange-400">
          <FaGitAlt className="text-main h-12 w-12" />
          <span className="text-lg font-semibold">Git</span>
        </div>
        <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-[var(--text-secondary)] bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105 hover:bg-gray-400">
          <SiNextdotjs className="text-main h-12 w-12" />
          <span className="text-lg font-semibold">Next.js</span>
        </div>
        <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-[var(--text-secondary)] bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105 hover:bg-yellow-500">
          <SiTensorflow className="text-main h-12 w-12" />
          <span className="text-lg font-semibold">Tensor</span>
        </div>
        <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-[var(--text-secondary)] bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105 hover:bg-blue-500">
          <FaDocker className="text-main h-12 w-12" />
          <span className="text-lg font-semibold">Docker</span>
        </div>
        <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-[var(--text-secondary)] bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105 hover:bg-blue-400">
          <FaPython className="text-main h-12 w-12" />
          <span className="text-lg font-semibold">Python</span>
        </div>
        <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-[var(--text-secondary)] bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105 hover:bg-red-400">
          <SiExpress className="text-main h-12 w-12" />
          <span className="text-lg font-semibold">Express</span>
        </div>
        <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border border-[var(--text-secondary)] bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105 hover:bg-purple-400">
          <SiFigma className="text-main h-12 w-12" />
          <span className="text-lg font-semibold">Figma</span>
        </div>
      </section>
    </main>
  );
};

export default Stacks;
