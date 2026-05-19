"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop", // Kerala backwaters
  "/tz1.jpg", // Munnar tea gardens
  "/tz2.jpg", // adv
  "/tz3.jpg", // varanasi
];

const TITLES = [
  "Serene Backwaters",
  "Misty Tea Estates",
  "Hiking Trails",
  "Cultural Heritage"
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="relative h-screen w-full bg-primary overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={IMAGES[currentIndex]}
          alt={TITLES[currentIndex]}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Massive Title Overlay */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center pointer-events-none">
        <h2 className="text-[clamp(3rem,8vw,10rem)] font-black uppercase tracking-tighter leading-none text-white opacity-20 absolute top-24">
          Gallery
        </h2>

        <AnimatePresence mode="wait">
          <motion.h3
            key={`title-${currentIndex}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[clamp(3rem,6vw,8rem)] font-black uppercase tracking-tighter text-white mt-12 text-center"
          >
            {TITLES[currentIndex]}
          </motion.h3>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/20 hover:bg-white text-white hover:text-primary transition-all backdrop-blur-md border border-white/20"
        aria-label="Previous Image"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/20 hover:bg-white text-white hover:text-primary transition-all backdrop-blur-md border border-white/20"
        aria-label="Next Image"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-12 bg-white' : 'w-4 bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
