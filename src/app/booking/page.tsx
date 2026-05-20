"use client";

import { Plane, Calendar, Users, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Booking() {
  const [destination, setDestination] = useState("Zurich (ZRH)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen w-full relative flex items-center justify-center md:justify-end bg-[#0b0f17] overflow-x-hidden">
      
      {/* Full Screen Background Image */}
      <img
        src="/booking.jpeg"
        alt="Booking Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/45 z-0" />
      
      {/* Immersive Floating Booking Form Panel */}
      {/* Desktop: h-screen panel floating on right side. Mobile: Centered floating glass card with margins revealing background */}
      <div className="w-full md:w-[600px] lg:w-[680px] min-h-screen md:h-screen overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-12 lg:p-16 relative z-10 pt-28 md:pt-16 pb-12 bg-transparent md:bg-slate-950/70 md:backdrop-blur-xl md:border-l md:border-white/10 md:shadow-2xl">
        
        {/* Glass Card Container on Mobile, plain layout on Desktop */}
        <div className="w-full bg-slate-950/80 backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-none rounded-3xl p-6 sm:p-8 md:p-0 shadow-2xl md:shadow-none">
          
          <div className="flex items-center gap-3 mb-2 text-white/60">
            <Plane className="w-5 h-5 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest">
              Architectural Flight Curators
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none">
            Search Flights
          </h2>
          <p className="text-white/70 text-sm md:text-base font-light mb-8 md:mb-10">
            Find the best routes and exclusive deals for your next global escape.
          </p>

          <form className="flex flex-col gap-5 sm:gap-6 text-black">
            
            {/* Departure and Destination */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-bold text-white/80 uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={14} className="text-white" /> From
                </label>
                <input 
                  type="text" 
                  className="w-full bg-white/95 border border-transparent rounded-xl px-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all font-medium placeholder-slate-400" 
                  placeholder="Departure City (e.g. London)" 
                />
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-bold text-white/80 uppercase tracking-widest flex items-center gap-2">
                  <Plane size={14} className="text-white" /> To
                </label>
                <select 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-white/95 border border-transparent rounded-xl px-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all font-semibold text-slate-900 cursor-pointer appearance-none"
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
                <label className="text-xs font-bold text-white/80 uppercase tracking-widest flex items-center gap-2">
                  <Calendar size={14} className="text-white" /> Departure Date
                </label>
                <input 
                  type="date" 
                  className="w-full bg-white/95 border border-transparent rounded-xl px-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all font-medium text-slate-900" 
                />
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-bold text-white/80 uppercase tracking-widest flex items-center gap-2">
                  <Users size={14} className="text-white" /> Passengers
                </label>
                <select className="w-full bg-white/95 border border-transparent rounded-xl px-4 py-3.5 text-sm md:text-base focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all font-medium text-slate-900 cursor-pointer appearance-none">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>Group Escape (4+)</option>
                </select>
              </div>
            </div>
            
            {/* Submit Escape Search */}
            <button 
              type="button" 
              className="mt-4 bg-white text-slate-950 font-bold uppercase tracking-wider py-4 px-8 rounded-xl hover:bg-white/90 transition-all w-full text-sm md:text-base shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex justify-center items-center gap-3"
            >
              Search Exclusive Escapes <Plane size={18} />
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}
