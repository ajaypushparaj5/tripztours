"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Image from 'next/image';

const IMAGES = [
  "/tz4.jpg", // Kerala backwaters
  "/tz1.jpg", // Munnar tea gardens
  "/tz2.jpg", // adv
  "/aboutus1.jpg", // travel architecture landscape
];

const TITLES = [
  "Serene Backwaters",
  "Misty Tea Estates",
  "Hiking Trails",
  "Scenic Horizons"
];

const DESCRIPTIONS = [
  "Drifting peacefully through the emerald backwaters of South India, experiencing timeless coastal life.",
  "Wandering into the vast, mist-draped peaks of emerald tea fields, breathing the fresh aroma of Munnar.",
  "Challenging the elements, ascending trails that reward you with dramatic, sweeping views of absolute raw nature.",
  "Savoring the quiet luxury of global destinations where the land meets the sky in perfect harmony."
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="min-h-screen w-full flex flex-col justify-center items-center bg-cream text-charcoal py-24 px-6 md:px-12 relative overflow-hidden border-t border-charcoal/10">
      
      {/* Editorial Header */}
      <div className="container mx-auto max-w-5xl mb-12 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-3 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
          <Camera className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest font-black">Visual Journeys</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-charcoal mb-4">
          Capturing the Soul
        </h2>
        <p className="max-w-xl text-charcoal/70 text-sm md:text-base font-light leading-relaxed">
          Step into our visual ledger. Each frame captures an immersive story, curated for visionaries seeking the extraordinary.
        </p>
      </div>

      {/* Main Canvas Slider Wrapper */}
      <div className="w-full max-w-5xl relative h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-charcoal/10 bg-charcoal/5">
        
        {/* Canvas Image Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={IMAGES[currentIndex]}
              alt={TITLES[currentIndex]}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/10 z-10 pointer-events-none" />

        {/* Narrative Canvas Details Overlay */}
        <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 z-20 text-white flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
          <div className="max-w-xl text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${currentIndex}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-primary text-[10px] md:text-xs font-black uppercase tracking-widest block mb-2">
                  Featured Chapter
                </span>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none mb-3">
                  {TITLES[currentIndex]}
                </h3>
                <p className="text-xs md:text-sm font-light text-white/80 leading-relaxed max-w-md">
                  {DESCRIPTIONS[currentIndex]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls in Canvas Frame */}
          <div className="flex gap-4 self-end md:self-auto pointer-events-auto">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-primary text-white transition-all backdrop-blur-md border border-white/20 hover:border-primary active:scale-95 cursor-pointer shadow-md"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-primary text-white transition-all backdrop-blur-md border border-white/20 hover:border-primary active:scale-95 cursor-pointer shadow-md"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

      </div>

      {/* Clickable Progress Thumbnails below the Canvas */}
      <div className="flex gap-4 md:gap-6 mt-8 justify-center items-center">
        {IMAGES.map((img, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-14 h-14 md:w-20 md:h-20 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer shadow-sm ${
                isActive ? 'scale-110 ring-4 ring-primary' : 'opacity-40 hover:opacity-80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>

    </section>
  );
}
