import { Plane, Calendar, Users, MapPin } from 'lucide-react';

export default function Booking() {
  return (
    <main className="min-h-screen w-full relative flex items-center justify-end bg-black overflow-hidden">
      
      {/* Full Screen Background Image */}
      <img
        src="/booking.jpeg"
        alt="Booking Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      {/* Booking Form Floating on the Right */}
      <div className="w-full md:w-[600px] lg:w-[700px] h-screen overflow-y-auto flex items-center justify-center p-6 md:p-12 lg:p-16 relative z-10 pt-32 md:pt-12 bg-black/40 backdrop-blur-lg shadow-2xl border-l border-white/10">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
            Search Flights
          </h2>
          <p className="text-white/80 mb-8 md:mb-12">Find the best routes and exclusive deals to Kerala.</p>

          <form className="flex flex-col gap-6 md:gap-8 text-black">
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={14} /> From
                </label>
                <input type="text" className="w-full bg-white/90 backdrop-blur-sm border border-transparent rounded-xl px-4 py-4 text-base md:text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Departure City" />
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Plane size={14} /> To
                </label>
                <input type="text" className="w-full bg-white/90 backdrop-blur-sm border border-transparent rounded-xl px-4 py-4 text-base md:text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all font-semibold text-primary" defaultValue="Kochi (COK)" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Calendar size={14} /> Departure Date
                </label>
                <input type="date" className="w-full bg-white/90 backdrop-blur-sm border border-transparent rounded-xl px-4 py-4 text-base md:text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all" />
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <label className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Users size={14} /> Passengers
                </label>
                <select className="w-full bg-white/90 backdrop-blur-sm border border-transparent rounded-xl px-4 py-4 text-base md:text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>Group (4+)</option>
                </select>
              </div>
            </div>
            
            <button type="button" className="mt-2 md:mt-4 bg-primary text-white font-black uppercase tracking-widest py-5 px-8 rounded-xl hover:bg-primary-dark transition-colors w-full text-lg md:text-xl shadow-xl shadow-primary/30 flex justify-center items-center gap-3 hover:scale-[1.02]">
              Search Flights <Plane size={20} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
