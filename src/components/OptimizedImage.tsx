import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: "square" | "portrait" | "landscape" | "auto";
  objectFit?: "contain" | "cover" | "fill" | "scale-down";
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  aspectRatio = "auto",
  objectFit = "contain",
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square":
        return "aspect-square";
      case "portrait":
        return "aspect-[3/4]";
      case "landscape":
        return "aspect-[4/3]";
      default:
        return "";
    }
  };

  const getObjectFitClass = () => {
    switch (objectFit) {
      case "cover":
        return "object-cover";
      case "fill":
        return "object-fill";
      case "scale-down":
        return "object-scale-down";
      default:
        return "object-contain";
    }
  };

  return (
    <div className={cn("relative overflow-hidden", getAspectRatioClass())}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full transition-all duration-700",
          "high-quality-image",
          getObjectFitClass(),
          isLoading && "opacity-0",
          hasError && "opacity-50",
          className
        )}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
        onError={(e) => {
          console.error(`Failed to load image: ${src}`, e);
          handleError();
        }}
        style={{
          backfaceVisibility: "hidden",
          transform: "translateZ(0)"
        }}
      />

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/80 text-muted-foreground">
          <div className="text-center">
            <div className="text-sm font-medium">Image unavailable</div>
            <div className="text-xs opacity-75">Artwork could not be loaded</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;