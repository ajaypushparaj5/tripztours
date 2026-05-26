"use client";

import { Plane, Calendar, Users, MapPin, Search, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CURATED_ROUTES = [
  { from: 'London (LHR)', to: 'Zurich (ZRH)', price: '$550', duration: '1h 45m', type: 'Direct' },
  { from: 'Paris (CDG)', to: 'Dubai (DXB)', price: '$1,250', duration: '6h 30m', type: 'Direct' },
  { from: 'Cochin (COK)', to: 'Bali (DPS)', price: '$490', duration: '5h 15m', type: '1 Stop' }
];

export default function Booking() {
  const [destination, setDestination] = useState("Zurich (ZRH)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen w-full bg-cream text-charcoal pt-32 pb-24 px-6 md:px-12 flex items-center justify-center relative overflow-hidden">
      
      {/* Blended Background Image - Washes image into warm cream and matches the website theme */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/booking.jpeg"
          alt="Booking Background"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] mix-blend-multiply filter contrast-[0.95]"
          priority
        />
        {/* Soft elegant gradient color overlay wash */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cream via-cream/85 to-cream/95 pointer-events-none" />
      </div>

      <div className="container mx-auto px-0 md:px-6 max-w-6xl relative z-10 flex flex-col lg:flex-row gap-16 items-start justify-between">
        
        {/* Left Side: Curated Routes & Services Ledger */}
        <div className="w-full lg:w-5/12 flex flex-col gap-8 text-left">
          <div className="flex items-center gap-3 text-primary">
            <Plane className="w-5 h-5 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Bespoke Air Curators
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase tracking-tighter leading-none text-charcoal m-0">
            Search<br/>Flights
          </h1>

          <div className="w-20 h-[3px] bg-primary rounded-full" />

          <p className="text-base md:text-lg font-light text-charcoal/80 leading-relaxed max-w-md">
            Find the best routes and exclusive airline partners curated for your next global escape. 
          </p>

          {/* Curated Routes Ledger */}
          <div className="flex flex-col gap-4 mt-4 w-full">
            <h3 className="text-xs font-black uppercase tracking-widest text-charcoal/40">
              Popular Curated Routes
            </h3>

            {CURATED_ROUTES.map((route, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 5 }}
                className="bg-white/90 backdrop-blur-sm border border-charcoal/5 p-4 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex items-center justify-between cursor-pointer hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-sm font-bold text-charcoal flex items-center gap-2">
                    <span>{route.from.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
                    <span>{route.to.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right flex flex-col">
                    <span className="text-[10px] text-charcoal/40 uppercase tracking-widest font-semibold">{route.duration} ({route.type})</span>
                    <span className="text-primary font-black text-sm">{route.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Luxury Benefits */}
          <div className="flex flex-col gap-4 border-t border-charcoal/10 pt-6 mt-2 max-w-md w-full">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal">Flexible Bookings</span>
                <span className="text-xs font-light text-charcoal/60 leading-normal">Bespoke rescheduling and premium airline ticket priority.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal">24/7 Air Concierge</span>
                <span className="text-xs font-light text-charcoal/60 leading-normal">Dedicated travel managers monitoring flight statuses live.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Clean White Form Card */}
        <div className="w-full lg:w-7/12 flex justify-center">
          <form className="bg-white/95 backdrop-blur-sm border border-charcoal/10 p-6 md:p-12 rounded-3xl flex flex-col gap-6 shadow-xl w-full max-w-xl text-left">
            <div className="flex flex-col gap-2">
              <span className="text-primary text-[10px] font-black uppercase tracking-widest">Global Itineraries</span>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-charcoal">Search Flight Details</h3>
            </div>
            
            {/* Departure and Destination */}
            <div className="flex flex-col sm:flex-row gap-5 mt-4">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-black text-charcoal/50 uppercase tracking-widest flex items-center gap-1.5">
                  <MapPin size={12} className="text-primary" /> From Departure
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-base focus:outline-none focus:border-primary transition-colors text-charcoal placeholder-charcoal/30 font-medium" 
                  placeholder="City or Airport (e.g. London)" 
                />
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-black text-charcoal/50 uppercase tracking-widest flex items-center gap-1.5">
                  <Plane size={12} className="text-primary" /> To Destination
                </label>
                <select 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-base focus:outline-none focus:border-primary transition-colors text-charcoal font-semibold cursor-pointer appearance-none"
                >
                  <option value="Zurich (ZRH)">Zurich (ZRH) — Switzerland</option>
                  <option value="Dubai (DXB)">Dubai (DXB) — UAE</option>
                  <option value="Bali (DPS)">Bali (DPS) — Indonesia</option>
                  <option value="Paris (CDG)">Paris (CDG) — France</option>
                </select>
              </div>
            </div>
            
            {/* Dates & Passengers */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-black text-charcoal/50 uppercase tracking-widest flex items-center gap-1.5">
                  <Calendar size={12} className="text-primary" /> Departure Date
                </label>
                <input 
                  type="date" 
                  className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-base focus:outline-none focus:border-primary transition-colors text-charcoal font-medium" 
                />
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-black text-charcoal/50 uppercase tracking-widest flex items-center gap-1.5">
                  <Users size={12} className="text-primary" /> Passengers
                </label>
                <select className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-base focus:outline-none focus:border-primary transition-colors text-charcoal font-semibold cursor-pointer appearance-none">
                  <option>1 Adult, Economy</option>
                  <option>2 Adults, Economy</option>
                  <option>2 Adults, First Class</option>
                  <option>Group Escape (4+)</option>
                </select>
              </div>
            </div>
            
            {/* Submit Escape Search */}
            <button 
              type="button" 
              className="mt-6 bg-primary hover:bg-primary-dark text-white font-black uppercase tracking-widest py-4 px-8 rounded-xl hover:scale-[1.01] hover:shadow-lg active:scale-100 transition-all w-full text-sm md:text-base flex justify-center items-center gap-3 cursor-pointer shadow-md"
            >
              Search Exclusive Escapes <Search size={18} />
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}
