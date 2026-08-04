"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Star, MapPin, Calendar, Quote, Compass, Clock, Heart } from 'lucide-react';

// --- EXPERIENCE TABS CONFIGURATION ---
const TABS_DATA = [
  {
    id: 'custom',
    label: 'Tailored Planning',
    icon: Compass,
    text: 'At TRIPZ WORLD, we believe your journey should be as unique as you are. Our travel designers collaborate closely with you to understand your preferences, creating custom daily schedules, select lodging, and unique excursions that fit your budget, pace, and interests perfectly.'
  },
  {
    id: 'support',
    label: '24/7 Concierge',
    icon: Clock,
    text: 'From takeoff to landing, you are never alone. Our dedicated support team is available around the clock to handle flight adjustments, local transport requests, and last-minute reservations. Travel with absolute peace of mind knowing that TRIPZ WORLD has your back every mile of the way.'
  },
  {
    id: 'heritage',
    label: 'Authentic Connections',
    icon: Heart,
    text: 'Unlock the true spirit of each destination through our curated heritage and cultural experiences. We connect you with local families, traditional artisans, and expert storytellers in Kerala, India, and the UAE, allowing you to discover the stories, culinary traditions, and hidden gems that mainstream tourists miss.'
  }
];

// --- FEATURED JOURNEYS CONFIGURATION ---
const JOURNEYS_DATA = [
  {
    id: 1,
    title: 'Discover Thailand',
    subtitle: 'The Land of Smiles',
    days: 'Flexible Duration',
    priceText: 'Custom Pricing',
    image: '/activities/large/activity1.jpg',
    tag: 'Beaches & Temples',
    highlights: ['Island Hopping', 'Temple Trails', 'Street Food Tours'],
  },
  {
    id: 2,
    title: 'UAE Excursions',
    subtitle: 'Desert & Skyline',
    days: 'Flexible Duration',
    priceText: 'Custom Pricing',
    image: '/activities/large/activity2.jpg',
    tag: 'Theme Parks & Safaris',
    highlights: ['Desert Safari', 'Burj Khalifa', 'Dhow Cruise'],
  }
];

// --- DESTINATIONS GRID DATA ---
const DESTINATIONS_DATA = [
  {
    id: 'swiss',
    title: 'Swiss Alps',
    location: 'Zermatt, Switzerland',
    image: '/activities/large/activity1.jpg',
  },
  {
    id: 'dubai',
    title: 'Arabian Dunes',
    location: 'Dubai, UAE',
    image: '/activities/large/activity2.jpg',
  },
  {
    id: 'kerala',
    title: 'Kerala Backwaters',
    location: "God's Own Country, India",
    image: '/tz1.jpg',
  }
];

