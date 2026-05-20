"use client";

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col justify-center bg-black text-white py-24 relative overflow-hidden">
      
      {/* Full Screen Background Image (Optimized Next.js Image) */}
      <Image
        src="/aboutus.jpeg"
        alt="About Us Background"
        fill
        sizes="100vw"
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container mx-auto px-6 z-10 flex flex-col items-start justify-center h-full">
        <h2 className="text-[clamp(4.5rem,14vw,14rem)] font-black uppercase tracking-tighter leading-none mb-12 text-left select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          About Us
        </h2>
        
        <div className="max-w-4xl text-left space-y-8 text-xl md:text-2xl font-light leading-relaxed text-white/95 drop-shadow-md">
          <p>
            We are not just a travel agency. We are the <span className="font-bold text-white">architects of unforgettable global escapes</span>. 
            Rooted in a passion for exploration, Tripz Tours transforms ordinary vacations into cinematic journeys 
            across the world’s most breathtaking destinations.
          </p>
          <p>
            From the snow-covered peaks of Switzerland to the vibrant streets of Dubai, from the tropical serenity of 
            Bali to the timeless charm of Europe, we curate experiences that stay with you long after the journey ends.
          </p>
          <p>
            At Tripz Tours, every itinerary is crafted to inspire discovery, luxury, culture, and connection — turning 
            travel into <span className="font-bold text-white">stories worth remembering forever</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
