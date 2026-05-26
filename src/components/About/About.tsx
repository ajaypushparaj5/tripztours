"use client";

import { motion } from 'framer-motion';

const STATS = [
  { value: '15+', label: 'Years of Travel Architecture' },
  { value: '80+', label: 'Countries Explored Globally' },
  { value: '98%', label: 'Return Visionary Rate' },
  { value: '24/7', label: 'Elite Concierge Service' }
];

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center bg-cream text-charcoal py-24 px-6 md:px-12 relative overflow-hidden border-t border-charcoal/10">
      
      <div className="container mx-auto max-w-6xl z-10 flex flex-col lg:flex-row gap-16 items-start justify-between">
        
        {/* Left Column: Massive Title and Subtitle */}
        <div className="w-full lg:w-5/12 flex flex-col gap-6 text-left">
          <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest block">
            Who We Are
          </span>
          
          <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-black uppercase tracking-tighter leading-none text-charcoal m-0">
            About Us
          </h2>
          
          <div className="w-20 h-[3px] bg-primary rounded-full mt-2" />
          
          <p className="text-xl md:text-2xl font-black uppercase tracking-tight text-primary mt-6 leading-tight max-w-md">
            Architects of Unforgettable Global Escapes
          </p>
        </div>

        {/* Right Column: Narrative and Statistics Cards Grid */}
        <div className="w-full lg:w-7/12 flex flex-col gap-12 text-left">
          
          {/* Narrative description */}
          <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-charcoal/80">
            <p>
              We are not just a travel agency. We are the <span className="font-bold text-charcoal">architects of unforgettable global escapes</span>.
              Rooted in a passion for exploration, Tripz World transforms ordinary vacations into cinematic journeys
              across the world’s most breathtaking destinations.
            </p>
            <p>
              From the snow-covered peaks of Switzerland to the vibrant streets of Dubai, from the tropical serenity of
              Bali to the timeless charm of Europe, we curate experiences that stay with you long after the journey ends.
            </p>
            <p>
              At Tripz World, every itinerary is crafted to inspire discovery, luxury, culture, and connection — turning
              travel into <span className="font-bold text-charcoal">stories worth remembering forever</span>.
            </p>
          </div>

          {/* Grid of elegant statistics */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-charcoal/5 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="text-4xl md:text-5xl font-black text-primary group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-charcoal/60 mt-2 leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
