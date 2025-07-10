import React from "react";
import { Icon } from "@iconify/react";

const Stacks = () => (
  <main className="flex h-full w-full">
    <section className="grid h-full w-full grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-4">
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:javascript" className="h-12 w-12" />
        <span className="text-main text-lg font-semibold">JavaScript</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:react" className="h-12 w-12" />
        <span className="text-lg font-semibold">React</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:nodejs" className="h-12 w-12" />
        <span className="text-lg font-semibold">Node.js</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:tailwindcss-icon" className="h-12 w-12" />
        <span className="text-lg font-semibold">Tailwind CSS</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:mongodb-icon" className="h-12 w-12" />
        <span className="text-lg font-semibold">MongoDB</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:git-icon" className="h-12 w-12" />
        <span className="text-lg font-semibold">Git</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:nextjs-icon" className="h-12 w-12" />
        <span className="text-lg font-semibold">Next.js</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:tensorflow" className="h-12 w-12" />
        <span className="text-lg font-semibold">TensorFlow</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:docker-icon" className="h-12 w-12" />
        <span className="text-lg font-semibold">Docker</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:python" className="h-12 w-12" />
        <span className="text-lg font-semibold">Python</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="simple-icons:express" className="h-12 w-12" />
        <span className="text-lg font-semibold">Express</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:figma" className="h-12 w-12" />
        <span className="text-lg font-semibold">Figma</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:java" className="h-12 w-12" />
        <span className="text-lg font-semibold">Java</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:flask" className="h-12 w-12" />
        <span className="text-lg font-semibold">Flask</span>
      </div>
      <div className="flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg border-1 border-gray-700 bg-[var(--background)] p-6 shadow-xl transition-transform hover:scale-105">
        <Icon icon="logos:slack-icon" className="h-12 w-12" />
        <span className="text-lg font-semibold">Slack</span>
      </div>
    </section>
  </main>
);

export default Stacks;
