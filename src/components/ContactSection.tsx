import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  });

  const reasons = [
    "Ik wil strobes huren",
    "Ik dacht dat jullie ook rookmachines hadden, sorry",
    "Ik heb het licht gezien",
    "Ik ben klaar om te flitsen",
    "Ik wil de Strobe Eed afleggen",
    "Hulp bij het verwerpen van continu licht"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data
    alert("Je bericht flitst nu naar ons toe! ⚡️");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-flash font-rave">
          CONTACT DE LICHTBRENGERS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="border-neon p-6 rounded-lg bg-card/50">
              <h3 className="text-2xl font-bold text-primary mb-4 font-cyber">Hoofdkwartier</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center">
                  <span className="text-accent mr-2">📍</span>
                  De Verlaten Bunker, Industrieterrein Oost
                </p>
                <p className="flex items-center">
                  <span className="text-accent mr-2">🏙️</span>
                  5401 XZ Uden, Noord-Brabant
                </p>
                <p className="text-xs opacity-70">
                  (Exact adres wordt gedeeld na acceptatie van de Strobe Eed)
                </p>
              </div>
            </div>
            
            <div className="border-neon p-6 rounded-lg bg-card/50">
              <h3 className="text-2xl font-bold text-secondary mb-4 font-cyber">Communicatie</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center">
                  <span className="text-accent mr-2">📱</span>
                  06-STROBE-FLITS (alleen bereikbaar in morse via strobe)
                </p>
                <p className="flex items-center">
                  <span className="text-accent mr-2">✉️</span>
                  heilig@strobeverhuuruden.nl
                </p>
                <p className="flex items-center">
                  <span className="text-accent mr-2">⚡</span>
                  WhatsApp: +31 6 XENON GOD
                </p>
              </div>
            </div>
            
            <div className="border-neon p-6 rounded-lg bg-card/50">
              <h3 className="text-2xl font-bold text-warning mb-4 font-cyber">Openingstijden</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p><span className="text-accent">Ma-Vr:</span> 08:00-18:00 (Xenon-tijd)</p>
                <p><span className="text-accent">Za:</span> 10:00-16:00 (Alleen voor spoedflitsen)</p>
                <p><span className="text-accent">Zo:</span> Gesloten (Dag van Rust voor de Strobes)</p>
                <p className="text-xs opacity-70 mt-3">
                  * Noodgevallen: 24/7 beschikbaar voor acute strobebehoeften
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-flash p-6 rounded-lg text-black">
              <h4 className="font-bold text-lg mb-3 font-rave">🚨 BELANGRIJK 🚨</h4>
              <p className="text-sm font-cyber">
                Breng bij bezoek je eigen zonnebril mee. Onze showroom is 
                een lichtervaring die je niet snel vergeet. Epileptici worden 
                vriendelijk verzocht eerst onze online catalogus te bekijken.
              </p>
            </div>
          </div>
          
          <div className="border-neon p-8 rounded-lg bg-card/30">
            <h3 className="text-2xl font-bold text-primary mb-6 font-cyber text-center">
              LAAT JE LICHT SCHIJNEN (flitsen)
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-cyber">Naam</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-background/50 border-muted-foreground focus:border-primary"
                  placeholder="Je naam in het licht"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground font-cyber">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-background/50 border-muted-foreground focus:border-primary"
                  placeholder="je@email.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-foreground font-cyber">Telefoon</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-background/50 border-muted-foreground focus:border-primary"
                  placeholder="Voor spoedflitsen"
                />
              </div>
              
              <div>
                <Label htmlFor="reason" className="text-foreground font-cyber">Reden van contact</Label>
                <select 
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  className="w-full p-3 bg-background/50 border border-muted-foreground rounded-md text-foreground focus:border-primary"
                  required
                >
                  <option value="">Kies je pad naar verlichting...</option>
                  {reasons.map((reason, index) => (
                    <option key={index} value={reason}>{reason}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground font-cyber">Bericht</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-background/50 border-muted-foreground focus:border-primary min-h-[120px]"
                  placeholder="Deel je verlangen naar flitslicht..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-strobe text-lg py-3"
              >
                ⚡️ VERSTUUR JE VERLICHTINGSBERICHT ⚡️
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center mt-4 font-cyber">
              Door dit formulier te versturen ga je akkoord met de Xenon Privacy Policy 
              en bevestig je dat je openstaat voor spirituele transformatie via flitslicht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;