import { useEffect, useState } from "react";
import heroStrobe from "@/assets/hero-strobe.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlashing(true);
      setTimeout(() => setIsFlashing(false), 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroStrobe})` }}
      ></div>
      
      {isFlashing && (
        <div className="absolute inset-0 bg-primary/20 animate-strobe-fast"></div>
      )}

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <h1 
          className="text-6xl md:text-8xl font-bold text-flash mb-8 font-rave tracking-wider"
          data-text="GEEN PAR. GEEN SPOT. GEEN GEL. GEEN BULLSH*T."
        >
          <span className="block text-glitch" data-text="GEEN PAR. GEEN SPOT.">GEEN PAR. GEEN SPOT.</span>
          <span className="block text-glitch" data-text="GEEN GEL. GEEN BULLSH*T.">GEEN GEL. GEEN BULLSH*T.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-cyber">
          Wij verhuren alleen strobes. We hebben alles wat flitst.
        </p>
        <p className="text-lg md:text-xl text-accent mb-12 animate-neon-flicker">
          Niks wat continu schijnt.
        </p>
        
        <Button 
          size="lg" 
          className="btn-strobe text-lg px-8 py-4 hover:scale-110 transition-transform duration-300"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          ⚡️ LAAT ONS FLITSEN IN JE LEVEN ⚡️
        </Button>
        
        <div className="mt-16 text-sm text-muted-foreground font-cyber">
          <p>WELKOM IN HET LICHT</p>
          <p className="text-xs mt-2 opacity-60">Een trotse tak van LJ Rens</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;