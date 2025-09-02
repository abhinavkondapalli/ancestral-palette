import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";
import madhubaniArt from "@/assets/artwork-madhubani.jpg";
import warliArt from "@/assets/artwork-warli.jpg";
import tanjoreArt from "@/assets/artwork-tanjore.jpg";
import miniatureArt from "@/assets/artwork-miniature.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Kondapalli Sheshagiri Rao",
      subtitle: "Master of Indian Cultural Art",
      description: "In loving memory of an artist whose life was devoted to preserving India's sacred artistic traditions.",
      image: heroImage,
      accent: "1935 - 2010"
    },
    {
      id: 2,
      title: "Sacred Mythology",
      subtitle: "Divine Stories in Color",
      description: "His Madhubani works captured cosmic order and divine harmony, each stroke a prayer to the eternal.",
      image: madhubaniArt,
      accent: "Spiritual Expression"
    },
    {
      id: 3,
      title: "Folk Life Celebrations",
      subtitle: "Community & Harvest",
      description: "Through Warli art, he celebrated the simple joys of village life, unity, and agricultural traditions.",
      image: warliArt,
      accent: "Cultural Memory"
    },
    {
      id: 4,
      title: "Natural Harmony",
      subtitle: "Beauty in Every Detail",
      description: "His masterful Tanjore works embodied the divine presence he felt in nature's every manifestation.",
      image: tanjoreArt,
      accent: "Master's Touch"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`${slide.title} - ${slide.description}`}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
              target.alt = 'Artwork image unavailable';
            }}
          />
          <div className="absolute inset-0 overlay-gradient"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {index === currentSlide && (
                  <>
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium backdrop-blur-sm">
                        {slide.accent}
                      </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-accent mb-6">
                      {slide.subtitle}
                    </h2>
                    
                    <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg" 
                        className="hero-btn-primary group"
                        onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
                        aria-label="Navigate to gallery section"
                      >
                        Enter the Gallery
                        <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="hero-btn-secondary"
                        onClick={() => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })}
                        aria-label="Navigate to master's story section"
                      >
                        His Journey
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Previous/Next Buttons */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="text-primary-foreground hover:bg-primary-foreground/20 p-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-accent w-8'
                    : 'bg-primary-foreground/50 hover:bg-primary-foreground/75'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="text-primary-foreground hover:bg-primary-foreground/20 p-2"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center text-primary-foreground/75">
          <span className="text-sm mb-2 rotate-90 origin-center whitespace-nowrap">Scroll</span>
          <div className="w-px h-16 bg-primary-foreground/50"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;