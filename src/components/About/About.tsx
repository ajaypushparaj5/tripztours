"use client";

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center bg-cream text-charcoal py-24 px-6 md:px-12 relative overflow-hidden border-t border-charcoal/10">

      <div className="container mx-auto max-w-6xl z-10 flex flex-col lg:flex-row gap-16 items-start justify-between">

        {/* Left Column: Massive Title and Subtitle */}
        <div className="w-full lg:w-5/12 flex flex-col gap-6 text-left">
          <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest block">
            Who We Are
          </span>

          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase tracking-tighter leading-none text-charcoal m-0">
            About Us
          </h2>

          <div className="w-20 h-[3px] bg-primary rounded-full mt-2" />

          <p className="text-xl md:text-2xl font-black uppercase tracking-tight text-primary mt-6 leading-tight max-w-md">
            Architects of Unforgettable Global Escapes
          </p>
        </div>

        {/* Right Column: Narrative */}
        <div className="w-full lg:w-7/12 flex flex-col gap-12 text-left">

          {/* Narrative description */}
          <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-charcoal/80">
            <p>
              Tripz World is a travel and tourism company established in 2026 with a passion for creating memorable and meaningful travel experiences. Based in Kerala, we specialize in travel services across Kerala, India, the UAE, and other international destinations, offering personalized solutions for leisure, family, corporate, and group travellers.
            </p>
            <p>With years of industry experience and a strong understanding of the tourism sector, our team is dedicated to delivering seamless travel experiences through carefully planned itineraries, reliable support, and exceptional customer service. Whether you're exploring the serene backwaters of Kerala, discovering the diverse beauty of India, or experiencing the vibrant attractions of the UAE, we ensure every journey is comfortable, enjoyable, and stress-free.
            </p>
            <p>
              At TripzWorld, we believe that travel is more than just reaching a destination. It's about creating unforgettable memories, experiencing new cultures, and connecting with the world around us. Guided by our commitment to quality, trust, and customer satisfaction, we strive to make every journey truly special.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
