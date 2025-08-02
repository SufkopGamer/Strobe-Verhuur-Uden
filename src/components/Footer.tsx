const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4 font-cyber">
              STROBE VERHUUR UDEN
            </h3>
            <p className="text-muted-foreground text-sm font-cyber leading-relaxed">
              Sinds 2024 volledig toegewijd aan de pure kunst van het flitslicht. 
              Geen compromissen, geen concessies, alleen maar strobes.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-secondary mb-4 font-cyber">Heilige Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors">De Strobe Eed</a></li>
              <li><a href="#assortment" className="text-muted-foreground hover:text-accent transition-colors">Heilige Collectie</a></li>
              <li><a href="#philosophy" className="text-muted-foreground hover:text-accent transition-colors">Waarom Alleen Strobes?</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-warning mb-4 font-cyber">Xenon Wisdom</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span className="text-primary mr-2">⚡</span>
                Flits is leven
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">⚡</span>
                Continu is dood
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">⚡</span>
                Xenon is heilig
              </li>
              <li className="flex items-center">
                <span className="text-warning mr-2">⚡</span>
                DMX is de taal der goden
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground font-cyber">
                © 2024 Strobe Verhuur Uden - Een trots onderdeel van 
                <span className="text-accent hover:text-accent/80 transition-colors cursor-pointer ml-1">
                  LJ Rens
                </span>
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                (Maar we praten niet over die andere lampen)
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-xs text-muted-foreground text-center">
                <p>Status: FLITSEND ACTIEF</p>
                <div className="flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-strobe-slow mr-1"></div>
                  <span>Strobes Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-strobe px-6 py-3 rounded-lg text-black">
            <p className="font-bold text-sm font-rave">
              "In Xenon We Trust" - Het Strobe Verhuur Uden Motto
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;