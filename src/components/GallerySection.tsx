import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid, List, Heart, Share2, ZoomIn } from "lucide-react";
import madhubaniArt from "@/assets/artwork-madhubani.jpg";
import warliArt from "@/assets/artwork-warli.jpg";
import tanjoreArt from "@/assets/artwork-tanjore.jpg";
import miniatureArt from "@/assets/artwork-miniature.jpg";

const GallerySection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState<number[]>([]);

  const artworks = [
    {
      id: 1,
      title: "Sacred Geometry",
      artist: "Traditional Madhubani",
      category: "madhubani",
      period: "Contemporary",
      year: "2020",
      description: "Intricate geometric patterns depicting the cosmic order and divine harmony.",
      image: madhubaniArt,
      price: "₹25,000",
      dimensions: "24\" x 18\"",
      medium: "Natural pigments on handmade paper",
      cultural_significance: "Represents the eternal cycle of life and nature's abundance"
    },
    {
      id: 2,
      title: "Village Celebration",
      artist: "Tribal Warli",
      category: "warli",
      period: "Traditional",
      year: "2019",
      description: "A vibrant depiction of harvest festival celebrations in tribal Maharashtra.",
      image: warliArt,
      price: "₹18,000",
      dimensions: "20\" x 16\"",
      medium: "White pigment on mud canvas",
      cultural_significance: "Celebrates community unity and agricultural traditions"
    },
    {
      id: 3,
      title: "Divine Radiance",
      artist: "South Indian Tanjore",
      category: "tanjore",
      period: "Classical",
      year: "2021",
      description: "A magnificent portrayal of divinity with gold leaf embellishments.",
      image: tanjoreArt,
      price: "₹45,000",
      dimensions: "30\" x 24\"",
      medium: "Gold leaf and precious stones on canvas",
      cultural_significance: "Sacred art form from Tamil Nadu temple traditions"
    },
    {
      id: 4,
      title: "Royal Court",
      artist: "Mughal Miniature",
      category: "miniature",
      period: "Classical",
      year: "2018",
      description: "Exquisite miniature painting showcasing Mughal courtly elegance.",
      image: miniatureArt,
      price: "₹35,000",
      dimensions: "12\" x 9\"",
      medium: "Natural pigments on ivory paper",
      cultural_significance: "Represents the synthesis of Persian and Indian artistic traditions"
    }
  ];

  const categories = [
    { id: "all", label: "All Artworks", count: artworks.length },
    { id: "madhubani", label: "Madhubani", count: artworks.filter(a => a.category === "madhubani").length },
    { id: "warli", label: "Warli", count: artworks.filter(a => a.category === "warli").length },
    { id: "tanjore", label: "Tanjore", count: artworks.filter(a => a.category === "tanjore").length },
    { id: "miniature", label: "Miniature", count: artworks.filter(a => a.category === "miniature").length }
  ];

  const filteredArtworks = artworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artwork.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || artwork.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <section id="gallery" className="py-20 warm-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Cultural Art Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a curated collection of traditional Indian art forms, each piece telling 
            a story of cultural heritage and artistic mastery passed down through generations.
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
                  alt={artwork.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => toggleFavorite(artwork.id)}
                      className="p-2"
                    >
                      <Heart className={`h-4 w-4 ${favorites.includes(artwork.id) ? 'fill-current text-highlight' : ''}`} />
                    </Button>
                    <Button size="sm" variant="secondary" className="p-2">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="p-2">
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
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                    {artwork.title}
                  </h3>
                  <span className="text-lg font-semibold text-primary">
                    {artwork.price}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-2">
                  {artwork.artist} • {artwork.year}
                </p>
                
                <p className="text-foreground mb-4 leading-relaxed">
                  {artwork.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">{artwork.medium}</Badge>
                  <Badge variant="outline">{artwork.dimensions}</Badge>
                  <Badge variant="outline">{artwork.period}</Badge>
                </div>
                
                <Button className="w-full">
                  View Details
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
    </section>
  );
};

export default GallerySection;