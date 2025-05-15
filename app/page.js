"use client";
import React, { useRef } from "react";
import "@fontsource/poppins";
import "@fontsource/playfair-display";
import Header from "@/components/Header";
import LandingPage from "@/app/pages/landing/page";
import ProjectPage from "@/app/pages/projects/page";
import ExperiencePage from "@/app/pages/experience/page";
import CollabPage from "@/app/pages/collab/page";

const page = () => {
  return (
    <div>
      <Header />
      <section id="landing">
        <LandingPage />
      </section>
      <section id="experience">
        <ExperiencePage />
      </section>
      <section id="project">
        <ProjectPage />
      </section>
      <section id="collab">
        <CollabPage />
      </section>
    </div>
  );
};

export default page;
