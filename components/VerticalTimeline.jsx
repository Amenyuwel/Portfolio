"use client";
import React from "react";

const VerticalTimeline = ({ items }) => {
  return (
    // VERTICAL LINE
    <div className="relative h-[62%]">
      <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-[var(--text-secondary)]"></div>

      {items.map((item, index) => (
        <div key={index} className="relative pb-12 pl-12">
          {/* Timeline Dot */}
          <div className="absolute left-1 flex h-8 w-8 transform items-center justify-center rounded-full bg-[var(--opposite)]">
            <div className="h-4 w-4 transform cursor-pointer rounded-full bg-[var(--background)] hover:bg-[var(--highlight)]"></div>
          </div>

          {/* Content */}
          <div className="ml-8">
            <h1 className="text-main text-3xl font-bold">{item.title}</h1>
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
