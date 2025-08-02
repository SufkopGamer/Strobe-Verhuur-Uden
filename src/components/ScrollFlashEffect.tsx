import { useEffect, useState } from "react";

const ScrollFlashEffect = () => {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (!isFlashing) {
        setIsFlashing(true);
        
        timeout = setTimeout(() => {
          setIsFlashing(false);
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, [isFlashing]);

  if (!isFlashing) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 bg-primary/5 animate-strobe-fast"></div>
  );
};

export default ScrollFlashEffect;