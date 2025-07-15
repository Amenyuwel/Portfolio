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
    <div ref={ref} className="relative h-full w-full">
      {/* Animated vertical line, limiting the line for 94%*/}
      <motion.div
        className="absolute top-0 bottom-0 left-4.5 ml-4 w-1 origin-top rounded-xl"
        style={{
          scaleY,
          background: "linear-gradient(to bottom, #2c2c2c, #4f86f7)", // blue to dark gray
        }}
      />

      {items.map((item, index) => (
        <div key={index} className="relative pb-12 pl-12">
          {/* Timeline Dot */}
          <div className="absolute left-1 ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--opposite)]">
            <div className="h-4 w-4 cursor-pointer rounded-full bg-[var(--background)] hover:bg-[var(--highlight)]"></div>
          </div>

          {/* Content */}
          <div className="ml-4 pr-4">
            <h1 className="text-main text-2xl font-bold sm:text-3xl">
              {item.title}
            </h1>
            <h2 className="text-lg font-semibold">{item.role}</h2>
            <p className="text-[var(--text-secondary)]">{item.period}</p>
            <ul className="mt-2 list-disc pr-2 pl-4 text-justify text-[var(--text-secondary)]">
              {item.description.map((desc, idx) => (
                <li key={idx} className="font-medium">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
