import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto flex h-40 w-full flex-col items-center justify-center bg-[var(--background)] text-[var(--opposite)]">
      <div
        style={{ width: "100%", borderTop: "1px solid var(--text-secondary)" }}
        className="mt-4"
      ></div>
      <div className="mt-4 flex space-x-4">
        <a
          href="https://github.com/Amenyuwel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-main rounded-lg p-2"
          aria-label="GitHub Profile"
        >
          <FaGithub className="h-8 w-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/amenyuwel/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-main rounded-lg p-2"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="h-8 w-8" />
        </a>
      </div>
      <p className="mt-4 text-sm">
        &copy; 2025 Emmanuel D Malagamba. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
