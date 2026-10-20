import { useEffect, useRef, useState } from 'react';

const isClickable = (target: HTMLElement | null) => {
  if (!target) return false;
  return (
    target.closest('a, button, [role="button"], input, textarea, select, label') !== null ||
    window.getComputedStyle(target).cursor === 'pointer'
  );
};

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef(false);

  useEffect(() => {
    // Move the cursor straight from the event: no spring, no React re-render per frame.
    const handleMouseMove = (e: MouseEvent) => {
      const el = cursorRef.current;
      if (el) el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      setIsHidden(false);
    };

    // Only re-check the hovered element when it changes, not on every pixel moved.
    const handleMouseOver = (e: MouseEvent) => {
      const next = isClickable(e.target as HTMLElement | null);
      if (next !== pointerRef.current) {
        pointerRef.current = next;
        setIsPointer(next);
      }
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block will-change-transform"
        style={{ opacity: isHidden ? 0 : 1 }}
      >
        <div style={{ transform: isPointer ? 'translate(-25%, -15%)' : undefined }}>
          {isPointer ? (
            <div className="drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              {/* Pixelated Pointing Hand */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
                <path d="M12 2H16V6H12V2Z" fill="white" />
                <path d="M12 6H16V18H12V6Z" fill="white" />
                <path d="M8 10H12V14H8V10Z" fill="white" />
                <path d="M16 10H20V14H16V10Z" fill="white" />
                <path d="M20 14H24V22H20V14Z" fill="white" />
                <path d="M8 14H12V22H8V14Z" fill="white" />
                <path d="M12 22H20V26H12V22Z" fill="white" />
                <path d="M10 4H14V8H10V4Z" fill="#853A17" />
                <path d="M14 8H18V20H14V8Z" fill="#853A17" />
              </svg>
            </div>
          ) : (
            <div className="drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">
              {/* Pixelated Arrow */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
                <path d="M2 2H4V4H2V2Z" fill="white" />
                <path d="M4 4H6V6H4V4Z" fill="white" />
                <path d="M6 6H8V8H6V6Z" fill="white" />
                <path d="M8 8H10V10H8V8Z" fill="white" />
                <path d="M10 10H12V12H10V10Z" fill="white" />
                <path d="M2 4V22H4V20H6V18H8V16H10V14H12V12L2 4Z" fill="white" />
                <path d="M4 6V18H6V16H8V14H10V12H12V10L4 6Z" fill="#853A17" />
                <path d="M4 4H2V6H4V4Z" fill="black" />
                <path d="M6 6H4V8H6V6Z" fill="black" />
              </svg>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
