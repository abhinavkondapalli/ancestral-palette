import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import artwork11 from '@/assets/Paintings-Images/11.jpg'; // Lotus Maiden - perfect for watermark

export const useWatermarkToggle = () => {
  const [watermarkEnabled, setWatermarkEnabled] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('watermark-enabled');
    if (saved !== null) {
      setWatermarkEnabled(JSON.parse(saved));
    }
  }, []);

  const toggleWatermark = () => {
    const newValue = !watermarkEnabled;
    setWatermarkEnabled(newValue);
    localStorage.setItem('watermark-enabled', JSON.stringify(newValue));
  };

  return { watermarkEnabled, toggleWatermark };
};

export const WatermarkToggle: React.FC = () => {
  const { watermarkEnabled, toggleWatermark } = useWatermarkToggle();

  return (
    <Button
      onClick={toggleWatermark}
      size="sm"
      variant="ghost"
      className="fixed top-20 right-4 z-50 bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background/90 transition-all duration-300"
      title={watermarkEnabled ? 'Hide background artwork' : 'Show background artwork'}
    >
      {watermarkEnabled ? (
        <EyeOff className="h-4 w-4" />
      ) : (
        <Eye className="h-4 w-4" />
      )}
    </Button>
  );
};

interface WatermarkSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const WatermarkSection: React.FC<WatermarkSectionProps> = ({ children, className = '', id }) => {
  const { watermarkEnabled } = useWatermarkToggle();

  return (
    <section id={id} className={`relative ${className}`}>
      {/* Watermark Background - Lotus Maiden */}
      {watermarkEnabled && (
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${artwork11})`,
            backgroundSize: '800px 600px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.04,
            mixBlendMode: 'multiply',
            filter: 'sepia(30%) saturate(40%) brightness(1.3) contrast(0.8)',
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};