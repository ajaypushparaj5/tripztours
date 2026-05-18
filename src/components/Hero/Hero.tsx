"use client";

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);

    let isAnimating = false;

    const handleWheel = (e: WheelEvent) => {
      if (window.scrollY <= 10 && e.deltaY > 0 && !hasPlayed && !isAnimating) {
        e.preventDefault();
        startAnimation();
      } else if (isAnimating) {
        e.preventDefault();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (window.scrollY <= 10 && !hasPlayed && !isAnimating) {
        const touchY = e.touches[0].clientY;
        if (touchStartY - touchY > 5) { // scrolling down threshold
          e.preventDefault();
          startAnimation();
        }
      } else if (isAnimating) {
        e.preventDefault();
      }
    };

    const startAnimation = () => {
      if (!videoRef.current) return;
      isAnimating = true;
      videoRef.current.play().catch(e => console.log("Video play failed:", e));

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
        setHasPlayed(true);
        isAnimating = false;
        
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const yOffset = 0; // Removing navbar offset for perfect fit if sections are 100vh
          const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 2000);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [hasPlayed]);

  return (
    <div className="h-screen w-full relative overflow-hidden flex justify-center items-center bg-black" ref={containerRef}>
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/hero.mp4"
        muted
        playsInline
        preload="auto"
      />
      
      {/* Subtle overlay so text is readable */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10" />

      <div className="relative z-20 flex flex-col items-center text-center text-white px-8 pointer-events-none">
        <h1 className="text-[clamp(4rem,15vw,15rem)] font-black uppercase tracking-tighter leading-none m-0">
          Tripz Tours
        </h1>
      </div>
    </div>
  );
}
