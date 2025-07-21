import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc = "images/Profile.jpg",
  altText = "Emmanuel D. Malagamba",
  captionText = "Full-Stack Developer",
  maxWidth = 200, // Maximum width constraint
  maxHeight = 200, // Maximum height constraint
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 150,
    height: 150,
    isLoaded: false
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  // Load image and calculate optimal dimensions
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const { naturalWidth, naturalHeight } = img;
      const aspectRatio = naturalWidth / naturalHeight;
      
      let width, height;
      
      // Calculate dimensions while maintaining aspect ratio and respecting max constraints
      if (aspectRatio > 1) {
        // Landscape image
        width = Math.min(maxWidth, naturalWidth);
        height = width / aspectRatio;
        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }
      } else {
        // Portrait or square image
        height = Math.min(maxHeight, naturalHeight);
        width = height * aspectRatio;
        if (width > maxWidth) {
          width = maxWidth;
          height = width / aspectRatio;
        }
      }
      
      setImageDimensions({
        width: Math.round(width),
        height: Math.round(height),
        isLoaded: true
      });
    };
    
    img.src = imageSrc;
  }, [imageSrc, maxWidth, maxHeight]);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  // Show loading placeholder until image dimensions are calculated
  if (!imageDimensions.isLoaded) {
    return (
      <div className="flex items-center justify-center" style={{ width: maxWidth, height: maxHeight }}>
        <div className="animate-pulse bg-gray-200 rounded-[15px]" style={{ width: 150, height: 150 }} />
      </div>
    );
  }

  return (
    <figure
      ref={ref}
      className="relative flex h-full w-full flex-col items-center justify-center [perspective:800px]"
      style={{
        height: `${imageDimensions.height}px`,
        width: `${imageDimensions.width}px`,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 block text-center text-sm sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: `${imageDimensions.width}px`,
          height: `${imageDimensions.height}px`,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 [transform:translateZ(0)] rounded-[15px] will-change-transform"
          style={{
            width: `${imageDimensions.width}px`,
            height: `${imageDimensions.height}px`,
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] [transform:translateZ(30px)] will-change-transform">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute top-0 left-0 z-[3] hidden rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
