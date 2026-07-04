"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, MapPin, Calendar } from 'lucide-react';

// --- EXPERIENCE TABS CONFIGURATION ---
const TABS_DATA = [
  {
    id: 'custom',
    label: 'Tailored Planning',
    text: 'At TRIPZ WORLD, we believe your journey should be as unique as you are. Our travel designers collaborate closely with you to understand your preferences, creating custom daily schedules, select lodging, and unique excursions that fit your budget, pace, and interests perfectly.'
  },
  {
    id: 'support',
    label: '24/7 Concierge',
    text: 'From takeoff to landing, you are never alone. Our dedicated support team is available around the clock to handle flight adjustments, local transport requests, and last-minute reservations. Travel with absolute peace of mind knowing that TRIPZ WORLD has your back every mile of the way.'
  },
  {
    id: 'heritage',
    label: 'Authentic Connections',
    text: 'Unlock the true spirit of each destination through our curated heritage and cultural experiences. We connect you with local families, traditional artisans, and expert storytellers in Kerala, India, and the UAE, allowing you to discover the stories, culinary traditions, and hidden gems that mainstream tourists miss.'
  }
];

// --- FEATURED JOURNEYS CONFIGURATION ---
const JOURNEYS_DATA = [
  {
    id: 1,
    title: 'Discover Thailand – The Land of Smiles',
    days: 'Flexible',
    priceText: 'Contact Us for Pricing',
    discountedPrice: '',
    image: '/activities/large/activity1.jpg',
    tag: 'Beaches & Temples'
  },
  {
    id: 2,
    title: 'UAE Activities & Excursions',
    days: 'Flexible',
    priceText: 'Contact Us for Pricing',
    discountedPrice: '',
    image: '/activities/large/activity2.jpg',
    tag: 'Theme Parks & Safaris'
  }
];

// --- DESTINATIONS GRID DATA ---
const DESTINATIONS_DATA = [
  {
    id: 'swiss',
    title: 'Swiss Alps Expedition',
    location: 'Zermatt, Switzerland',
    image: '/activities/large/activity1.jpg'
  },
  {
    id: 'dubai',
    title: 'Arabian Dunes & Oasis',
    location: 'Dubai Desert, UAE',
    image: '/activities/large/activity2.jpg'
  },
  {
    id: 'kerala',
    title: 'Misty Tea & Backwaters',
    location: 'Kerala, India',
    image: '/tz1.jpg'
  }
];

