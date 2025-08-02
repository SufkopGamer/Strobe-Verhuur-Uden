import { useState, useEffect } from "react";
import { X } from "lucide-react";

const StrobePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStrobe, setCurrentStrobe] = useState("");

  const strobesInAction = [
    "De Flitssatan - Momenteel actief in Boxmeer op een techno doopfeest",
    "De Neuronverbrander - Verlicht een bruiloft in Veghel (met toestemming van beide families)",
    "Baby's Eerste Epilepsie - Helpt een 18e verjaardag in Oss te onthouden",
    "De Oogverlosser - Transformeert een bedrijfsborrel in Eindhoven",
    "De Transcendent - Begeleidt een spirituele bijeenkomst in de Peel",
    "De Bescheiden - Zorgt voor sfeer tijdens een huisfeest in Uden"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomStrobe = strobesInAction[Math.floor(Math.random() * strobesInAction.length)];
      setCurrentStrobe(randomStrobe);
      setIsVisible(true);
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 30000); // Show every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-card border-neon p-4 rounded-lg shadow-strobe animate-fade-in">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-primary font-bold text-sm font-cyber">
            ⚡ FLITS VAN DE DAG ⚡
          </h4>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        <p className="text-xs text-muted-foreground font-cyber">
          {currentStrobe}
        </p>
        <div className="mt-3 flex justify-center">
          <div className="w-8 h-2 bg-primary rounded animate-strobe-fast"></div>
        </div>
      </div>
    </div>
  );
};

export default StrobePopup;