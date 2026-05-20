"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll height to transition the navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled || isOpen
          ? 'py-4 bg-slate-950/80 backdrop-blur-lg shadow-lg border-b border-white/5' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
        
        {/* Logo */}
        <div className="w-1/4">
          <Link href="/" className="text-2xl font-black text-white uppercase tracking-tighter hover:opacity-80 transition-opacity">
            Tripz
          </Link>
        </div>
        
        {/* Centered Links (Desktop) */}
        <div className="hidden md:flex w-2/4 justify-center items-center gap-12">
          <Link href="/booking" className="text-white/80 font-semibold hover:text-white transition-colors text-lg relative group">
            Flight Booking
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#gallery" className="text-white/80 font-semibold hover:text-white transition-colors text-lg relative group">
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#contact" className="text-white/80 font-semibold hover:text-white transition-colors text-lg relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/activities" className="text-white/80 font-semibold hover:text-white transition-colors text-lg relative group">
            Activities
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Empty right area for desktop balance */}
        <div className="hidden md:block w-1/4"></div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8 focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-7 h-0.5 bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-white transition-transform duration-300 ease-in-out ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </button>
      </div>

      {/* Standard Mobile Dropdown Menu (Collapsible under Navbar) */}
      <div 
        className={`absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/5 z-40 flex flex-col px-8 py-6 gap-5 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto visible' 
            : 'opacity-0 -translate-y-4 pointer-events-none invisible'
        } md:hidden`}
      >
        <Link 
          href="/booking" 
          onClick={() => setIsOpen(false)} 
          className="text-lg font-bold text-white/95 hover:text-white transition-colors uppercase tracking-widest"
        >
          Flight Booking
        </Link>
        <Link 
          href="/#gallery" 
          onClick={() => setIsOpen(false)} 
          className="text-lg font-bold text-white/95 hover:text-white transition-colors uppercase tracking-widest"
        >
          Gallery
        </Link>
        <Link 
          href="/#contact" 
          onClick={() => setIsOpen(false)} 
          className="text-lg font-bold text-white/95 hover:text-white transition-colors uppercase tracking-widest"
        >
          Contact
        </Link>
        <Link 
          href="/activities" 
          onClick={() => setIsOpen(false)} 
          className="text-lg font-bold text-white/95 hover:text-white transition-colors uppercase tracking-widest"
        >
          Activities
        </Link>
      </div>
    </nav>
  );
}
