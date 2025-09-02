import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <GallerySection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
