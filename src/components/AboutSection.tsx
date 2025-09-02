import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Heart, Award, Users } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "50+ Years",
      subtitle: "Artistic Journey",
      description: "Five decades dedicated to preserving and creating traditional Indian art"
    },
    {
      icon: <Heart className="h-8 w-8 text-highlight" />,
      title: "200+ Pieces",
      subtitle: "Curated Collection",
      description: "Carefully crafted artworks representing diverse Indian cultural traditions"
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Cultural Heritage",
      subtitle: "Preservation Award",
      description: "Recognized for outstanding contribution to Indian folk art preservation"
    },
    {
      icon: <Users className="h-8 w-8 text-contrast" />,
      title: "1000+ Students",
      subtitle: "Artistic Legacy",
      description: "Knowledge shared with aspiring artists across generations"
    }
  ];

  const traditions = [
    "Madhubani Folk Art",
    "Warli Tribal Painting", 
    "Tanjore Temple Art",
    "Mughal Miniatures",
    "Pattachitra Scrolls",
    "Kalamkari Textiles"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Eternal Legacy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The spirit of Kondapalli Sheshagiri Rao lives on through his art, his teachings, 
            and the countless lives he touched with his devotion to cultural preservation.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="mb-6">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Master Artisan
              </Badge>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                Preserving Cultural Treasures
              </h3>
            </div>
            
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Born into a family of traditional artists in rural Bihar, our grandfather began his 
                artistic journey at the age of seven, learning the sacred art of Madhubani painting 
                from village elders who carried forward centuries-old traditions.
              </p>
              
              <p>
                His dedication to preserving authentic techniques led him to master multiple art forms 
                across India. From the geometric precision of Warli art to the divine splendor of 
                Tanjore paintings, each piece in this collection represents years of study, practice, 
                and spiritual connection to India's cultural soul.
              </p>
              
              <p>
                Today, his legacy continues through this curated gallery, ensuring that future 
                generations can experience the beauty, wisdom, and spiritual depth embedded in 
                traditional Indian art forms.
              </p>
            </div>

            {/* Traditions Mastered */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Traditional Art Forms Mastered:
              </h4>
              <div className="flex flex-wrap gap-2">
                {traditions.map((tradition) => (
                  <Badge key={tradition} variant="outline" className="text-sm">
                    {tradition}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-primary to-highlight rounded-xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-4 bg-background rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Palette className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-serif font-bold text-foreground mb-2">
                      Master Artist
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Dedicated to preserving<br />
                      India's artistic heritage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {achievement.title}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {achievement.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-highlight/5 rounded-2xl p-12">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground mb-6">
              "Art is not what you see, but what you make others see. Through traditional Indian art, 
              we preserve not just techniques, but the soul of our ancestors."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              — Traditional Indian Art Philosophy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;