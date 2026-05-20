"use client";

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- CENTRALIZED PARALLAX ANIMATION CONFIGURATION ---
// Customize these values to fine-tune the size, position, speed, and direction of the animations.
export const PARALLAX_CONFIG = {
  // Height of the parent scroll container. A larger height means a slower, smoother scroll effect.
  // Recommended: '150vh' (faster animation), '200vh' (standard / very smooth), '300vh' (slower, more epic).
  containerHeight: '200vh',

  // --- BACKGROUND: CLOUDS ---
  clouds: {
    src: '/parallax/cloud.jpg',
    initialScale: 1.15, // Slightly scaled up to prevent edge gaps when shifted upwards
    finalScale: 1.4,    // Ending scale
    initialY: '-12%',   // Shipped upwards initially to reveal the clouds and sky
    finalY: '3%',       // Moves down relative to scroll progress (parallax)
  },

  // --- FOREGROUND: MOUNTAIN ---
  mountain: {
    src: '/parallax/mountain.png',
    initialScale: 1.45,  // Scale at top of the page (starts zoomed in)
    finalScale: 1.0,     // Scale at bottom of scroll (zooms out to reveal landscape)
    initialY: '0%',      // Starting vertical position offset
    finalY: '5%',       // Ending vertical position offset (moves down slightly to settle)
    height: '55vh',      // Visual height coverage of the mountain at the bottom of viewport
  },

  // --- SPAWNING: MAN ---
  man: {
    src: '/parallax/man.png',
    initialScale: 0.6,   // Starting scale as he emerges (smaller)
    finalScale: 1.0,     // Final scale when fully emerged
    initialY: '110%',    // Starting position below viewport (hidden)
    finalY: '0%',        // Final position when scrolled to 100% (settled on the mountain)
    width: '320px',      // Width of the man image layer
    bottomOffset: '0vh', // Position of the man from the bottom of the screen when settled
  },

  // --- TYPOGRAPHY: TITLE ---
  title: {
    text: 'Tripz Tours',
    initialY: '0px',
    finalY: '-220px',    // Moves up faster than scroll speed (parallax depth)
    initialScale: 1.0,
    finalScale: 0.85,    // Shrinks slightly as scroll progresses
    initialOpacity: 1,
    finalOpacity: 0,     // Fades out completely as user scrolls down
  },

  // --- SECONDARY TYPOGRAPHY: ESCAPE ---
  escapeText: {
    text: 'ESCAPE',
    initialY: '30%',      // Starting offset position
    finalY: '180%',      // Pushed downwards off-screen
    initialScale: 1.0,
    finalScale: 0.9,     // Shrinks slightly as it gets pushed down
    initialOpacity: 0.95,
    finalOpacity: 0,     // Fades out completely
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up scroll listener bound to our container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smoothly reset scroll on fresh page load to ensure animation plays from start
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Map scroll progress [0, 1] to parallax transformation values defined in the config
  const cloudScale = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.clouds.initialScale, PARALLAX_CONFIG.clouds.finalScale]
  );
  const cloudY = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.clouds.initialY, PARALLAX_CONFIG.clouds.finalY]
  );

  const mountainScale = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.mountain.initialScale, PARALLAX_CONFIG.mountain.finalScale]
  );
  const mountainY = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.mountain.initialY, PARALLAX_CONFIG.mountain.finalY]
  );

  const manScale = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.man.initialScale, PARALLAX_CONFIG.man.finalScale]
  );
  const manY = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.man.initialY, PARALLAX_CONFIG.man.finalY]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.title.initialY, PARALLAX_CONFIG.title.finalY]
  );
  const titleScale = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.title.initialScale, PARALLAX_CONFIG.title.finalScale]
  );
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.title.initialOpacity, PARALLAX_CONFIG.title.finalOpacity]
  );

  const escapeY = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.escapeText.initialY, PARALLAX_CONFIG.escapeText.finalY]
  );
  const escapeScale = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.escapeText.initialScale, PARALLAX_CONFIG.escapeText.finalScale]
  );
  const escapeOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.escapeText.initialOpacity, PARALLAX_CONFIG.escapeText.finalOpacity]
  );

  // A subtle fade out for the scroll indicator as user scrolls
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-visible"
      style={{ height: PARALLAX_CONFIG.containerHeight }}
    >
      {/* Sticky container that locks the scene in the viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">

        {/* Layer 1: Background (Clouds) */}
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            scale: cloudScale,
            y: cloudY,
            zIndex: 1
          }}
        >
          <img
            src={PARALLAX_CONFIG.clouds.src}
            alt="Clouds Background"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Layer 2: Text Heading */}
        <motion.div
          className="relative flex flex-col items-center text-center text-white px-8 pointer-events-none"
          style={{
            y: titleY,
            scale: titleScale,
            opacity: titleOpacity,
            zIndex: 10
          }}
        >
          <h1 className="text-[clamp(3.5rem,14vw,13rem)] font-black uppercase tracking-tighter leading-none m-0 drop-shadow-2xl selection:bg-primary">
            {PARALLAX_CONFIG.title.text}
          </h1>
        </motion.div>

        {/* Layer 3: Foreground (Mountains) */}
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            scale: mountainScale,
            y: mountainY,
            transformOrigin: 'bottom center',
            zIndex: 20
          }}
        >
          <img
            src={PARALLAX_CONFIG.mountain.src}
            alt="Mountain Foreground"
            className="w-full h-auto absolute bottom-0 left-0 block"
            loading="eager"
          />
        </motion.div>

        {/* Layer 3.5: ESCAPE Block Text */}
        <motion.div
          className="absolute left-0 right-0 text-center pointer-events-none flex justify-center w-full"
          style={{
            y: escapeY,
            scale: escapeScale,
            opacity: escapeOpacity,
            bottom: '22%',
            zIndex: 25
          }}
        >
          <h2 className="text-[clamp(4.5rem,19vw,17rem)] font-black uppercase tracking-widest leading-none m-0 text-[#132336] select-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)]">
            {PARALLAX_CONFIG.escapeText.text}
          </h2>
        </motion.div>

        {/* Layer 4: Emerging Man */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            scale: manScale,
            y: manY,
            width: PARALLAX_CONFIG.man.width,
            bottom: PARALLAX_CONFIG.man.bottomOffset,
            transformOrigin: 'bottom center',
            zIndex: 30
          }}
        >
          <img
            src={PARALLAX_CONFIG.man.src}
            alt="Emerging Hiker"
            className="w-full h-auto object-contain"
            loading="eager"
          />
        </motion.div>

        {/* Layer 5: Dark overlay at the very bottom of the sticky view for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-gradient-to-t from-black to-transparent pointer-events-none z-35" />

        {/* Scroll Cue Indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-2 pointer-events-none z-40"
          style={{ opacity: indicatorOpacity }}
        >
          <span className="text-white/60 text-xs font-semibold tracking-widest uppercase animate-pulse">
            Scroll to Explore
          </span>
          <div className="w-[24px] h-[40px] rounded-full border-2 border-white/30 flex justify-center items-start p-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white"
              animate={{
                y: [0, 16, 0]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
