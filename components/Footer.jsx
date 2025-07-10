import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto flex h-40 w-full flex-col items-center justify-center text-[var(--opposite)]">
      <div className="mt-4" />
      <div className="mt-4 flex space-x-4 justify-center">
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
      <span className="mt-4 text-sm text-center">
        &copy; 2025 Emmanuel D Malagamba. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
