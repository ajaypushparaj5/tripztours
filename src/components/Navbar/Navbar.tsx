// "use client";

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   // Both the landing page and activities page have dark headers.
//   const hasDarkHeader = pathname === '/' || pathname === '/activities';

//   // Monitor scroll height to transition the navbar background and text color on desktop
//   useEffect(() => {
//     const handleScroll = () => {
//       const threshold = pathname === '/' ? window.innerHeight * 0.9 : 80;
//       setScrolled(window.scrollY > threshold);
//     };

//     handleScroll();

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [pathname]);

//   // Mobile menu toggle closes when path changes
//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   // Handle anchor navigation from any page
//   const handleAnchorClick = (e: React.MouseEvent, anchor: string) => {
//     e.preventDefault();
//     setIsOpen(false);
//     if (pathname === '/') {
//       // Already on home — smooth scroll
//       const el = document.getElementById(anchor);
//       if (el) el.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       // Navigate to home, then scroll after load
//       router.push(`/#${anchor}`);
//     }
//   };

//   // Show cream background if scrolled, OR if the page doesn't have a dark header, OR if mobile menu is expanded
//   const showCreamNavbar = !hasDarkHeader || scrolled || isOpen;

//   // Use charcoal text if scrolled, OR if the page doesn't have a dark header, OR if mobile menu is expanded
//   const useCharcoalText = !hasDarkHeader || scrolled || isOpen;

//   const navItemClass = useCharcoalText
//     ? 'text-charcoal/80 font-bold hover:text-primary transition-colors text-[14px] tracking-wider uppercase relative group'
//     : 'text-white/80 font-bold hover:text-white transition-colors text-[14px] tracking-wider uppercase relative group';

//   const underlineClass = useCharcoalText
//     ? 'absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'
//     : 'absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full';

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
//         showCreamNavbar
//           ? 'py-4 bg-[#FAF6F0] shadow-sm border-b border-primary/10'
//           : 'py-6 bg-transparent border-b border-transparent shadow-none'
//       }`}
//     >
//       <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">

//         {/* Logo containing the brand image */}
//         <div className="flex items-center">
//           <Link
//             href="/"
//             className="flex items-center gap-2 group focus:outline-none"
//           >
//             <div className="relative w-36 h-14 rounded-xl overflow-hidden border border-white/15 bg-white shadow-md transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
//               <Image
//                 src="/tripzlogo.png"
//                 alt="Tripz World Logo"
//                 fill
//                 sizes="144px"
//                 className="object-contain p-0 scale-[1.22]"
//                 priority
//               />
//             </div>
//           </Link>
//         </div>

//         {/* Centered Links (Desktop) */}
//         <div className="hidden lg:flex justify-center items-center gap-8">

//           <a href="/#destinations" onClick={(e) => handleAnchorClick(e, 'destinations')} className={navItemClass}>
//             Destinations
//             <span className={underlineClass}></span>
//           </a>
//           <a href="/#about" onClick={(e) => handleAnchorClick(e, 'about')} className={navItemClass}>
//             About Us
//             <span className={underlineClass}></span>
//           </a>
//           <a href="/#gallery" onClick={(e) => handleAnchorClick(e, 'gallery')} className={navItemClass}>
//             Gallery
//             <span className={underlineClass}></span>
//           </a>
//           <a href="/#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className={navItemClass}>
//             Contact
//             <span className={underlineClass}></span>
//           </a>
//           <Link href="/activities" className={navItemClass}>
//             Activities
//             <span className={underlineClass}></span>
//           </Link>
//         </div>

