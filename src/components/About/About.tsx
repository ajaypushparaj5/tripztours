export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col justify-center bg-black text-white py-24 relative overflow-hidden">
      
      {/* Full Screen Background Image */}
      <img
        src="/aboutus.jpeg"
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container mx-auto px-6 z-10 flex flex-col items-start justify-center h-full">
        <h2 className="text-[clamp(5rem,15vw,16rem)] font-black uppercase tracking-tighter leading-none mb-12 text-left">
          About Us
        </h2>
        
        <div className="max-w-4xl text-left space-y-8 text-xl md:text-3xl font-light leading-relaxed text-white/90">
          <p>
            We are not just a travel agency. We are the <span className="font-bold text-white">architects of your escape</span>. 
            Rooted deeply in the emerald heart of Kerala, Tripz Tours transforms ordinary vacations into 
            cinematic journeys through God's Own Country.
          </p>
          <p>
            From the silent, misty mornings in the Munnar tea estates to the rhythmic swaying of palms 
            along the Alleppey backwaters, we curate experiences that linger in your soul long after you've returned home.
          </p>
        </div>
      </div>
    </section>
  );
}
