import teamPhoto from "@/assets/team-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-flash font-rave">
          DE STROBE EED
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="border-neon p-6 rounded-lg bg-background/50">
              <h3 className="text-xl font-bold text-primary mb-4 font-cyber">De Bekering</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sinds 2024 hebben wij het pad van constant licht verlaten. 
                Waar anderen nog vastzitten aan hun archaïsche PAR-lampen en moving heads, 
                hebben wij de waarheid gevonden in de zuivere kracht van het flitslicht.
              </p>
            </div>
            
            <div className="border-neon p-6 rounded-lg bg-background/50">
              <h3 className="text-xl font-bold text-secondary mb-4 font-cyber">De Dagelijkse Devotie</h3>
              <p className="text-muted-foreground leading-relaxed">
                Elke dag bidden wij tot Xenon, de god van het flitslicht. 
                Onze medewerkers leggen jaarlijks de Strobe Eed af: 
                <em className="text-accent block mt-2">
                  "Ik zweer bij de heilige xenon-buis dat ik nooit meer zal verleiden 
                  met continu licht, maar alleen zal verheerlijken door flitsen."
                </em>
              </p>
            </div>
            
            <div className="border-neon p-6 rounded-lg bg-background/50">
              <h3 className="text-xl font-bold text-warning mb-4 font-cyber">De Filosofie</h3>
              <p className="text-muted-foreground leading-relaxed">
                Constant licht maakt lui. Flitslicht maakt levendig. 
                Waarom zou je 200 watt continu verbranden als je met 1500 watt 
                kunt flitsen en daarna weer rust hebt? Efficiency door intensiteit.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="border-neon rounded-lg overflow-hidden bg-background/20 p-4">
              <img 
                src={teamPhoto} 
                alt="Het Strobe Team in diepe meditatie" 
                className="w-full rounded object-cover"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 font-cyber">
                Het team tijdens de dagelijkse Xenon-meditatie
                <br />
                <span className="text-xs opacity-60">(zonnebrillen verplicht)</span>
              </p>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold animate-neon-flicker">
              BEKEERD SINDS 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;