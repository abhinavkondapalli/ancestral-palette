import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Globe, Trophy, Crown, Heart } from "lucide-react";

const AwardsSection = () => {
  const majorAwards = [
    {
      icon: Trophy,
      title: "Hamsa Award",
      description: "Highest recognition for contributions to Indian arts and culture",
      year: "Lifetime Achievement"
    },
    {
      icon: Crown,
      title: "NTR National Award",
      description: "National recognition for excellence in preserving Telugu cultural heritage",
      year: "Cultural Excellence"
    },
    {
      icon: Award,
      title: "Artist Emeritus",
      description: "Conferred for outstanding lifetime contribution to Indian art",
      year: "Emeritus Status"
    },
    {
      icon: BookOpen,
      title: "Honorary Doctorate",
      description: "Potti Sriramulu Telugu University for scholarly contributions to art",
      year: "Academic Honor"
    }
  ];

  const institutions = [
    {
      name: "Salarjung Museum, Hyderabad",
      description: "Permanent collection of masterworks"
    },
    {
      name: "Indian Embassy, Washington DC",
      description: "Cultural ambassador through art"
    },
    {
      name: "S. Venkateswara Temple, Pittsburgh PA",
      description: "Spiritual art connecting diaspora to roots"
    },
    {
      name: "State Art Gallery, Hyderabad",
      description: "290 works featured in centenary retrospective"
    }
  ];

  const publications = [
    {
      title: "Chitrakala Tapasvi, Kondapalli Seshagiri Rao",
      author: "Dr. Niharini (daughter-in-law)",
      type: "Biography"
    },
    {
      title: "An Odyssey of Life and Art: Dr. Kondapalli Seshagiri Rao",
      author: "Anand Gadapa & Nirmala Bilkula",
      type: "Commemorative Book"
    },
    {
      title: "The Architect of Fine Art",
      author: "Documentary Film",
      type: "Visual Biography"
    },
    {
      title: "Reviving the Roots",
      author: "Centenary Exhibition Catalog",
      type: "Art Monograph"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Honours & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A lifetime of dedication to art and culture, recognized by institutions, 
            governments, and fellow artists across the globe.
          </p>
        </div>

        {/* Major Awards */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-semibold text-center text-foreground mb-12">
            Prestigious Honours
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majorAwards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <Card key={index} className="artwork-card text-center">
                  <CardContent className="p-6">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-serif font-semibold text-foreground mb-2">
                      {award.title}
                    </h4>
                    <Badge variant="outline" className="text-accent border-accent mb-3">
                      {award.year}
                    </Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Institutional Collections */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-semibold text-center text-foreground mb-12">
            Global Collections
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {institutions.map((institution, index) => (
              <Card key={index} className="artwork-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-6 w-6 text-accent" />
                    <h4 className="text-lg font-serif font-semibold text-foreground">
                      {institution.name}
                    </h4>
                  </div>
                  <p className="text-muted-foreground">
                    {institution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications & Documentation */}
        <div className="text-center">
          <h3 className="text-3xl font-serif font-semibold text-foreground mb-12">
            Literary Legacy
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((publication, index) => (
              <Card key={index} className="artwork-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-6 w-6 text-highlight mt-1" />
                    <div className="text-left">
                      <h4 className="font-serif font-semibold text-foreground mb-1">
                        {publication.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {publication.author}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {publication.type}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;