const STATS = [
  { value: '500+', label: 'Journeys Crafted' },
  { value: '25+', label: 'Destinations' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years of Expertise' },
];

export default function Destinations() {
  const [activeTab, setActiveTab] = useState('custom');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const activeTabData = TABS_DATA.find(t => t.id === activeTab)!;
  const TabIcon = activeTabData.icon;

  return (
    <section id="destinations" ref={sectionRef} className="bg-[#F7F4EF] text-charcoal overflow-hidden">

      {/* ─── SECTION 1: Intro & Philosophy ─── */}
      <div className="py-24 md:py-32 px-6 md:px-12 border-b border-charcoal/8">
        <div className="container mx-auto max-w-6xl">

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-6 h-[1.5px] bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.22em]">
              Crafted for the Modern Explorer
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.92] text-charcoal mb-8">
                Bespoke<br />
                Journeys,<br />
                <span className="text-charcoal/25">Infinite</span><br />
                Memories
              </h2>

              {/* Stats strip */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-10 pt-10 border-t border-charcoal/10">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="flex flex-col gap-0.5"
                  >
                    <span className="text-3xl font-black text-charcoal tracking-tight">{stat.value}</span>
                    <span className="text-[11px] text-charcoal/45 uppercase tracking-[0.15em] font-semibold">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: experience tabs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-charcoal/6"
            >
              {/* Tab Buttons */}
              <div className="flex flex-wrap gap-2 mb-8">
                {TABS_DATA.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full transition-all duration-300 cursor-pointer border focus:outline-none ${
                        isActive
                          ? 'bg-primary text-white border-primary shadow-sm'
                          : 'bg-transparent text-charcoal/50 border-charcoal/15 hover:text-charcoal hover:border-charcoal/30'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.28 }}
                >
                  <p className="text-base font-light leading-relaxed text-charcoal/70 mb-8">
                    {activeTabData.text}
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-primary border-b-2 border-primary/30 pb-0.5 hover:border-primary transition-all duration-300 group"
                  >
                    Get in Touch
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── SECTION 2: Destinations Cards ─── */}
      <div className="py-24 md:py-32 px-6 md:px-12 border-b border-charcoal/8 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-[1.5px] bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-[0.22em]">
                  Destinations
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-charcoal">
                The World<br className="hidden md:block" /> is Waiting
              </h2>
            </div>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-charcoal/50 hover:text-primary transition-colors duration-300 group shrink-0"
            >
              View All
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DESTINATIONS_DATA.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              >
                <Link href="/activities" className="block group relative overflow-hidden rounded-2xl h-[400px] md:h-[480px] bg-stone-200 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-[1400ms] ease-out"
                  />
                  {/* Gradient overlay — warm, not black-heavy */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/15 to-transparent z-10" />

                  {/* Card number */}
                  <span className="absolute top-5 left-5 text-white/20 font-black text-6xl leading-none z-20 select-none tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="flex items-center gap-1.5 mb-2">
                      <MapPin className="w-3 h-3 text-white/55" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/55">{dest.location}</span>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-none group-hover:text-primary transition-colors duration-300">
                      {dest.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-white/45 group-hover:text-white/70 transition-colors duration-300">
                        Explore
                      </span>
                      <ArrowRight className="w-3 h-3 text-white/45 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-70 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SECTION 3: Featured Journeys (warm sand tone) ─── */}
      <div className="py-24 md:py-32 px-6 md:px-12 border-b border-charcoal/8 bg-[#FDF6EE]">
        <div className="container mx-auto max-w-6xl">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-[1.5px] bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-[0.22em]">
                  Tours
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-charcoal">
                Featured<br /> Journeys
              </h2>
            </div>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-charcoal/45 hover:text-primary transition-colors duration-300 group shrink-0"
            >
              View All Tours
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Journey Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {JOURNEYS_DATA.map((journey, idx) => (
              <motion.div
                key={journey.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-charcoal/6 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all duration-400 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[240px] overflow-hidden">
                  <Image
                    src={journey.image}
                    alt={journey.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />

                  {/* Tag */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-charcoal/8 text-charcoal text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full shadow-sm">
                    {journey.tag}
                  </span>

                  {/* Days badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-charcoal/8 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span className="text-[10px] font-bold text-charcoal">{journey.days}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-charcoal mb-0.5 group-hover:text-primary transition-colors duration-300">
                    {journey.title}
                  </h3>
                  <p className="text-xs text-charcoal/40 uppercase tracking-[0.15em] font-semibold mb-4">{journey.subtitle}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {journey.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] text-charcoal/55 bg-charcoal/5 border border-charcoal/8 px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-charcoal/6">
                    <span className="text-xs text-charcoal/40 font-medium">{journey.priceText}</span>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-transparent border border-primary text-primary text-[11px] font-bold uppercase tracking-[0.12em] rounded-full hover:bg-primary hover:text-white active:bg-primary active:text-white hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      Enquire
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SECTION 4: Testimonial ─── */}
      <div className="py-24 md:py-32 px-6 md:px-12 bg-[#F7F4EF]">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center gap-7"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-[1.5px] bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.22em]">
                Testimonials
              </span>
              <div className="w-5 h-[1.5px] bg-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-charcoal">
              What Others<br />Have to Say
            </h2>

            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            <div className="relative">
              <Quote className="w-8 h-8 text-primary/15 absolute -top-4 -left-6 md:-left-10" />
              <p className="text-lg md:text-2xl font-light leading-relaxed text-charcoal/70 italic max-w-2xl">
                Tripz World transformed our honeymoon into a cinematic experience. From private luxury transfers in Zurich to dune-drifting oases in Dubai, they curated every moment with unparalleled care.
              </p>
            </div>

            <div className="flex flex-col items-center gap-1 pt-2">
              <div className="w-8 h-[1px] bg-charcoal/15 mb-4" />
              <span className="font-black uppercase tracking-[0.2em] text-xs text-charcoal">
                Elizabeth & Richard
              </span>
              <span className="text-charcoal/40 text-[11px] uppercase tracking-[0.15em] font-semibold">
                Switzerland & Dubai, Sept 2025
              </span>
            </div>

            <Link
              href="/#contact"
              className="mt-2 inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-primary text-primary text-xs font-black uppercase tracking-[0.15em] rounded-full hover:bg-primary hover:text-white active:bg-primary active:text-white hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Plan Your Journey
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
