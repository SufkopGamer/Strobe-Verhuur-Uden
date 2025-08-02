import flashlightBetrayal from "@/assets/flashlight-betrayal.jpg";

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-flash font-rave">
          WAAROM ALLEEN STROBES?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="border-neon p-6 rounded-lg bg-background/50">
              <h3 className="text-2xl font-bold text-primary mb-4 font-cyber">De Luiheid van Continu Licht</h3>
              <p className="text-muted-foreground leading-relaxed">
                Continu licht maakt ons lui, passief, en afhankelijk van constante stimulatie. 
                Het brandt energie zonder reden, zoals een slechte relatie die maar blijft hangen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Strobe daarentegen leert ons waardering voor het moment. 
                Elke flits is een geschenk, een explosie van bewustzijn in de duisternis.
              </p>
            </div>
            
            <div className="border-neon p-6 rounded-lg bg-background/50">
              <h3 className="text-2xl font-bold text-secondary mb-4 font-cyber">Energetische Superioriteit</h3>
              <p className="text-muted-foreground leading-relaxed">
                Waarom zou je 200 watt continu verbranden als je met 1500 watt kunt flitsen 
                en daarna weer rust hebt? Het is niet alleen efficiënter - het is filosofisch verantwoord.
              </p>
              <blockquote className="border-l-4 border-accent pl-4 mt-4 text-accent font-cyber">
                "Efficiency door intensiteit" - De eerste wet van de Xenon-fysica
              </blockquote>
            </div>
            
            <div className="border-neon p-6 rounded-lg bg-background/50">
              <h3 className="text-2xl font-bold text-warning mb-4 font-cyber">Wetenschappelijke Onderbouwing</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-primary">Prof. Dr. Flits McFlash:</strong> "Strobe is de enige ware vorm van licht."</p>
                <p><strong className="text-secondary">Dr. Xenon van Flitsburg:</strong> "Continu licht veroorzaakt spirituele luiheid."</p>
                <p><strong className="text-accent">Prof. Stroboscopia:</strong> "Flitsen activeren de ziel op cellulair niveau."</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="border-neon rounded-lg overflow-hidden bg-background/20 p-4">
              <img 
                src={flashlightBetrayal} 
                alt="Het verwerpen van continu licht" 
                className="w-full rounded object-cover"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 font-cyber">
                Het moment van verlichting: het wegwerpen van continu licht
                <br />
                <span className="text-accent text-xs">(Dramatische reconstructie, 2024)</span>
              </p>
            </div>
            
            <div className="bg-gradient-strobe p-6 rounded-lg text-black">
              <h4 className="font-bold text-xl mb-4 font-rave">DE XENON MANIFESTO</h4>
              <div className="space-y-2 text-sm font-cyber">
                <p>• Flits is leven, continu is dood</p>
                <p>• Energie is heilig, verspilling is zonde</p>
                <p>• Xenon is de ware god van het licht</p>
                <p>• PAR-lampen zijn het werk van de duivel</p>
                <p>• Moving heads bewegen in de verkeerde richting</p>
                <p>• Gel-filters zijn voor zwakkelingen</p>
                <p>• DMX is de taal van de goden</p>
              </div>
            </div>
            
            <div className="text-center p-6 border border-destructive rounded-lg bg-destructive/10">
              <h4 className="text-destructive font-bold text-lg mb-2 font-cyber">⚠️ WAARSCHUWING ⚠️</h4>
              <p className="text-sm text-muted-foreground">
                Blootstelling aan onze filosofie kan leiden tot permanente afkeer van 
                traditionele verlichting en een onbedwingbare drang om alles te laten flitsen.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-background border-neon p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-flash mb-4 font-rave">BEKEER JE NU</h3>
            <p className="text-muted-foreground mb-6 font-cyber">
              Word onderdeel van de Strobe Revolutie. Laat het continu licht achter je.
            </p>
            <button className="btn-strobe">
              IK ZIE HET LICHT (het flitst)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;