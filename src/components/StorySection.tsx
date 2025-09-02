import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Palette, Star } from "lucide-react";

const StorySection = () => {
  const timeline = [
    {
      year: "1935",
      event: "Born in Kondapalli Village",
      description: "In the artistic heartland of Andhra Pradesh, where tradition flows like sacred water"
    },
    {
      year: "1955",
      event: "First Exhibition",
      description: "Unveiled his early works depicting village life and mythological tales"
    },
    {
      year: "1970",
      event: "National Recognition",
      description: "Awarded for preserving traditional Indian art forms and cultural heritage"
    },
    {
      year: "1985",
      event: "Master Teacher",
      description: "Established art school to pass knowledge to future generations"
    },
    {
      year: "2010",
      event: "Eternal Legacy",
      description: "Transitioned to eternal rest, leaving behind a treasure of cultural wisdom"
    }
  ];

  const quotes = [
    {
      quote: "Every canvas is a prayer, every color a devotion to the divine spirit that flows through all creation.",
      context: "From his journal, 1978"
    },
    {
      quote: "The artist's duty is not to create beauty, but to reveal the beauty that already exists in our culture.",
      context: "Speaking to students, 1985"
    },
    {
      quote: "When I paint, I am not alone. My ancestors guide my brush, my culture speaks through my colors.",
      context: "Interview with Art Today Magazine, 1995"
    }
  ];

  return (
    <section id="story" className="py-20 warm-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            The Master's Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A life dedicated to preserving the sacred traditions of Indian art, 
            weaving stories of devotion, culture, and timeless beauty.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-semibold text-center text-foreground mb-12">
            Life's Sacred Milestones
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-highlight opacity-30"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="artwork-card">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="h-5 w-5 text-primary" />
                          <Badge variant="outline" className="text-primary border-primary">
                            {item.year}
                          </Badge>
                        </div>
                        <h4 className="text-xl font-serif font-semibold text-foreground mb-2">
                          {item.event}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quotes Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-semibold text-center text-foreground mb-12">
            In His Words
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quotes.map((item, index) => (
              <Card key={index} className="artwork-card bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Heart className="h-6 w-6 text-highlight mt-1 flex-shrink-0" />
                    <blockquote className="text-foreground font-serif text-lg leading-relaxed italic">
                      "{item.quote}"
                    </blockquote>
                  </div>
                  <p className="text-sm text-muted-foreground text-right">
                    — {item.context}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values & Impact */}
        <div className="text-center">
          <h3 className="text-3xl font-serif font-semibold text-foreground mb-12">
            Living Legacy
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="artwork-card">
              <CardContent className="p-8 text-center">
                <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Cultural Preservation
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated his life to preserving traditional Indian art forms for future generations
                </p>
              </CardContent>
            </Card>
            
            <Card className="artwork-card">
              <CardContent className="p-8 text-center">
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Spiritual Expression
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Every brushstroke was a meditation, every canvas a prayer to the divine
                </p>
              </CardContent>
            </Card>
            
            <Card className="artwork-card">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-highlight mx-auto mb-4" />
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Community Impact
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Mentored countless artists and established foundations for cultural education
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;