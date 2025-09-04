import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import { WatermarkToggle } from "@/components/WatermarkBackground";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <WatermarkToggle />
      <main>
        <HeroSection />
        <StorySection />
        <GallerySection />
        <AboutSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Toaster />
    </div>
  );
};

export default Index;
