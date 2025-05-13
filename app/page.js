"use client";
import React, { useRef } from "react";
import "@fontsource/poppins"; 
import "@fontsource/playfair-display";
import Header from "@/components/Header";
import LandingPage from "@/app/pages/landing/page";
import AboutPage from "@/app/pages/about/page";
import ExperiencePage from "@/app/pages/experience/page";
import ContactPage from "@/app/pages/contact/page";

const page = () => {
  return (
    <div>
      <Header />
      <section id="landing">
        <LandingPage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="experience">
        <ExperiencePage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </div>
  );
};

export default page;
