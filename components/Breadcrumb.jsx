"use client";
import React from "react";
import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

const Breadcrumb = ({ items }) => {
  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://amenyuwel.netlify.app/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href && { "item": `https://amenyuwel.netlify.app${item.href}` })
      }))
    ]
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      <nav aria-label="Breadcrumb" className="flex mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors"
            aria-label="Home"
          >
            <HomeIcon className="h-4 w-4 mr-1" />
            Home
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRightIcon className="h-4 w-4 text-[var(--text-secondary)] mx-2" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--text-main)] font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
    </>
  );
};

export default Breadcrumb;
