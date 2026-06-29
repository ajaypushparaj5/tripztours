"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function ActivitiesPage() {
  const activities = [
    {
      id: 1,
      title: "Misty Munnar & Kerala Backwaters",
      location: "Kerala, India",
      largeImage: "/tz1.jpg",
      smallImage: "/tz4.jpg",
      duration: "6 Days",
      difficulty: "Easy to Moderate",
      description: "Experience the ultimate Kerala getaway with TRIPZ WORLD. Explore the mist-covered tea gardens of Munnar, trek through pristine wildlife sanctuaries, and cruise along the tranquil backwaters of Alleppey in a private luxury houseboat.",
      highlights: ["Munnar tea plantation & hiking tour", "Luxury Alleppey houseboat stay", "Heritage sightseeing in historic Fort Kochi"]
    },
    {
      id: 2,
      title: "Arabian Desert Safari & Dubai Highlights",
      location: "Dubai, UAE",
      largeImage: "/activities/large/activity2.jpg",
      smallImage: "/activities/small/activity2.jpg",
      duration: "4 Days",
      difficulty: "Easy",
      description: "Discover the perfect blend of modern luxury and traditional Arabian adventure in Dubai. Experience high-octane dune bashing in private 4x4 vehicles, witness beautiful desert sunsets, and enjoy premium cultural dining under the stars.",
      highlights: ["Private 4x4 dune bashing & sandboarding", "Starlit desert dining & cultural show", "VIP visits to Burj Khalifa & Dubai Mall"]
    }
  ];

  return (
    <div className="bg-cream text-charcoal min-h-screen font-sans">
      
      {/* Hero Banner Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image of swiss peaks (Next.js Optimized with priority loading) */}
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
            Handcrafted journeys and local experiences tailored for the visionary traveler. Discover Kerala and the UAE like never before.
          </p>
        </div>
      </section>

      {/* Main Activities Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="space-y-24 md:space-y-48">
          {activities.map((activity, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={activity.id} 
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
                      isEven ? 'lg:-right-10' : 'lg:-left-10'
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

                  <Link 
                    href="/#contact" 
                    className="mt-4 px-8 py-4 bg-primary text-white hover:bg-primary-dark font-bold uppercase tracking-wider text-sm rounded-full transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Book This Escape
                  </Link>
                </div>

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
            Our luxury travel architects can design bespoke itineraries built around your unique global escape aspirations. Let's co-create your signature story.
          </p>
          <Link 
            href="/#contact" 
            className="mt-4 px-10 py-5 bg-primary text-white hover:bg-primary-dark font-bold uppercase tracking-wider text-sm rounded-full transition-all shadow-lg"
          >
            Consult Our Architects
          </Link>
        </div>
      </section>

    </div>
  );
}
