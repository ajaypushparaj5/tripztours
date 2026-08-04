"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 border-t border-white/10 pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <Link href="/" className="flex items-center gap-2 group w-fit focus:outline-none">
              <div className="relative w-44 h-16 rounded-xl overflow-hidden border border-white/15 bg-white shadow-lg transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                <Image
                  src="/tripzlogo.png"
                  alt="Tripz World Logo"
                  fill
                  sizes="176px"
                  className="object-contain p-0 scale-[1.22]"
                />
              </div>
            </Link>
            
            <p className="text-sm font-light text-white/60 leading-relaxed max-w-sm">
              Architects of unforgettable global escapes. We curate luxury, culture, and adventure across the world's most breathtaking destinations.
            </p>

            <div className="flex flex-col gap-3 mt-2 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="font-medium">+91 9292007973</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="font-medium">info@tripzworld.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="font-medium">Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-5 text-left">
            <h3 className="text-xs font-black uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-sm font-medium">
              <Link href="/#destinations" className="hover:text-primary transition-colors w-fit">Destinations</Link>
              <Link href="/#about" className="hover:text-primary transition-colors w-fit">About Us</Link>
              <Link href="/#gallery" className="hover:text-primary transition-colors w-fit">Gallery</Link>
              <Link href="/activities" className="hover:text-primary transition-colors w-fit">Activities</Link>
            </div>
          </div>

          {/* Column 3: Destinations */}
          <div className="lg:col-span-2 flex flex-col gap-5 text-left">
            <h3 className="text-xs font-black uppercase tracking-widest text-white">
              Expeditions
            </h3>
            <div className="flex flex-col gap-3 text-sm font-medium text-white/60">
              <Link href="/activities" className="hover:text-primary transition-colors w-fit">Swiss Alps</Link>
              <Link href="/activities" className="hover:text-primary transition-colors w-fit">Dubai Desert</Link>
              <Link href="/#destinations" className="hover:text-primary transition-colors w-fit">Kerala Backwaters</Link>
              <Link href="/activities" className="hover:text-primary transition-colors w-fit">Bali Gateway</Link>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 flex flex-col gap-5 text-left">
            <h3 className="text-xs font-black uppercase tracking-widest text-white">
              Newsletter
            </h3>
            <p className="text-xs font-light text-white/60 leading-relaxed">
              Subscribe to receive exclusive escape invitations and route announcements.
            </p>
            <div className="flex gap-2 mt-2 w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-primary text-white font-medium placeholder-white/30"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="shrink-0"
              >
                <button className="bg-transparent border border-white text-white hover:bg-primary hover:border-primary active:bg-primary active:border-primary p-3 rounded-xl transition-all duration-300 cursor-pointer shadow-sm flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/40">
          <div>
            &copy; {new Date().getFullYear()} Tripz World. All Rights Reserved. Kerala, India.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-lg border border-white/5 hover:border-primary/20 flex items-center justify-center" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-lg border border-white/5 hover:border-primary/20 flex items-center justify-center" aria-label="Facebook">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-lg border border-white/5 hover:border-primary/20 flex items-center justify-center" aria-label="Twitter">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-lg border border-white/5 hover:border-primary/20 flex items-center justify-center" aria-label="Youtube">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                <polygon points="10 15 15 12 10 9"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
