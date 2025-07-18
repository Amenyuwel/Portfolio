"use client";
import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollUp = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="hover-animate-updown flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm bg-[var(--opposite)] ease-out"
    >
      <FaAngleDoubleUp className="h-6 w-6 text-[var(--background)]" />
    </button>
  );
};

export default ScrollUp;
