"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload the main background image
    const img = new window.Image();
    img.src = '/beach.png';
    img.onload = () => setImagesLoaded(true);
    img.onerror = () => setImagesLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Sleek Fading Preloader Mask Screen */}
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

      {/* Background Image with a subtle Ken Burns zoom effect on load */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={imagesLoaded ? { scale: 1, opacity: 0.85 } : {}}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <Image
          src="/beach.png"
          alt="Breathtaking Beach Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Subtle Gradient Overlays for readability while keeping the bg bright */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-slate-950/50 z-1 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-black/10 z-1 pointer-events-none" />

      {/* Hero Content Area */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center h-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          {/* Subtitle / Tagline */}
          <span className="text-white font-black tracking-[0.35em] text-xs md:text-sm uppercase bg-primary px-4 py-2 rounded-full shadow-md">
            ESCAPE
          </span>

          {/* Main Massive Title */}
          <h1 className="font-black uppercase tracking-tight text-white leading-none m-0 text-[clamp(2.5rem,9vw,7.5rem)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
            TRIPZ WORLD
          </h1>

          {/* Intro Description */}
          <p className="max-w-2xl text-white/80 text-sm md:text-lg font-light leading-relaxed mt-2">
            Your premier partner for bespoke travel and tourism. We curate unforgettable global escapes, heritage journeys, and wilderness safaris tailored specifically to your dreams.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/#destinations"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider text-xs md:text-sm rounded-full shadow-lg hover:scale-105 transition-all flex items-center gap-2 group cursor-pointer"
            >
              Explore Destinations
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-bold uppercase tracking-wider text-xs md:text-sm rounded-full transition-all hover:scale-105 cursor-pointer backdrop-blur-md"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
