import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import artwork11 from '@/assets/Paintings-Images/11.jpg'; // Lotus Maiden - perfect for watermark

interface WatermarkBackgroundProps {
  children: React.ReactNode;
}

export const WatermarkBackground: React.FC<WatermarkBackgroundProps> = ({ children }) => {
  const [watermarkEnabled, setWatermarkEnabled] = useState(true);

  // Load user preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('watermark-enabled');
    if (saved !== null) {
      setWatermarkEnabled(JSON.parse(saved));
    }
  }, []);

  // Save user preference to localStorage
  const toggleWatermark = () => {
    const newValue = !watermarkEnabled;
    setWatermarkEnabled(newValue);
    localStorage.setItem('watermark-enabled', JSON.stringify(newValue));
  };

  return (
    <div className="relative min-h-screen">
      {/* Watermark Background - Lotus Maiden */}
      {watermarkEnabled && (
        <div 
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${artwork11})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.03,
            mixBlendMode: 'multiply',
            filter: 'sepia(20%) saturate(50%) brightness(1.2)',
          }}
        />
      )}

      {/* Toggle Button */}
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

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};