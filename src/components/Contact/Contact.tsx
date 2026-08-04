"use client";

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen w-full flex justify-center items-center bg-cream text-charcoal py-24 px-6 md:px-12 relative overflow-hidden border-t border-charcoal/10">

      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col lg:flex-row gap-16 items-center">

        {/* Left Side: Editorial Typography and Info Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 text-left">
          <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest block">
            Begin the Journey
          </span>

          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase tracking-tighter leading-none text-charcoal m-0">
            Get In<br />Touch
          </h2>

          <div className="w-20 h-[3px] bg-primary rounded-full mt-2" />

          <p className="text-lg md:text-xl font-light text-charcoal/80 max-w-lg leading-relaxed">
            Ready to embark on the journey of a lifetime? Connect with our travel architects today to co-create your custom escape story.
          </p>

          {/* Elegant Detail Info Rows as Cards */}
          <div className="flex flex-col gap-4 mt-4 max-w-md">

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white border border-charcoal/5 p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-center gap-4 group cursor-pointer hover:shadow-md transition-all"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/40">Call Us</span>
                <span className="text-sm font-bold text-charcoal/80">+91 9292007973</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white border border-charcoal/5 p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-center gap-4 group cursor-pointer hover:shadow-md transition-all"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/40">Email Us</span>
                <span className="text-sm font-bold text-charcoal/80">info@tripzworld.com</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white border border-charcoal/5 p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-center gap-4 group cursor-pointer hover:shadow-md transition-all"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/40">Find Us</span>
                <span className="text-sm font-bold text-charcoal/80">Homestead Heights, Tirur - 676101</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Right Side: Editorial White Form Card */}
        <div className="w-full lg:w-1/2">
          <form className="bg-white border border-charcoal/10 p-8 md:p-12 rounded-3xl flex flex-col gap-6 shadow-xl text-left">
            <div className="flex flex-col gap-2">
              <span className="text-primary text-[10px] font-black uppercase tracking-widest">Bespoke Inquiries</span>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-charcoal">Send a Message</h3>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-xs font-black text-charcoal/50 uppercase tracking-widest">Your Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-base focus:outline-none focus:border-primary transition-colors text-charcoal placeholder-charcoal/30 font-medium"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-charcoal/50 uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-base focus:outline-none focus:border-primary transition-colors text-charcoal placeholder-charcoal/30 font-medium"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-xs font-black text-charcoal/50 uppercase tracking-widest">Your Message</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-base focus:outline-none focus:border-primary transition-colors text-charcoal placeholder-charcoal/30 resize-none font-medium"
                placeholder="Tell us about your dream trip..."
              ></textarea>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full mt-6"
            >
              <button
                type="button"
                className="w-full bg-transparent border border-primary hover:bg-primary active:bg-primary text-primary hover:text-white active:text-white font-black uppercase tracking-widest py-4 px-8 rounded-xl transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </motion.div>
          </form>
        </div>

      </div>
    </section>
  );
}
