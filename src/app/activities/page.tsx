"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  MapPin, 
  Sparkles, 
  Heart, 
  Compass, 
  Check, 
  Search, 
  ShoppingBag,
  Award,
  ArrowRight
} from 'lucide-react';
import { activitiesData } from './activitiesData';

export default function ActivitiesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-cream text-charcoal min-h-screen font-sans">
      
      {/* Hero Banner Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image of peaks (Next.js Optimized with priority loading) */}
        <div className="absolute inset-0 z-0 scale-105 brightness-[0.4] transition-transform duration-[2000ms]">
          <Image
            src="/tz1.jpg"
            alt="Activities Header Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        {/* Gradient that transitions nicely from dark picture to cream page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/40 via-transparent to-cream z-1" />
        
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-4">
          <span className="text-white/60 uppercase tracking-widest text-xs md:text-sm font-semibold">
            Curated Adventures by TRIPZ WORLD
          </span>
          <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase tracking-tighter leading-none m-0 text-white drop-shadow-2xl">
            Our Activities
          </h1>
          <p className="max-w-2xl text-white/80 text-sm md:text-lg font-light leading-relaxed">
            Handcrafted journeys and local experiences tailored for the visionary traveler. Discover Thailand and the UAE like never before.
          </p>
        </div>
      </section>

      {/* Main Activities Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="space-y-24 md:space-y-36">
          {activitiesData.map((activity, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedId === activity.id;

            // UAE Filtered Excursions Calculation
            const filteredExcursions = activity.uaeDetails?.excursions.filter(ex => {
              const matchesCategory = selectedCategory === 'All' || ex.category === selectedCategory;
              const matchesSearch = ex.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                    ex.description.toLowerCase().includes(searchQuery.toLowerCase());
              return matchesCategory && matchesSearch;
            }) || [];

            return (
              <div key={activity.id} className="flex flex-col gap-12 border-b border-charcoal/5 pb-20 last:border-0 last:pb-0">
                <div 
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
                >
                  
                  {/* Visual Media Composition (Left/Right) */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-6 relative">
                    
                    {/* Majestic Large Main Cover Card */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl group border border-charcoal/5 bg-white">
                      <Image 
                        src={activity.largeImage} 
                        alt={activity.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Location Badge */}
                      <span className="absolute top-6 left-6 px-4 py-2 bg-white/95 text-charcoal text-xs font-semibold uppercase tracking-wider rounded-full border border-charcoal/10 shadow-md z-10">
                        {activity.location}
                      </span>
                    </div>

                    {/* Elegant Embedded Small Offset Detail Card (Hidden on mobile and tablet to prevent horizontal overflow) */}
                    <div 
                      className={`hidden lg:block absolute -bottom-16 ${
                        (isEven || activity.id === 2) ? 'lg:-right-10' : 'lg:-left-10'
                      } w-60 aspect-square overflow-hidden rounded-2xl border-4 border-cream shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-20 hover:scale-[1.03] transition-transform duration-500`}
                    >
                      <Image 
                        src={activity.smallImage} 
                        alt={`${activity.title} detail`}
                        fill
                        sizes="240px"
                        className="object-cover"
                      />
                    </div>

                  </div>

                  {/* Narrative Details Description */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start text-left gap-6 z-10 pt-4 lg:pt-0">
                    <div className="flex items-center gap-4 text-xs md:text-sm font-semibold uppercase tracking-widest text-charcoal/50">
                      <span>{activity.duration}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-charcoal/20" />
                      <span>{activity.difficulty}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-charcoal">
                      {activity.title}
                    </h2>
                    
                    <p className="text-charcoal/80 text-sm md:text-base font-light leading-relaxed">
                      {activity.description}
                    </p>

                    {/* Key Highlights Checkboxes */}
                    <div className="w-full space-y-3 py-4 border-y border-charcoal/10 my-2">
                      {activity.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-charcoal/90 text-sm font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-2 w-full">
                      <Link 
                        href="/#contact" 
                        className="w-full sm:w-auto px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary active:bg-primary hover:text-white active:text-white font-bold uppercase tracking-wider text-sm rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm text-center block flex-1 sm:flex-initial"
                      >
                        Book Escape
                      </Link>
                      <button
                        onClick={() => toggleExpand(activity.id)}
                        className="w-full sm:w-auto px-6 py-4 border border-charcoal/20 hover:border-primary hover:text-primary text-charcoal font-bold uppercase tracking-wider text-sm rounded-full hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none flex-1 sm:flex-initial"
                      >
                        {isExpanded ? 'Hide Details' : 'Explore Details'}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Expanded Details Section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden w-full z-10"
                    >
                      <div className="w-full bg-white/60 backdrop-blur-md rounded-3xl p-6 md:p-12 border border-charcoal/10 shadow-xl mt-4">
                        
                        {/* 1. THAILAND DETAILED LAYOUT */}
                        {activity.id === 1 && (
                          <div className="space-y-12">
                            <div className="border-b border-charcoal/10 pb-6">
                              <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">Excursion Overview</span>
                              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-charcoal">Thailand Holiday Planner</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              
                              {/* Why Visit */}
                              <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-charcoal/5 shadow-sm hover:border-primary/20 transition-all duration-300">
                                <div className="flex items-center gap-2.5 mb-4 text-primary">
                                  <Sparkles className="w-5 h-5" />
                                  <h4 className="uppercase tracking-wider text-xs font-black text-charcoal">Why Visit</h4>
                                </div>
                                <ul className="space-y-3">
                                  {activity.thailandDetails?.whyVisit.map((item, idx) => (
                                    <li key={idx} className="flex gap-2 text-xs md:text-sm text-charcoal/80 font-medium leading-relaxed">
                                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Top Destinations */}
                              <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-charcoal/5 shadow-sm hover:border-primary/20 transition-all duration-300">
                                <div className="flex items-center gap-2.5 mb-4 text-primary">
                                  <MapPin className="w-5 h-5" />
                                  <h4 className="uppercase tracking-wider text-xs font-black text-charcoal">Top Destinations</h4>
                                </div>
                                <div className="space-y-4">
                                  {activity.thailandDetails?.destinations.map((dest, idx) => (
                                    <div key={idx} className="text-xs md:text-sm">
                                      <span className="font-bold text-charcoal block">{dest.name}</span>
                                      <span className="text-charcoal/70 font-light block leading-snug">{dest.desc}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Popular Experiences */}
                              <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-charcoal/5 shadow-sm hover:border-primary/20 transition-all duration-300">
                                <div className="flex items-center gap-2.5 mb-4 text-primary">
                                  <Compass className="w-5 h-5" />
                                  <h4 className="uppercase tracking-wider text-xs font-black text-charcoal">Experiences</h4>
                                </div>
                                <ul className="space-y-2.5">
                                  {activity.thailandDetails?.experiences.map((item, idx) => (
                                    <li key={idx} className="flex gap-2 text-xs md:text-sm text-charcoal/80 font-medium leading-relaxed">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Perfect For */}
                              <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-charcoal/5 shadow-sm hover:border-primary/20 transition-all duration-300">
                                <div className="flex items-center gap-2.5 mb-4 text-primary">
                                  <Heart className="w-5 h-5" />
                                  <h4 className="uppercase tracking-wider text-xs font-black text-charcoal">Perfect For</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {activity.thailandDetails?.perfectFor.map((item, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-white text-charcoal/80 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full border border-charcoal/5 shadow-sm">
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>

                            </div>

                            {/* Enquire CTA Banner */}
                            <div className="bg-charcoal text-white p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg border border-white/5">
                              <div>
                                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2 text-white">Ready to Explore Thailand?</h4>
                                <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed max-w-xl">
                                  Let TripzWorld create your perfect Thailand holiday with unforgettable experiences and hassle-free planning.
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-4">
                                <Link 
                                  href="/#contact" 
                                  className="px-6 py-3 bg-transparent border border-white hover:bg-primary active:bg-primary hover:border-primary active:border-primary text-white font-bold uppercase tracking-wider text-xs rounded-full hover:scale-105 active:scale-95 transition-all duration-300 text-center flex items-center gap-1 cursor-pointer"
                                >
                                  Enquire Now <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                                <Link 
                                  href="/#contact" 
                                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider text-xs rounded-full hover:scale-105 active:scale-95 transition-all duration-300 text-center border border-white/10 block cursor-pointer"
                                >
                                  Customize Your Trip
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 2. UAE DETAILED LAYOUT */}
                        {activity.id === 2 && (
                          <div className="space-y-10">
                            
                            {/* Search & Category Filter Section */}
                            <div className="border-b border-charcoal/10 pb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                              <div>
                                <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">Excursion Catalog</span>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-charcoal">UAE Excursions & Attractions</h3>
                              </div>

                              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:max-w-2xl">
                                {/* Search input */}
                                <div className="relative flex-grow">
                                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
                                  <input
                                    type="text"
                                    placeholder="Search excursions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs font-semibold border border-charcoal/10 focus:outline-none focus:border-primary bg-white shadow-sm text-charcoal"
                                  />
                                </div>

                                {/* Category Dropdown / Buttons */}
                                <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
                                  {['All', 'City Tours', 'Combos & Theme Parks', 'Cruises & Safaris'].map((category) => (
                                    <motion.button
                                      key={category}
                                      onClick={() => setSelectedCategory(category)}
                                      whileHover={{ scale: 1.03 }}
                                      whileTap={{ scale: 0.97 }}
                                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                      className={`px-4 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                                        selectedCategory === category
                                          ? 'border border-primary text-primary bg-transparent shadow-sm'
                                          : 'bg-white text-charcoal/60 hover:text-charcoal border border-charcoal/10'
                                      }`}
                                    >
                                      {category === 'All' ? 'All Tours' : category}
                                    </motion.button>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Tours Catalog Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {filteredExcursions.map((ex, idx) => (
                                <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-charcoal/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                                  <div>
                                    <div className="flex justify-between items-start gap-4 mb-3">
                                      <h4 className="text-base md:text-lg font-black uppercase tracking-tight text-charcoal leading-tight">
                                        {ex.name}
                                      </h4>
                                      <span className="shrink-0 text-[8px] font-black uppercase tracking-widest px-2.5 py-1 bg-charcoal/5 text-charcoal/70 rounded-full border border-charcoal/10">
                                        {ex.category}
                                      </span>
                                    </div>
                                    
                                    <p className="text-charcoal/70 text-xs md:text-sm font-light leading-relaxed mb-6">
                                      {ex.description}
                                    </p>

                                    {/* Highlights list */}
                                    {ex.highlights && (
                                      <div className="mb-4">
                                        <span className="text-[9px] uppercase font-black text-charcoal/40 tracking-wider block mb-2">Highlights</span>
                                        <ul className="space-y-2">
                                          {ex.highlights.map((hl, i) => (
                                            <li key={i} className="flex gap-2 text-xs text-charcoal/80 font-medium leading-tight">
                                              <Compass className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                              <span>{hl}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {/* Inclusions list */}
                                    {ex.includes && (
                                      <div className="mb-4">
                                        <span className="text-[9px] uppercase font-black text-charcoal/40 tracking-wider block mb-2">Includes</span>
                                        <ul className="space-y-2">
                                          {ex.includes.map((inc, i) => (
                                            <li key={i} className="flex gap-2 text-xs text-charcoal/80 font-medium leading-tight">
                                              <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                              <span>{inc}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {/* Experience list */}
                                    {ex.experience && (
                                      <div className="mb-4">
                                        <span className="text-[9px] uppercase font-black text-charcoal/40 tracking-wider block mb-2">Experiences</span>
                                        <ul className="space-y-2">
                                          {ex.experience.map((exp, i) => (
                                            <li key={i} className="flex gap-2 text-xs text-charcoal/80 font-medium leading-tight">
                                              <Sparkles className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                              <span>{exp}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {/* Shopping Destinations list */}
                                    {ex.shoppingDestinations && (
                                      <div className="mb-4">
                                        <span className="text-[9px] uppercase font-black text-charcoal/40 tracking-wider block mb-2">Shopping Stops</span>
                                        <ul className="space-y-2">
                                          {ex.shoppingDestinations.map((shop, i) => (
                                            <li key={i} className="flex gap-2 text-xs text-charcoal/80 font-medium leading-tight">
                                              <ShoppingBag className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                              <span>{shop}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>

                                  <Link 
                                    href="/#contact" 
                                    className="w-full mt-6 py-3 bg-transparent border border-primary/25 hover:bg-primary active:bg-primary text-primary hover:text-white active:text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-[1.02] active:scale-98 transition-all duration-300 text-center block cursor-pointer shadow-sm"
                                  >
                                    Enquire Now
                                  </Link>
                                </div>
                              ))}
                              {filteredExcursions.length === 0 && (
                                <div className="col-span-full py-16 text-center text-charcoal/40 font-bold uppercase tracking-wider text-xs md:text-sm">
                                  No tours matching your search filters.
                                </div>
                              )}
                            </div>

                            {/* Why Choose Us */}
                            <div className="border-t border-charcoal/10 pt-10 mt-6">
                              <div className="text-center max-w-2xl mx-auto mb-8">
                                <span className="text-primary text-[10px] md:text-xs font-black uppercase tracking-widest block mb-2">
                                  Our Commitment
                                </span>
                                <h4 className="text-2xl font-black uppercase tracking-tight text-charcoal">
                                  Why Choose Us?
                                </h4>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {activity.uaeDetails?.whyChooseUs.map((reason, idx) => (
                                  <div key={idx} className="bg-white p-4 rounded-xl border border-charcoal/5 shadow-sm text-center flex flex-col items-center justify-center gap-2 hover:border-primary/20 transition-all duration-300">
                                    <Award className="w-5 h-5 text-primary" />
                                    <span className="text-charcoal/90 text-xs font-bold leading-tight">{reason}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                          </div>
                        )}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Aesthetic Call to Action Footer */}
      <section className="bg-white py-24 border-t border-charcoal/10 text-center px-6 shadow-sm">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-charcoal leading-none">
            Craving Something Custom?
          </h2>
          <p className="text-charcoal/70 text-sm md:text-lg font-light leading-relaxed">
            Our luxury travel architects can design bespoke itineraries built around your unique global escape aspirations. Let&apos;s co-create your signature story.
          </p>
          <Link 
            href="/#contact" 
            className="mt-4 px-10 py-5 bg-transparent border border-primary text-primary hover:bg-primary active:bg-primary hover:text-white active:text-white font-bold uppercase tracking-wider text-sm rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-md block text-center"
          >
            Consult Our Architects
          </Link>
        </div>
      </section>

    </div>
  );
}

