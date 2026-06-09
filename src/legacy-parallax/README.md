# Legacy Parallax Hero Component

This folder contains the old parallax-based hero landing page component and assets, packaged for reuse in other projects.

## Contents

- `ParallaxHero.tsx`: The Next.js client component that handles the multi-layer scroll-bound parallax animation using `framer-motion`.
- `assets/`: Image assets (clouds, mountains, hiker figure) used in the parallax.

## How to Reuse in Another Project

1. **Copy the Component**:
   Copy `ParallaxHero.tsx` into your components folder (e.g., `src/components/Hero/`).

2. **Copy the Assets**:
   Move the contents of the `assets/` folder to your project's `public/parallax/` directory. If you place them in a different path, remember to update the paths inside `ParallaxHero.tsx` under `PARALLAX_CONFIG`:
   ```typescript
   export const PARALLAX_CONFIG = {
     // ...
     clouds: {
       src: '/parallax/cloud.jpg',
       // ...
     },
     mountain: {
       src: '/parallax/mountain.png',
       // ...
     },
     man: {
       src: '/parallax/man.png',
       // ...
     }
   };
   ```

3. **Install Dependencies**:
   Ensure you have the required packages installed in your target project:
   ```bash
   npm install framer-motion lucide-react
   ```

4. **Integration**:
   Import and use it in your page layout:
   ```tsx
   import ParallaxHero from '@/components/Hero/ParallaxHero';

   export default function Page() {
     return (
       <main>
         <ParallaxHero />
         {/* other sections */}
       </main>
     );
   }
   ```
