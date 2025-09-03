import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Palette, Star } from "lucide-react";

const StorySection = () => {
  const timeline = [
    {
      year: "1924",
      event: "Birth of a Visionary",
      description: "Born on 27th January in Penugonda village near Warangal, Telangana, to Gopal Rao and Ramachudamma. The sacred soil of Telangana nurtured his artistic soul from birth."
    },
    {
      year: "1940s",
      event: "Foundation of Learning",
      description: "Studied at School of Arts and Crafts in Hyderabad under the patronage of Nawab Mehdi Nawaz Jung, where his artistic foundation was laid with traditional techniques."
    },
    {
      year: "1950s",
      event: "Santiniketan Enlightenment",
      description: "Advanced training at Santiniketan's Kala Bhavan under luminaries Nandalal Bose and Jalaluddin, absorbing Tagore's Swaraj-art philosophy that would guide his lifelong mission."
    },
    {
      year: "1961",
      event: "National Recognition",
      description: "Designed the celebrated Andhra Pradesh tableau for Republic Day, earning praise from Prime Minister Nehru. A moment when regional art touched the national consciousness."
    },
    {
      year: "1969",
      event: "Artistic Mastery",
      description: "Second Republic Day tableau design praised by Indira Gandhi. By now, he had pioneered the aqua texture technique, creating over 1,000 masterpieces spanning mythology to rural life."
    },
    {
      year: "1970s-84",
      event: "The Great Teacher",
      description: "Served as Head of Department at JNTU College of Arts & Crafts, mentoring generations of artists while advocating for faculty rights and cultural preservation."
    },
    {
      year: "1984-2008",
      event: "Cultural Revival",
      description: "Post-retirement, dedicated himself to reviving Cheriyal scroll painting tradition, leading to its prestigious GI (Geographical Indication) recognition in 2008."
    },
    {
      year: "2023-25",
      event: "Eternal Legacy",
      description: "Centenary celebrations with 'Reviving the Roots' retrospective at State Art Gallery, Hyderabad, featuring 290 works. His legacy lives on as a beacon of cultural preservation."
    }
  ];

  const quotes = [
    {
      quote: "Art is not mere decoration, but the soul's expression of cultural truth. Through my brush, I preserve the eternal stories of our land.",
      context: "From his lectures on All India Radio"
    },
    {
      quote: "The Cheriyal scrolls, the Kakatiya sculptures, the folk tales of Telangana - these are not just art forms, they are the breathing memory of our civilization.",
      context: "During the revival of Cheriyal painting, 1990s"
    },
    {
      quote: "Every mythological painting is a meditation, every rural scene a prayer to the divine that dwells in simplicity.",
      context: "Speaking to students at JNTU, 1980"
    },
    {
      quote: "The aqua texture technique allows colors to flow like consciousness itself - blending the earthly with the ethereal, just as our culture does.",
      context: "Explaining his pioneering technique, 1970"
    }
  ];

  return (
    <section id="story" className="py-20 warm-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Kondapalli Seshagiri Rao
          </h2>
          <h3 className="text-2xl font-serif text-primary mb-4">
            Artist • Cultural Revivalist • Freedom Fighter
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A century-long journey of artistic excellence and cultural preservation. From the villages of Telangana 
            to the national stage, his life was dedicated to keeping the sacred flame of Indian artistic traditions 
            burning bright for future generations.
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
          <div className="grid md:grid-cols-2 gap-8">
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
                  Pioneering Innovation
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Creator of the aqua texture technique, blending Chinese and Japanese influences with Indian sensibilities. Over 1,000 masterpieces span mythology, rural life, and portraits.
                </p>
              </CardContent>
            </Card>
            
            <Card className="artwork-card">
              <CardContent className="p-8 text-center">
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Cultural Revival
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Led the revival of Cheriyal scroll painting, earning it GI recognition. His work preserves Telangana's folk traditions and Kakatiya temple art for posterity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="artwork-card">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-highlight mx-auto mb-4" />
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Educational Legacy
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  As Head of Department at JNTU, he mentored generations of artists while advocating for faculty rights. His teachings continue through disciples worldwide.
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