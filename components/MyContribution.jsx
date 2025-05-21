import React from "react";
import { Icon } from "@iconify/react";
import Links from "@/components/Links";
import Button from "@/components/LearnMore";

const MyContribution = () => {
  return (
    <main className="bg-main mb-8 grid h-full w-full flex-grow grid-cols-1 gap-4 rounded-lg">
      {/* STI Thesis Library Portal */}
      <article className="bg-main group relative overflow-hidden rounded-lg shadow-xl shadow-[rgba(0,0,0,0.2)]">
        {/* GitHub Link Button */}
        <a
          href={Links.github.thesisLibrary.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-10 flex items-center space-x-2 rounded bg-[var(--text-main)] px-3 py-1 text-[var(--background)] shadow transition hover:bg-[var(--text-secondary)]"
          title="View on GitHub"
        >
          <Icon icon={Links.github.thesisLibrary.icon} className="h-5 w-5" />
          <span className="text-xs font-semibold">PRIVATE</span>
        </a>
        <img
          src="./images/Thesis Library.PNG"
          alt="ICT-Thesis Library Portal Thumbnail"
          className="h-full w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <section className="text-main absolute bottom-0 flex w-full translate-y-full cursor-pointer flex-col bg-[var(--cover)] p-4 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          <h1 className="text-2xl font-bold">ICT-Thesis Library Portal</h1>
          <p className="text-s mt-2 font-medium">
            Contributed to the development of a library portal for the <br />
            ICT department at STI College, General Santos City.
          </p>
          <span className="mt-4 mb-1 text-sm font-semibold text-[var(--text-secondary)]">
            TECH STACK
          </span>
          <div className="mt-1 flex flex-row flex-wrap items-center">
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:react-outline"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                React
              </span>
            </div>
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:tailwind"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                TailwindCSS
              </span>
            </div>
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:nodejs"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Node.JS
              </span>
            </div>
            <div className="flex items-center space-x-2 px-2 py-1 pr-0 last:border-none">
              <Icon
                icon="mdi:database-outline"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Pocketbase
              </span>
            </div>
          </div>
          <Button href="pages/learn-more/thesis-library" />
        </section>
      </article>

      {/* Kave Pharmacy */}
      <article className="bg-main group relative overflow-hidden rounded-lg shadow-xl shadow-[rgba(0,0,0,0.2)]">
        {/* GitHub Link Button */}
        <a
          href={Links.github.kavePharmacy.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-10 flex items-center space-x-2 rounded bg-[var(--text-main)] px-3 py-1 text-[var(--background)] shadow transition hover:bg-[var(--text-secondary)]"
          title="View on GitHub"
        >
          <Icon icon={Links.github.kavePharmacy.icon} className="h-5 w-5" />
          <span className="text-xs font-semibold">PRIVATE</span>
        </a>
        <img
          src="./images/Kave Pharmacy.PNG"
          alt="Kave Pharmacy Thumbnail"
          className="h-full w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <section className="text-main absolute bottom-0 flex w-full translate-y-full cursor-pointer flex-col bg-[var(--cover)] p-4 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          <h1 className="text-2xl font-bold">Kave Pharmacy</h1>
          <p className="text-s mt-2 font-medium">
            Contributed to the development of a POS system <br />
            for Kave Pharmacy during my internship at Kave Guild: Your Web3
            Ally.
          </p>
          <span className="mt-4 mb-1 text-sm font-semibold text-[var(--text-secondary)]">
            TECH STACK
          </span>
          <div className="mt-1 flex flex-row flex-wrap items-center">
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:lightning-bolt-outline"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Vite
              </span>
            </div>
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:alpha-e-circle-outline"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Express
              </span>
            </div>
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:tailwind"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                TailwindCSS
              </span>
            </div>
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:nodejs"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Node.JS
              </span>
            </div>
            <div className="flex items-center space-x-2 border-r border-[var(--text-secondary)] px-2 py-1 pr-3 last:border-none">
              <Icon
                icon="mdi:database-outline"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                MongoDB
              </span>
            </div>
            <div className="flex items-center space-x-2 px-2 py-1 pr-0 last:border-none">
              <Icon
                icon="mdi:database-outline"
                className="h-5 w-5 text-[var(--text-secondary)]"
              />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                MySQL
              </span>
            </div>
          </div>
          <Button href="pages/learn-more/kave-pharmacy" />
        </section>
      </article>
    </main>
  );
};

export default MyContribution;
