"use client";
// This directive ensures the component is rendered on the client side, which is necessary for browser-specific APIs like `canvas`.

import { useEffect, useRef, useMemo } from "react";
// `useEffect` is used for side effects (e.g., setting up event listeners), and `useRef` is used to reference the canvas DOM element.

export default function HeroPattern({
  dotSize = 1.5,
  dotColor = "rgba(229, 231, 235, 0.3)",
  spacing = 30,
}) {
  // The component accepts `dotSize` and `dotColor` as props with default values for flexibility.

  const canvasRef = useRef(null);
  // A ref is created to directly access the canvas DOM element.

  // Memoize the gradient pattern to prevent recalculation on every render
  const gradientPattern = useMemo(() => {
    const corners = [
      "0 0",
      "100% 0",
      "100% 100%",
      "0 100%",
    ]
      .map((position) => `radial-gradient(circle at ${position}, transparent 0%, black 30%)`)
      .join(",");
    return corners;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;

    const drawPattern = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update canvas dimensions
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Scale context and clear
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Batch drawing operations
      ctx.beginPath();
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          ctx.moveTo(x + dotSize, y);
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        }
      }
      ctx.fillStyle = dotColor;
      ctx.fill();
    };

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(drawPattern);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotSize, dotColor, spacing]);
  // Dependencies: Re-run the effect if `dotSize` or `dotColor` changes.

  return (
    <div className="fixed inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-80"
        style={{
          position: "fixed",
          pointerEvents: "none",
          top: 0,
          left: 0,
          WebkitMask: gradientPattern,
          mask: gradientPattern,
          filter: "blur(0.5px)",
        }}
      />
    </div>
  );
}
