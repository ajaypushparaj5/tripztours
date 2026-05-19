"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        scrolled ? 'py-4 bg-white/10 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo (Left) */}
        <div className="w-1/4">
          <Link href="/" className="text-2xl font-black text-white uppercase tracking-tighter">
            Tripz
          </Link>
        </div>
        
        {/* Centered Links (Desktop) */}
        <div className="hidden md:flex w-2/4 justify-center items-center gap-12">
          <Link href="/booking" className="text-white font-medium hover:text-primary transition-colors text-lg relative group">
            Flight Booking
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#gallery" className="text-white font-medium hover:text-primary transition-colors text-lg relative group">
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#contact" className="text-white font-medium hover:text-primary transition-colors text-lg relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/activities" className="text-white font-medium hover:text-primary transition-colors text-lg relative group">
            Activities
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Empty right area for perfect centering of middle items */}
        <div className="hidden md:block w-1/4"></div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden flex flex-col gap-1.5 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden`}
      >
        <Link href="/booking" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white uppercase tracking-tighter">
          Flight Booking
        </Link>
        <Link href="/#gallery" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white uppercase tracking-tighter">
          Gallery
        </Link>
        <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white uppercase tracking-tighter">
          Contact
        </Link>
        <Link href="/activities" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white uppercase tracking-tighter">
          Activities
        </Link>
      </div>
    </nav>
  );
}
