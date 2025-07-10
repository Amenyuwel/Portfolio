"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VerticalTimeline = ({ items }) => {
  const ref = useRef(null);

  // Track scroll progress of the timeline container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate the vertical line's scaleY from 0 to 1 as you scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative min-h-[80vh]">
      {/* Animated vertical line, limiting the line for 94%*/}
      <motion.div
        className="absolute top-0 bottom-0 left-4.5 w-1 origin-top bg-[var(--highlight)] max-h-[91%]"
        style={{ scaleY }}
      />

      {items.map((item, index) => (
        <div key={index} className="relative pb-12 pl-12">
          {/* Timeline Dot */}
          <div className="absolute left-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--opposite)]">
            <div className="h-4 w-4 cursor-pointer rounded-full bg-[var(--background)] hover:bg-[var(--highlight)]"></div>
          </div>

          {/* Content */}
          <div className="ml-8">
            <h1 className="text-main text-2xl sm:text-3xl font-bold">{item.title}</h1>
            <h2 className="text-lg font-semibold">{item.role}</h2>
            <p className="text-[var(--text-secondary)]">{item.period}</p>
            <p className="mt-2 font-medium">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
