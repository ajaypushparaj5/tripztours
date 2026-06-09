"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

// --- CENTRALIZED PARALLAX ANIMATION CONFIGURATION ---
export const PARALLAX_CONFIG = {
  containerHeight: '200vh',

  // --- BACKGROUND: CLOUDS ---
  clouds: {
    src: '/parallax/cloud.jpg',
    initialScale: 1.15,
    finalScale: 1.4,
    initialY: '-12%',
    finalY: '3%',
  },

  // --- FOREGROUND: MOUNTAIN ---
  mountain: {
    src: '/parallax/mountain.png',
    initialScale: 1.45,
    finalScale: 1.0,
    initialScaleMobile: 5.0,
    finalScaleMobile: 4.0,
    initialY: '0%',
    finalY: '5%',
  },

  // --- SPAWNING: MAN ---
  man: {
    src: '/parallax/man.png',
    initialScale: 0.6,
    finalScale: 1.0,
    initialScaleMobile: 0.5,
    finalScaleMobile: 0.8,
    initialY: '110%',
    finalY: '0%',
    widthDesktop: '320px',
    widthMobile: '320px',
    bottomOffsetDesktop: '0vh',
    bottomOffsetMobile: '1.5vh',
  },

  // --- TYPOGRAPHY: TITLE ---
  title: {
    text: 'TRIPZ WORLD',
    initialY: '0px',
    initialYMobile: '0px',
    finalY: '-220px',
    finalYMobile: '-150px',
    initialScale: 1.0,
    finalScale: 0.85,
    initialOpacity: 1,
    finalOpacity: 0,
    finalOpacityMobile: 1.0,
    fontSizeDesktop: 'clamp(5rem, 14vw, 13rem)',
    fontSizeMobile: 'clamp(2.3rem, 20vw, 8rem)',
  },

  // --- SECONDARY TYPOGRAPHY: ESCAPE ---
  escapeText: {
    text: 'ESCAPE',
    initialY: '30%',
    initialYMobile: '30%',
    finalY: '180%',
    finalYMobile: '400%',
    initialScale: 1.0,
    finalScale: 0.9,
    initialOpacity: 0.95,
    finalOpacity: 0,
    fontSizeDesktop: 'clamp(6rem, 19vw, 17rem)',
    fontSizeMobile: 'clamp(3rem, 20vw, 10rem)',
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Set up scroll listener bound to our container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Client-side initialization, mobile screen detection, image preloading, and anchor scrolling
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);

    // 1. Preload CRITICAL parallax images synchronously to reveal the page perfectly
    const criticalUrls = [
      PARALLAX_CONFIG.clouds.src,
      PARALLAX_CONFIG.mountain.src,
      PARALLAX_CONFIG.man.src
    ];

    let loadedCount = 0;
    criticalUrls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
      const handlePreloadLoad = () => {
        loadedCount++;
        if (loadedCount === criticalUrls.length) {
          setImagesLoaded(true);
          // 2. Preload SECONDARY assets asynchronously in the background once critical view is ready
          preloadSecondaryAssets();
        }
      };
      img.onload = handlePreloadLoad;
      img.onerror = handlePreloadLoad;
    });

    const preloadSecondaryAssets = () => {
      const secondaryUrls = [
        '/tz1.jpg',
        '/tz2.jpg',
        '/tz3.jpg',
        '/tz4.jpg',
        '/aboutus1.jpg',
        '/aboutus2.jpg',
        '/activities/large/activity1.jpg',
        '/activities/large/activity2.jpg'
      ];
      secondaryUrls.forEach((url) => {
        const img = new window.Image();
        img.src = url;
      });
    };

    // Handle hash links (like #gallery or #contact) from other pages elegantly
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }

    return () => window.removeEventListener('resize', handleResize);
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

  // Dynamic responsive transforms for mountain scaling
  const mountainScale = useTransform(
    scrollYProgress,
    [0, 1],
    [
      isMobile ? PARALLAX_CONFIG.mountain.initialScaleMobile : PARALLAX_CONFIG.mountain.initialScale,
      isMobile ? PARALLAX_CONFIG.mountain.finalScaleMobile : PARALLAX_CONFIG.mountain.finalScale
    ]
  );
  const mountainY = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.mountain.initialY, PARALLAX_CONFIG.mountain.finalY]
  );

  // Dynamic responsive transforms for man scaling
  const manScale = useTransform(
    scrollYProgress,
    [0, 1],
    [
      isMobile ? PARALLAX_CONFIG.man.initialScaleMobile : PARALLAX_CONFIG.man.initialScale,
      isMobile ? PARALLAX_CONFIG.man.finalScaleMobile : PARALLAX_CONFIG.man.finalScale
    ]
  );
  const manY = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.man.initialY, PARALLAX_CONFIG.man.finalY]
  );

  // Dynamic responsive translation Y for Title
  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [
      isMobile ? PARALLAX_CONFIG.title.initialYMobile : PARALLAX_CONFIG.title.initialY,
      isMobile ? PARALLAX_CONFIG.title.finalYMobile : PARALLAX_CONFIG.title.finalY
    ]
  );
  const titleScale = useTransform(
    scrollYProgress,
    [0, 1],
    [PARALLAX_CONFIG.title.initialScale, PARALLAX_CONFIG.title.finalScale]
  );
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [
      PARALLAX_CONFIG.title.initialOpacity,
      isMobile ? PARALLAX_CONFIG.title.finalOpacityMobile : PARALLAX_CONFIG.title.finalOpacity
    ]
  );

  // Dynamic responsive translation Y for Secondary text (ESCAPE)
  const escapeY = useTransform(
    scrollYProgress,
    [0, 1],
    [
      isMobile ? PARALLAX_CONFIG.escapeText.initialYMobile : PARALLAX_CONFIG.escapeText.initialY,
      isMobile ? PARALLAX_CONFIG.escapeText.finalYMobile : PARALLAX_CONFIG.escapeText.finalY
    ]
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
      {/* Sleek Fading Preloader Mask Screen to guarantee zero text-only rendering states */}
      <div
        className={`fixed inset-0 bg-slate-950 z-[100] flex flex-col items-center justify-center transition-all duration-700 ease-out ${imagesLoaded ? 'opacity-0 pointer-events-none invisible' : 'opacity-100'
          }`}
      >
        <span className="text-white font-black text-2xl tracking-[0.25em] uppercase animate-pulse">
          Tripz World
        </span>
        <div className="w-16 h-[2px] bg-white/20 mt-4 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-white w-1/2 animate-[loading_1.5s_infinite_ease-in-out]" />
        </div>
      </div>

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
          <Image
            src={PARALLAX_CONFIG.clouds.src}
            alt="Clouds Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
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
          <h1
            className="font-black uppercase tracking-tighter leading-none m-0 drop-shadow-2xl selection:bg-primary"
            style={{
              fontSize: isMobile ? PARALLAX_CONFIG.title.fontSizeMobile : PARALLAX_CONFIG.title.fontSizeDesktop
            }}
          >
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
          <Image
            src={PARALLAX_CONFIG.mountain.src}
            alt="Mountain Foreground"
            width={1920}
            height={1080}
            className="w-full h-auto absolute bottom-0 left-0 block"
            priority
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
          <h2
            className="font-black uppercase tracking-widest leading-none m-0 text-[#132336] select-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)]"
            style={{
              fontSize: isMobile ? PARALLAX_CONFIG.escapeText.fontSizeMobile : PARALLAX_CONFIG.escapeText.fontSizeDesktop
            }}
          >
            {PARALLAX_CONFIG.escapeText.text}
          </h2>
        </motion.div>

        {/* Layer 4: Emerging Man */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            scale: manScale,
            y: manY,
            width: isMobile ? PARALLAX_CONFIG.man.widthMobile : PARALLAX_CONFIG.man.widthDesktop,
            bottom: isMobile ? PARALLAX_CONFIG.man.bottomOffsetMobile : PARALLAX_CONFIG.man.bottomOffsetDesktop,
            transformOrigin: 'bottom center',
            zIndex: 30
          }}
        >
          <Image
            src={PARALLAX_CONFIG.man.src}
            alt="Emerging Hiker"
            width={320}
            height={480}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>

        {/* Layer 5: Dark overlay at the very bottom of the sticky view for smooth transition */}
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
