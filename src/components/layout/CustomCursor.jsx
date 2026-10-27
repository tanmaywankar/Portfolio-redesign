import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const [mode, setMode] = useState('default'); // 'default' | 'card' | 'morph'
  const [isVisible, setIsVisible] = useState(false);
  const [morphDimensions, setMorphDimensions] = useState({
    width: 33,
    height: 33,
    borderRadius: '0px',
  });

  const cursorRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const curPos = useRef({ x: -100, y: -100 });
  const activeElementRef = useRef(null);
  const animationFrameId = useRef(null);
  const modeRef = useRef('default');
  const hasInitializedPos = useRef(false);

  // Keep modeRef in sync for animation loop
  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    // Only disable custom cursor on purely touch-only mobile devices with no pointer/mouse
    const isTouchOnly =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: coarse)').matches &&
      !window.matchMedia('(pointer: fine)').matches;

    if (isTouchOnly) {
      return;
    }

    // Enable custom cursor styles globally by adding the class to <html>
    document.documentElement.classList.add('custom-cursor-active');

    // Hardware-accelerated Lerp loop
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      let targetX = mousePos.current.x;
      let targetY = mousePos.current.y;

      if (modeRef.current === 'morph' && activeElementRef.current) {
        if (!document.body.contains(activeElementRef.current)) {
          activeElementRef.current = null;
          setMode('default');
        } else {
          const rect = activeElementRef.current.getBoundingClientRect();

          // Check if cursor is still within element boundary (plus tolerance)
          const isStillInside =
            mousePos.current.x >= rect.left - 12 &&
            mousePos.current.x <= rect.right + 12 &&
            mousePos.current.y >= rect.top - 12 &&
            mousePos.current.y <= rect.bottom + 12;

          if (!isStillInside) {
            const underCursor = document.elementFromPoint(
              mousePos.current.x,
              mousePos.current.y
            );
            evaluateTarget(underCursor);
          } else {
            // Center the morph frame over the button with subtle magnetic elasticity
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const magX = (mousePos.current.x - centerX) * 0.12;
            const magY = (mousePos.current.y - centerY) * 0.12;

            targetX = centerX + magX;
            targetY = centerY + magY;
          }
        }
      }

      curPos.current.x = lerp(curPos.current.x, targetX, 0.25);
      curPos.current.y = lerp(curPos.current.y, targetY, 0.25);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${curPos.current.x}px, ${curPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    // Central Target Evaluator
    const evaluateTarget = (target) => {
      if (!target) {
        setMode('default');
        activeElementRef.current = null;
        return;
      }

      // Priority 1: Card Target strictly for project schematic visual or project title heading
      const cardTarget = target.closest('[data-cursor="card"]');
      if (cardTarget) {
        activeElementRef.current = null;
        setMode('card');
        return;
      }

      // Priority 2: Morph Target (Buttons, Links, Pills, Badges)
      const morphTarget = target.closest(
        '[data-cursor="morph"], [data-cursor="hover-btn"], a, button, [role="button"]'
      );

      if (morphTarget) {
        const rect = morphTarget.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(morphTarget);
        const radius = computedStyle.borderRadius || '0px';

        activeElementRef.current = morphTarget;
        setMorphDimensions({
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          borderRadius: radius,
        });
        setMode('morph');
        return;
      }

      // Priority 3: Default Inverted Square Cursor
      activeElementRef.current = null;
      setMode('default');
    };

    // Pointer Event Handlers
    const handlePointerMove = (e) => {
      // Ignore pure touch taps on touchscreen laptops while allowing stylus/mouse
      if (e.pointerType === 'touch') return;

      if (!hasInitializedPos.current) {
        curPos.current.x = e.clientX;
        curPos.current.y = e.clientY;
        hasInitializedPos.current = true;
      }

      setIsVisible(true);
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      evaluateTarget(e.target);
    };

    const handleScrollOrWheel = () => {
      if (mousePos.current.x < 0 || mousePos.current.y < 0) return;
      const elementUnderCursor = document.elementFromPoint(
        mousePos.current.x,
        mousePos.current.y
      );
      evaluateTarget(elementUnderCursor);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    const handlePointerEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerenter', handlePointerEnter, { passive: true });
    window.addEventListener('scroll', handleScrollOrWheel, { passive: true });
    window.addEventListener('wheel', handleScrollOrWheel, { passive: true });
    document.documentElement.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerenter', handlePointerEnter);
      window.removeEventListener('scroll', handleScrollOrWheel);
      window.removeEventListener('wheel', handleScrollOrWheel);
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Run once on mount

  return (
    <div
      ref={cursorRef}
      className="custom-cursor-container"
      style={{
        opacity: isVisible ? 1 : 0,
        mixBlendMode: mode === 'default' ? 'difference' : 'normal',
      }}
      aria-hidden="true"
    >
      <div
        className={`flex items-center justify-center select-none transition-all duration-150 cubic-bezier(0.16, 1, 0.3, 1) ${
          mode === 'default'
            ? 'w-[33px] h-[33px] bg-white rounded-none border-0 shadow-none'
            : mode === 'card'
            ? 'w-[104px] h-[34px] bg-ink dark:bg-white text-white dark:text-black border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_#000000] dark:shadow-[3px_3px_0px_0px_#002BFF] rounded-none'
            : 'border-2 border-black dark:border-white bg-transparent shadow-none'
        }`}
        style={
          mode === 'morph'
            ? {
                width: `${morphDimensions.width}px`,
                height: `${morphDimensions.height}px`,
                borderRadius: morphDimensions.borderRadius,
              }
            : undefined
        }
      >
        {mode === 'card' && (
          <span className="font-mono text-[10px] font-black uppercase tracking-wider text-white dark:text-black select-none">
            OPEN [↗]
          </span>
        )}
      </div>
    </div>
  );
};
