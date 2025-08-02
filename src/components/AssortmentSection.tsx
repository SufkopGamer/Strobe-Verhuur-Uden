import strobeCollection from "@/assets/strobe-collection.jpg";
import { useState } from "react";

const strobeTypes = [
  {
    name: "De Flitssatan",
    power: "3000W",
    description: "Voor wanneer je de hel wilt laten flitsen",
    features: ["DMX-512", "Variabele flitssnelheid", "Dubbel xenon", "Oogverblinding gegarandeerd"],
    price: "€150/dag"
  },
  {
    name: "De Neuronverbrander", 
    power: "1500W",
    description: "Perfect voor intimate gatherings en hersenspoeling",
    features: ["Compact design", "Geluidsactivatie", "18 flits/seconde", "Medische disclaimer inbegrepen"],
    price: "€85/dag"
  },
  {
    name: "Baby's Eerste Epilepsie",
    power: "500W",
    description: "Instapmodel voor beginners (18+ alleen)",
    features: ["Zachte start-up", "Gebruiksvriendelijk", "Training inbegrepen", "Komt met zonnebril"],
    price: "€45/dag"
  },
  {
    name: "De Oogverlosser",
    power: "2500W",
    description: "Voor de ultieme bevrijding van continuous light",
    features: ["Waterdicht", "Winddicht", "Emotioneel instabiel", "Professionele therapie"],
    price: "€200/dag"
  },
  {
    name: "De Transcendent",
    power: "5000W",
    description: "Alleen voor de ware discipelen",
    features: ["Industriële kwaliteit", "50 flits/seconde", "Bunkerbestendig", "Komt met testament formulier"],
    price: "€500/dag"
  },
  {
    name: "De Bescheiden",
    power: "300W", 
    description: "Voor huiselijke toepassingen en beginners",
    features: ["Stille werking", "Energiezuinig", "Geschikt voor appartementen", "Buren-vriendelijk"],
    price: "€30/dag"
  }
];

const AssortmentSection = () => {
  const [selectedStrobe, setSelectedStrobe] = useState<number | null>(null);

  return (
    <section id="assortment" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-flash font-rave">
          HEILIGE COLLECTIE
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-xl text-muted-foreground font-cyber mb-4">
            Alleen maar strobes. Groot, klein, waterdicht, winddicht, emotioneel instabiel.
          </p>
          <p className="text-lg text-accent">
            Functies: DMX? ✅ Flits? ✅ Andere kleuren? ❌
          </p>
        </div>

        <div className="mb-16">
          <img 
            src={strobeCollection} 
            alt="Onze heilige strobe collectie" 
            className="w-full rounded-lg border-neon shadow-strobe"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strobeTypes.map((strobe, index) => (
            <div 
              key={index}
              className={`border-neon p-6 rounded-lg bg-card/50 cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedStrobe === index ? 'bg-primary/10 border-accent' : ''
              }`}
              onClick={() => setSelectedStrobe(selectedStrobe === index ? null : index)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-primary font-cyber">{strobe.name}</h3>
                <span className="text-warning font-bold text-lg">{strobe.power}</span>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {strobe.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-secondary font-semibold mb-2 text-sm">Features:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {strobe.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-primary mr-2">⚡</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-accent font-bold text-lg">{strobe.price}</span>
                <button className="btn-strobe text-xs px-3 py-1">
                  HUUR NU
                </button>
              </div>
              
              {selectedStrobe === index && (
                <div className="mt-4 p-3 border border-accent/30 rounded bg-accent/10 animate-fade-in">
                  <p className="text-xs text-accent font-cyber">
                    ⚠️ Let op: Deze strobe vereist een getekende disclaimer en 
                    een kort gesprek met onze Flits-consultant om te verzekeren 
                    dat je spiritueel voorbereid bent op deze intensiteit.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground font-cyber">
            Alle strobes worden geleverd met professionele DMX-kabels, 
            zonnebrillen en een spirituele gids tot het Xenon-pad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AssortmentSection;