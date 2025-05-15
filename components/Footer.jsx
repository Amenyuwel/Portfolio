import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto flex h-40 w-full flex-col items-center justify-center bg-[var(--background)] text-[var(--opposite)]">
      <div
        style={{ width: "45%", borderTop: "1px solid var(--text-secondary)" }}
        className="mt-4"
      ></div>
      <div className="mt-4 flex space-x-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          Twitter
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          LinkedIn
        </a>
      </div>
      <p className="mt-4 text-sm">
        &copy; 2025 Emmanuel D Malagamba. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