export default function Destinations() {
  const [activeTab, setActiveTab] = useState('custom');

  return (
    <section id="destinations" className="min-h-screen bg-cream text-charcoal py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* 1. Personalized and Extraordinary Experiences Section */}
      <div className="container mx-auto max-w-6xl mb-24 text-center">
        <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest block mb-4">
          Crafted for the Modern Explorer
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-charcoal mb-10 leading-none">
          Bespoke Journeys, Infinite Memories
        </h2>

        {/* Tab Headers */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 border-b border-charcoal/10 pb-4 mb-8">
          {TABS_DATA.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[15px] font-black uppercase tracking-widest py-2 px-4 transition-all relative focus:outline-none cursor-pointer ${
                  isActive ? 'text-primary' : 'text-charcoal/50 hover:text-charcoal'
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto min-h-[120px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-base md:text-xl font-light leading-relaxed text-charcoal/80"
            >
              {TABS_DATA.find((tab) => tab.id === activeTab)?.text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* 2. Destinations Section ("The World is Waiting") */}
      <div className="container mx-auto max-w-6xl mb-32 border-t border-charcoal/10 pt-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest block mb-3">
              Destinations
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-charcoal mb-4">
              The World is Waiting
            </h2>
            <p className="max-w-xl text-charcoal/70 text-sm md:text-base font-light leading-relaxed">
              TRIPZ WORLD specializes in authentic tours to the most sought-after destinations. With more than 25 itineraries to choose from, your dream vacation is within reach.
            </p>
          </div>
          <div>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 font-black uppercase text-xs md:text-sm tracking-widest text-primary hover:text-primary-dark transition-colors group"
            >
              View All Destinations <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Custom Destinations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESTINATIONS_DATA.map((dest, idx) => (
            <Link href="/activities" key={dest.id} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative h-[450px] overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-charcoal/5 cursor-pointer bg-white"
              >
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-60 z-10" />
                
                <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                  <div className="flex items-center gap-1.5 mb-2 text-white/70">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-xs uppercase tracking-widest font-semibold">{dest.location}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                    {dest.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Featured Journeys Section (Matching User Screenshot exactly) */}
      <div className="container mx-auto max-w-6xl mb-32 border-t border-charcoal/10 pt-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest block mb-3">
              Tours
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-charcoal mb-4">
              Featured Journeys
            </h2>
            <p className="max-w-xl text-charcoal/70 text-sm md:text-base font-light leading-relaxed">
              We have crafted different tours to offer the perfect experience for each of TRIPZ WORLD’s travelers. Browse our tour types or learn more about what experience is right for you.
            </p>
          </div>
          <div>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 font-black uppercase text-xs md:text-sm tracking-widest text-primary hover:text-primary-dark transition-colors group"
            >
              View All Tours <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Featured Journeys Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {JOURNEYS_DATA.map((journey, idx) => (
            <motion.div
              key={journey.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-charcoal/10 flex flex-col group cursor-pointer hover:shadow-xl hover:border-primary/20 transition-all duration-300 w-full"
            >
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src={journey.image}
                  alt={journey.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-charcoal/5 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-bold text-charcoal">{journey.days}</span>
                </div>

                {/* Custom Category Tag */}
                <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  {journey.tag}
                </span>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-charcoal mb-4 group-hover:text-primary transition-colors">
                    {journey.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-charcoal/5 mt-auto flex flex-col gap-2">
                  <div className="text-xs md:text-sm text-charcoal/60 font-medium">
                    {journey.discountedPrice ? (
                      <>
                        <span className="line-through mr-1.5">{journey.priceText}</span>
                        <span className="text-primary font-bold text-base">{journey.discountedPrice}</span>
                      </>
                    ) : (
                      <span className="text-charcoal/80 font-bold">{journey.priceText}</span>
                    )}
                  </div>
                  
                  <Link 
                    href="/#contact"
                    className="mt-4 w-full py-3 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-md hover:scale-[1.02] active:scale-100 transition-all text-center block"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Testimonials Section ("What Others Have to Say") */}
      <div className="container mx-auto max-w-6xl border-t border-charcoal/10 pt-20 flex flex-col items-center">
        <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-charcoal mb-10 text-center leading-none">
          What Others Have to Say
        </h2>

        {/* Minimalist Editorial Testimonial Card */}
        <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-[0_10px_45px_rgba(0,0,0,0.02)] border border-charcoal/5 text-center flex flex-col items-center gap-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>

          <p className="text-base md:text-xl font-light italic leading-relaxed text-charcoal/80">
            &ldquo;Tripz World transformed our honeymoon into a cinematic experience! From private luxury transfers in Zurich to dune-drifting oases in Dubai, they curated every moment with unparalleled luxury and care. We are forever architects of their vision!&rdquo;
          </p>

          <div className="flex flex-col items-center">
            <span className="font-bold uppercase tracking-widest text-xs md:text-sm text-charcoal">
              Elizabeth & Richard
            </span>
            <span className="text-charcoal/50 text-[11px] uppercase tracking-wider font-semibold mt-1">
              Switzerland & Dubai Escapade, Sept 2025
            </span>
          </div>
        </div>

        <Link
          href="/#contact"
          className="mt-10 px-8 py-4 bg-primary text-white hover:bg-primary-dark font-bold uppercase tracking-wider text-xs md:text-sm rounded-full shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          Read More Testimonials
        </Link>
      </div>

    </section>
  );
}
