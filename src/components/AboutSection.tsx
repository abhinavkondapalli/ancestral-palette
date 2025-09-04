import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Heart, Award, Users } from "lucide-react";
import photoImg from "@/assets/Paintings-Images/Photo.avif";

const AboutSection = () => {
  const achievements = [
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "1000+ Artworks",
      subtitle: "Lifetime Creation",
      description: "Over one thousand masterpieces spanning mythology, rural life, and spiritual themes"
    },
    {
      icon: <Heart className="h-8 w-8 text-highlight" />,
      title: "99 Years",
      subtitle: "Life of Service",
      description: "Nearly a century dedicated to art, education, and cultural preservation (1924-2023)"
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "GI Recognition",
      subtitle: "Cheriyal Revival",
      description: "Led the revival that earned Cheriyal scroll painting Geographical Indication status"
    },
    {
      icon: <Users className="h-8 w-8 text-contrast" />,
      title: "HoD at JNTU",
      subtitle: "Educational Legacy",
      description: "Head of Department at College of Arts & Crafts, mentoring generations of artists"
    }
  ];

  const traditions = [
    "Aqua Texture Technique",
    "Cheriyal Scroll Painting", 
    "Telangana Folk Art",
    "Kakatiya Temple Art",
    "Mythological Narratives",
    "Rural Life Portraits"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Cultural Guardian & Freedom Fighter
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Beyond the canvas, Kondapalli Seshagiri Rao stood as a sentinel of cultural heritage, 
            a freedom fighter who survived torture by Razakars, and a visionary educator who 
            understood that preserving art meant preserving the soul of a civilization.
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
                In the hallowed halls of Santiniketan, under the guidance of Nandalal Bose and 
                inspired by Tagore's vision of Swaraj-art, Kondapalli Seshagiri Rao developed 
                his revolutionary aqua texture technique. This fusion of Chinese and Japanese 
                influences with pure Indian sensibilities created a new language of artistic expression.
              </p>
              
              <p>
                Over 1,000 artworks flowed from his brush—mythological epics, tender rural scenes, 
                divine portraits, and historical narratives. Each piece was more than art; it was 
                a cultural document, a spiritual meditation, a bridge between the ancient and eternal.
              </p>
              
              <p>
                His work with Cheriyal scroll paintings didn't just revive an art form—it earned 
                the tradition prestigious Geographical Indication recognition in 2008, ensuring 
                these sacred stories would continue to be told for generations to come.
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
              <div className="aspect-square rounded-xl shadow-2xl relative overflow-hidden flex flex-col justify-end">
                <img
                  src={photoImg}
                  alt="Master Artist"
                  className="w-full h-full object-cover"
                /*<div className="absolute bottom-0 left-0 right-0 rounded-b-xl p-4 text-center">
                  <Palette className="h-16 w-16 text-primary mx-auto mb-2" />
                  <h4 className="text-xl font-serif font-bold text-foreground mb-1">
                    Master Artist
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Dedicated to preserving<br />
                    India's artistic heritage
                  </p>
                </div>*/
                />
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
              "The Cheriyal scrolls, the Kakatiya sculptures, the folk tales of Telangana - 
              these are not just art forms, they are the breathing memory of our civilization."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              — Kondapalli Seshagiri Rao, during the revival of Cheriyal painting, 1990s
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;