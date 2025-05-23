"use client";
// This directive ensures the component is rendered on the client side, which is necessary for browser-specific APIs like `canvas`.

import { useEffect, useRef } from "react";
// `useEffect` is used for side effects (e.g., setting up event listeners), and `useRef` is used to reference the canvas DOM element.

export default function HeroPattern({
  dotSize = 1.5,
  dotColor = "rgba(229, 231, 235, 0.3)",
  spacing = 30,
}) {
  // The component accepts `dotSize` and `dotColor` as props with default values for flexibility.

  const canvasRef = useRef(null);
  // A ref is created to directly access the canvas DOM element.

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    // Access the 2D rendering context of the canvas.

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // Set display size (css pixels)
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      // Scale context to account for high DPI displays
      ctx.scale(dpr, dpr);

      drawPattern();
      // Resize the canvas to match the window size and redraw the pattern.
    };

    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Clear the canvas before drawing to avoid overlapping patterns.

      // Perfect grid alignment - no randomization
      for (let x = 0; x < window.innerWidth; x += spacing) {
        for (let y = 0; y < window.innerHeight; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          // Draw a circle (dot) at the current position with the specified size.
          ctx.fillStyle = dotColor;
          // Set the fill color for the dot.
          ctx.fill();
          // Fill the dot with the specified color.
        }
      }
    };

    window.addEventListener("resize", resizeCanvas);
    // Add an event listener to handle window resizing and redraw the pattern.

    resizeCanvas();
    // Initial call to set the canvas size and draw the pattern.

    return () => window.removeEventListener("resize", resizeCanvas);
    // Cleanup: Remove the resize event listener when the component unmounts.
  }, [dotSize, dotColor, spacing]);
  // Dependencies: Re-run the effect if `dotSize` or `dotColor` changes.

  return (
    <canvas
      ref={canvasRef}
      // Attach the ref to the canvas element.
      className="fixed inset-0 -z-10 h-full w-full opacity-80"
      // Tailwind CSS classes for positioning and layering.
      style={{
        position: "fixed",
        pointerEvents: "none",
        top: 0,
        left: 0,
      }}
    />
  );
}
