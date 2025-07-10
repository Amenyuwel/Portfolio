"use client";
import React, { useRef } from "react";
import "@fontsource/poppins";
import "@fontsource/playfair-display";
import Header from "@/components/Header";
import LandingPage from "@/app/pages/landing/page";
import ProjectPage from "@/app/pages/projects/page";
import ExperiencePage from "@/app/pages/experience/page";
import ContributionPage from "@/app/pages/contribution/page";
import StacksPage from "@/app/pages/stacks/page";
import ContactPage from "@/app/pages/contact/page";

const page = () => {
  return (
    <div className="w-full min-w-0 flex flex-col items-center justify-center overflow-x-hidden">
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
      <section id="contribution">
        <ContributionPage />
      </section>
      <section id="stacks">
        <StacksPage />
      </section>
    </div>
  );
};

export default page;
