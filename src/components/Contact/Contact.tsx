import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen w-full flex justify-center items-center bg-black text-white py-24 relative overflow-hidden">
      
      {/* Full Screen Background Image */}
      <img
        src="/contact.jpeg"
        alt="Contact Us Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Massive Title and Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h2 className="text-[clamp(4rem,8vw,10rem)] font-black uppercase tracking-tighter leading-none mb-4">
            Get In<br/>Touch
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-lg leading-relaxed">
            Ready to embark on the journey of a lifetime? Connect with our travel architects today.
          </p>
          
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex items-center gap-4 text-xl">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full"><Phone size={24} /></div>
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4 text-xl">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full"><Mail size={24} /></div>
              <span>hello@tripztours.com</span>
            </div>
            <div className="flex items-center gap-4 text-xl">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full"><MapPin size={24} /></div>
              <span>Cochin, Kerala, India</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2">
          <form className="bg-black/30 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl flex flex-col gap-6 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Send a Message</h3>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/70 uppercase tracking-widest">Your Name</label>
              <input type="text" className="w-full bg-transparent border-b-2 border-white/20 pb-2 text-xl focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/70 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b-2 border-white/20 pb-2 text-xl focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" />
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-sm font-medium text-white/70 uppercase tracking-widest">Your Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b-2 border-white/20 pb-2 text-xl focus:outline-none focus:border-white transition-colors resize-none" placeholder="Tell us about your dream trip..."></textarea>
            </div>
            
            <button type="button" className="mt-8 bg-white text-primary font-black uppercase tracking-widest py-4 px-8 rounded-full hover:bg-gray-100 hover:scale-105 transition-all w-full text-lg">
              Send Message
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}
