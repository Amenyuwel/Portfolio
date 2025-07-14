import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex w-screen flex-col items-center justify-center bg-[var(--background)] py-6 text-white">
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/Amenyuwel"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg p-2 text-white hover:text-gray-300"
          aria-label="GitHub Profile"
        >
          <FaGithub className="h-8 w-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/amenyuwel/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg p-2 text-white hover:text-gray-300"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="h-8 w-8" />
        </a>
      </div>
      <span className="mt-4 text-center text-sm">
        &copy; 2025 Emmanuel D Malagamba. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
