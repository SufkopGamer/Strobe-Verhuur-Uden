import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AssortmentSection from "@/components/AssortmentSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StrobePopup from "@/components/StrobePopup";
import ScrollFlashEffect from "@/components/ScrollFlashEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <AssortmentSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
      
      {/* Special Effects */}
      <StrobePopup />
      <ScrollFlashEffect />
    </div>
  );
};

export default Index;