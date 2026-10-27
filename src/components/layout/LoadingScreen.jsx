import React, { useEffect, useRef, useState } from 'react';

export const LoadingScreen = ({ minDuration = 1800, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [dots, setDots] = useState('.');

  const rightFaceRef = useRef(null);
  const bottomFaceRef = useRef(null);
  const frontFaceRef = useRef(null);
  const textRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Cycle the dots: "loading." -> "loading.." -> "loading..."
  useEffect(() => {
    let dotCount = 1;
    const interval = setInterval(() => {
      dotCount = (dotCount % 3) + 1;
      setDots('.'.repeat(dotCount));
    }, 350);

    return () => clearInterval(interval);
  }, []);

  // Real Asset & Page Load Detection combined with a minimum animation floor
  useEffect(() => {
    let isMounted = true;

    // Minimum display floor so fast connections don't see an epileptic 50ms screen flicker
    const minTimePromise = new Promise((resolve) =>
      setTimeout(resolve, minDuration)
    );

    // 1. Real window & document load
    const windowLoadPromise = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve, { once: true });
      }
    });

    // 2. Real Web Font loading (Playfair Display, JetBrains Mono, Inter)
    const fontsPromise =
      typeof document !== 'undefined' && document.fonts
        ? document.fonts.ready
        : Promise.resolve();

    // 3. Check for any in-flight <img> tags across the document
    const imagesPromise = new Promise((resolve) => {
      const images = Array.from(document.images);
      if (images.length === 0) {
        resolve();
        return;
      }

      let loadedCount = 0;
      const totalImages = images.length;

      const checkImage = () => {
        loadedCount++;
        if (loadedCount >= totalImages) {
          resolve();
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          checkImage();
        } else {
          img.addEventListener('load', checkImage, { once: true });
          img.addEventListener('error', checkImage, { once: true });
        }
      });
    });

    // Dismiss only when the page, fonts, and assets are 100% loaded AND minimum cycle finishes
    Promise.all([windowLoadPromise, fontsPromise, imagesPromise, minTimePromise]).then(
      () => {
        if (!isMounted) return;
        setIsFadingOut(true);

        setTimeout(() => {
          if (!isMounted) return;
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 500); // 500ms fade-out transition
      }
    );

    return () => {
      isMounted = false;
    };
  }, [minDuration, onComplete]);

  // Smooth 2D <-> 3D logo extrusion loop using requestAnimationFrame for 60/120fps smoothness
  useEffect(() => {
    const startTime = performance.now();
    const cycleDuration = 1800; // 1.8 seconds per full 2D -> 3D -> 2D cycle

    // Geometry constants based on exact user logo specifications
    const size = 140; // Front square size in SVG units
    const maxExtrudeX = 16.5; // Right face width
    const maxExtrudeY = 14.5; // Bottom face height
    const baseCenterX = 110;
    const baseCenterY = 110;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const phase = ((elapsed % cycleDuration) / cycleDuration) * (2 * Math.PI);

      // True easeInOut curve: 0 at phase=0, 1 at phase=PI, 0 at phase=2*PI
      const progress = (1 - Math.cos(phase)) / 2;

      const currentExtrudeX = progress * maxExtrudeX;
      const currentExtrudeY = progress * maxExtrudeY;

      // Keep overall bounding box centered
      const x = baseCenterX - size / 2 - currentExtrudeX / 2;
      const y = baseCenterY - size / 2 - currentExtrudeY / 2;

      // 1. Right Face Polygon (Color: #0420AC)
      if (rightFaceRef.current) {
        const p1x = x + size;
        const p1y = y;
        const p2x = x + size + currentExtrudeX;
        const p2y = y + currentExtrudeY;
        const p3x = x + size + currentExtrudeX;
        const p3y = y + size + currentExtrudeY;
        const p4x = x + size;
        const p4y = y + size;

        rightFaceRef.current.setAttribute(
          'points',
          `${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y} ${p4x},${p4y}`
        );
        rightFaceRef.current.setAttribute('opacity', progress > 0.01 ? '1' : '0');
      }

      // 2. Bottom Face Polygon (Color: #00188C)
      if (bottomFaceRef.current) {
        const p1x = x;
        const p1y = y + size;
        const p2x = x + size;
        const p2y = y + size;
        const p3x = x + size + currentExtrudeX;
        const p3y = y + size + currentExtrudeY;
        const p4x = x + currentExtrudeX;
        const p4y = y + size + currentExtrudeY;

        bottomFaceRef.current.setAttribute(
          'points',
          `${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y} ${p4x},${p4y}`
        );
        bottomFaceRef.current.setAttribute('opacity', progress > 0.01 ? '1' : '0');
      }

      // 3. Front Face Square (Color: #002BFF)
      if (frontFaceRef.current) {
        frontFaceRef.current.setAttribute('x', x);
        frontFaceRef.current.setAttribute('y', y);
      }

      // 4. "TW" Bold Text
      if (textRef.current) {
        textRef.current.setAttribute('x', x + size / 2);
        textRef.current.setAttribute('y', y + size / 2 + 3);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99990] flex flex-col items-center justify-center bg-paper dark:bg-charcoal transition-opacity duration-500 select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Animated 2D <-> 3D TW Logo */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center relative">
          <svg
            viewBox="0 0 220 220"
            className="w-full h-full overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Right Face (Side Extrusion) */}
            <polygon
              ref={rightFaceRef}
              fill="#0420AC"
              points="170,40 170,40 170,180 170,180"
              style={{ transition: 'opacity 0.1s linear' }}
            />

            {/* Bottom Face (Base Extrusion) */}
            <polygon
              ref={bottomFaceRef}
              fill="#00188C"
              points="30,180 170,180 170,180 30,180"
              style={{ transition: 'opacity 0.1s linear' }}
            />

            {/* Front Face (Primary Vibrant Cobalt Square) */}
            <rect
              ref={frontFaceRef}
              x="30"
              y="40"
              width="140"
              height="140"
              fill="#002BFF"
            />

            {/* TW Lettermark */}
            <text
              ref={textRef}
              x="100"
              y="113"
              fill="#FFFFFF"
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 900,
                fontSize: '66px',
                letterSpacing: '-2px',
                userSelect: 'none',
              }}
            >
              TW
            </text>
          </svg>
        </div>

        {/* Loading text with animated cycling dots */}
        <div className="mt-8 flex items-center justify-center h-6">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-ink dark:text-white select-none">
            loading<span className="inline-block w-6 text-left">{dots}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
