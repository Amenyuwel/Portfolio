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
  FaGithub,
  FaLinkedin,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
} from "react-icons/fa";

const Stacks = () => {
  return (
    <main>
      <section className="h-full w-full bg-[var(--background)] grid grid-cols-5 gap-2 p-2">
        {/* Tech Stack Items */}
        <div className="flex items-center space-x-4 bg-[var(--background)] p-4 rounded-lg shadow-xl border-1 border-gray-700 cursor-pointer hover:bg-yellow-400">
          <FaJsSquare className="h-10 w-10 text-main" />
          <span className="text-xl font-semibold text-main">JavaScript</span>
        </div>
        <div className="flex items-center space-x-4 bg-[var(--background)] p-4 rounded-lg shadow-xl border-1 border-gray-700 cursor-pointer hover:bg-blue-400">
          <FaReact className="h-10 w-10 text-main" />
          <span className="text-xl font-semibold">React</span>
        </div>
        <div className="flex items-center space-x-4 bg-[var(--background)] p-4 rounded-lg shadow-xl border-1 border-gray-700 cursor-pointer hover:bg-green-400">
          <FaNodeJs className="h-10 w-10 text-main" />
          <span className="text-xl font-semibold">Node.js</span>
        </div>
        <div className="flex items-center space-x-4 bg-[var(--background)] p-4 rounded-lg shadow-xl border-1 border-gray-700 cursor-pointer hover:bg-teal-400">
          <SiTailwindcss className="h-10 w-10 text-main" />
          <span className="text-xl font-semibold">Tailwind CSS</span>
        </div>
        <div className="flex items-center space-x-4 bg-[var(--background)] p-4 rounded-lg shadow-xl border-1 border-gray-700 cursor-pointer hover:bg-green-500">
          <SiMongodb className="h-10 w-10 text-main" />
          <span className="text-xl font-semibold">MongoDB</span>
        </div>
        <div className="flex items-center space-x-4 bg-[var(--background)] p-4 rounded-lg shadow-xl border-1 border-gray-700 cursor-pointer hover:bg-orange-400">
          <FaGitAlt className="h-10 w-10 text-main" />
          <span className="text-xl font-semibold">Git</span>
        </div>
        <div className="flex items-center space-x-4 bg-[var(--background)] p-4 rounded-lg shadow-xl border-1 border-gray-700 cursor-pointer hover:bg-gray-400">
          <SiNextdotjs className="h-10 w-10 text-main" />
          <span className="text-xl font-semibold">Next.js</span>
        </div>
        <div className="flex items-center space-x-4 bg-[var(--background)] p-4 rounded-lg shadow-xl border-1 border-gray-700 cursor-pointer hover:bg-yellow-500">
          <SiTensorflow className="h-10 w-10 text-main" />
          <span className="text-xl font-semibold">Tensor</span>
        </div>
        <div className="flex items-center space-x-4 bg-[var(--background)] p-4 rounded-lg shadow-xl border-1 border-gray-700 cursor-pointer hover:bg-blue-500">
          <FaDocker className="h-10 w-10 text-main" />
          <span className="text-xl font-semibold">Docker</span>
        </div>
        <div className="flex items-center space-x-4 bg-[var(--background)] p-4 rounded-lg shadow-xl border-1 border-gray-700 cursor-pointer hover:bg-blue-400">
          <FaPython className="h-10 w-10 text-main" />
          <span className="text-xl font-semibold">Python</span>
        </div>
        <div className="flex items-center space-x-4 bg-[var(--background)] p-4 rounded-lg shadow-xl border-1 border-gray-700 cursor-pointer hover:bg-red-400">
          <SiExpress className="h-10 w-10 text-main" />
          <span className="text-xl font-semibold">Express</span>
        </div>
        <div className="flex items-center space-x-4 bg-[var(--background)] p-4 rounded-lg shadow-xl border-1 border-gray-700 cursor-pointer hover:bg-purple-400">
          <SiFigma className="h-10 w-10 text-main" />
          <span className="text-xl font-semibold">Figma</span>
        </div>
      </section>
    </main>
  );
};

export default Stacks;