//         {/* Mobile Hamburger Button */}
//         <button
//           className={`lg:hidden focus:outline-none z-50 relative cursor-pointer border-none bg-transparent p-1 outline-none ring-0 active:scale-90 transition-all duration-200 ${
//             useCharcoalText ? 'text-charcoal hover:text-primary' : 'text-white hover:text-white/80'
//           }`}
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? (
//             <X className="w-7 h-7 transition-transform duration-300 rotate-0 hover:rotate-90" />
//           ) : (
//             <Menu className="w-7 h-7 transition-transform duration-300" />
//           )}
//         </button>
//       </div>

//       {/* Standard Mobile Dropdown Menu (Collapsible under Navbar) */}
//       <div
//         className={`absolute top-full left-0 w-full bg-[#FAF6F0] border-b border-primary/10 z-40 flex flex-col px-8 py-6 gap-4 shadow-2xl transition-all duration-300 ease-in-out ${
//           isOpen
//             ? 'opacity-100 translate-y-0 pointer-events-auto visible'
//             : 'opacity-0 -translate-y-4 pointer-events-none invisible'
//         } lg:hidden`}
//       >

//         <a
//           href="/#destinations"
//           onClick={(e) => handleAnchorClick(e, 'destinations')}
//           className="text-[14px] font-bold text-charcoal/90 hover:text-primary transition-colors uppercase tracking-widest cursor-pointer"
//         >
//           Destinations
//         </a>
//         <a
//           href="/#about"
//           onClick={(e) => handleAnchorClick(e, 'about')}
//           className="text-[14px] font-bold text-charcoal/90 hover:text-primary transition-colors uppercase tracking-widest cursor-pointer"
//         >
//           About Us
//         </a>
//         <a
//           href="/#gallery"
//           onClick={(e) => handleAnchorClick(e, 'gallery')}
//           className="text-[14px] font-bold text-charcoal/90 hover:text-primary transition-colors uppercase tracking-widest cursor-pointer"
//         >
//           Gallery
//         </a>
//         <a
//           href="/#contact"
//           onClick={(e) => handleAnchorClick(e, 'contact')}
//           className="text-[14px] font-bold text-charcoal/90 hover:text-primary transition-colors uppercase tracking-widest cursor-pointer"
//         >
//           Contact
//         </a>
//         <Link
//           href="/activities"
//           onClick={() => setIsOpen(false)}
//           className="text-[14px] font-bold text-charcoal/90 hover:text-primary transition-colors uppercase tracking-widest"
//         >
//           Activities
//         </Link>
//       </div>
//     </nav>
//   );
// }


"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const hasDarkHeader = pathname === '/' || pathname === '/activities';

  useEffect(() => {
    const handleScroll = () => {
      const threshold = pathname === '/' ? window.innerHeight * 0.9 : 80;
      setScrolled(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (pathname === '/') {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${anchor}`);
    }
  };

  const showTranslucentNavbar = !hasDarkHeader || scrolled || isOpen;

  const navItemClass = 'text-white/80 font-bold hover:text-white transition-colors text-[14px] tracking-wider uppercase relative group';
  const underlineClass = 'absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${showTranslucentNavbar
        ? 'py-4 bg-[#38a08f]/50 backdrop-blur-md shadow-sm border-b border-white/10'
        : 'py-6 bg-transparent border-b border-transparent shadow-none'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group focus:outline-none">
            <div
              className={`relative w-36 h-14 rounded-xl overflow-hidden border transition-all duration-500 group-hover:scale-105 flex items-center justify-center ${showTranslucentNavbar
                ? 'border-white/0 bg-white/0 shadow-none'
                : 'border-white/15 bg-white shadow-md'
                }`}
            >
              <Image
                src="/tripzlogo.png"
                alt="Tripz World Logo"
                fill
                sizes="144px"
                className={`object-contain p-0 scale-[1.22] transition-opacity duration-500 ${showTranslucentNavbar ? 'opacity-0' : 'opacity-100'}`}
                priority
              />
              <Image
                src="/tripzlogo1.png"
                alt="Tripz World Logo"
                fill
                sizes="144px"
                className={`object-contain p-0 scale-[1.22] transition-opacity duration-500 ${showTranslucentNavbar ? 'opacity-100' : 'opacity-0'}`}
                priority
              />
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex justify-center items-center gap-8">
          <a href="/#destinations" onClick={(e) => handleAnchorClick(e, 'destinations')} className={navItemClass}>
            Destinations
            <span className={underlineClass}></span>
          </a>
          <a href="/#about" onClick={(e) => handleAnchorClick(e, 'about')} className={navItemClass}>
            About Us
            <span className={underlineClass}></span>
          </a>
          <a href="/#gallery" onClick={(e) => handleAnchorClick(e, 'gallery')} className={navItemClass}>
            Gallery
            <span className={underlineClass}></span>
          </a>
          <a href="/#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className={navItemClass}>
            Contact
            <span className={underlineClass}></span>
          </a>
          <Link href="/activities" className={navItemClass}>
            Activities
            <span className={underlineClass}></span>
          </Link>
        </div>

        <button
          className="lg:hidden focus:outline-none z-50 relative cursor-pointer border-none bg-transparent p-1 outline-none ring-0 active:scale-90 transition-all duration-200 text-white hover:text-white/80"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-7 h-7 transition-transform duration-300 rotate-0 hover:rotate-90" />
          ) : (
            <Menu className="w-7 h-7 transition-transform duration-300" />
          )}
        </button>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-[#38a08f]/75 backdrop-blur-md border-b border-white/10 z-40 flex flex-col px-8 py-6 gap-4 shadow-2xl transition-all duration-300 ease-in-out ${isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto visible'
          : 'opacity-0 -translate-y-4 pointer-events-none invisible'
          } lg:hidden`}
      >
        <a
          href="/#destinations"
          onClick={(e) => handleAnchorClick(e, 'destinations')}
          className="text-[14px] font-bold text-white/90 hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
        >
          Destinations
        </a>
        <a
          href="/#about"
          onClick={(e) => handleAnchorClick(e, 'about')}
          className="text-[14px] font-bold text-white/90 hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
        >
          About Us
        </a>
        <a
          href="/#gallery"
          onClick={(e) => handleAnchorClick(e, 'gallery')}
          className="text-[14px] font-bold text-white/90 hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
        >
          Gallery
        </a>
        <a
          href="/#contact"
          onClick={(e) => handleAnchorClick(e, 'contact')}
          className="text-[14px] font-bold text-white/90 hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
        >
          Contact
        </a>
        <Link
          href="/activities"
          onClick={() => setIsOpen(false)}
          className="text-[14px] font-bold text-white/90 hover:text-white transition-colors uppercase tracking-widest"
        >
          Activities
        </Link>
      </div>
    </nav >
  );
}