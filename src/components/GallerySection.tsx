import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid, List, Heart, Share2, ZoomIn } from "lucide-react";
import { artworks, categories, getArtworksByCategory, searchArtworks } from "@/data/artworks";
import { WatermarkSection } from "@/components/WatermarkBackground";

const GallerySection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState<number[]>([]);

  // Using the real artwork collection from Kondapalli Sheshagiri Rao

  // Categories are now imported from the artwork data

  const filteredArtworks = searchQuery 
    ? searchArtworks(searchQuery).filter(artwork => 
        selectedCategory === "all" || artwork.category === selectedCategory
      )
    : getArtworksByCategory(selectedCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <WatermarkSection id="gallery" className="py-20 warm-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            The Master's Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Journey through the artistic legacy of Kondapalli Sheshagiri Rao, where mythology, 
            folk life, and nature converge in timeless masterpieces.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            Each canvas bears witness to a life devoted to preserving India's cultural soul
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search artworks, artists, or styles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.label}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-8 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {filteredArtworks.map((artwork) => (
            <Card key={artwork.id} className="artwork-card overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={`${artwork.title} - ${artwork.description}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                    target.alt = 'Artwork image unavailable';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => toggleFavorite(artwork.id)}
                      className="p-2"
                      aria-label={favorites.includes(artwork.id) ? `Remove ${artwork.title} from favorites` : `Add ${artwork.title} to favorites`}
                    >
                      <Heart className={`h-4 w-4 ${favorites.includes(artwork.id) ? 'fill-current text-highlight' : ''}`} />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="p-2"
                      onClick={() => navigator.share?.({ title: artwork.title, text: artwork.description, url: window.location.href })}
                      aria-label={`Share ${artwork.title}`}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="p-2"
                      onClick={() => window.open(artwork.image, '_blank')}
                      aria-label={`View full size image of ${artwork.title}`}
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    {artwork.category.charAt(0).toUpperCase() + artwork.category.slice(1)}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {artwork.title}
                  </h3>
                 <p className="text-sm text-accent font-medium">
                   {artwork.period} • {artwork.year}
                 </p>
                </div>
                
                 <p className="text-muted-foreground mb-2 text-sm italic">
                   {artwork.emotional_tone}
                 </p>
                
                <p className="text-foreground mb-4 leading-relaxed">
                  {artwork.description}
                </p>
                
                 <div className="flex flex-wrap gap-2 mb-4">
                   <Badge variant="outline">{artwork.medium}</Badge>
                   <Badge variant="outline">{artwork.dimensions}</Badge>
                   {artwork.mythological_reference && (
                     <Badge variant="secondary" className="text-xs">
                       Sacred Story
                     </Badge>
                   )}
                 </div>
                 
                 <p className="text-xs text-muted-foreground mb-4 italic leading-relaxed">
                   {artwork.cultural_significance}
                 </p>
                
                <Button className="w-full" variant="outline">
                  Enquire to Collect
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredArtworks.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Artworks
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              No artworks found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or selected category
            </p>
            <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </WatermarkSection>
  );
};

export default GallerySection;