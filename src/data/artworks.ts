// Artwork collection of the late Kondapalli Sheshagiri Rao
// A curated digital memorial showcasing his artistic legacy

// Import artwork images
import ahalyaDevi from "@/assets/Paintings-Images/Ahalya Devi.png";
import shakuntala from "@/assets/Paintings-Images/Shakuntala.jpg";
import artwork2 from "@/assets/Paintings-Images/2.png";
import artwork3 from "@/assets/Paintings-Images/3.jpg";
import artwork4 from "@/assets/Paintings-Images/4.jpg";
import artwork5 from "@/assets/Paintings-Images/5.jpg";
import artwork6 from "@/assets/Paintings-Images/6.jpg";
import artwork7 from "@/assets/Paintings-Images/7.jpeg";
import artwork8 from "@/assets/Paintings-Images/8.jpeg";
import artwork9 from "@/assets/Paintings-Images/9.jpeg";
import artwork10 from "@/assets/Paintings-Images/10.jpg";
import artwork11 from "@/assets/Paintings-Images/11.jpg";
import artwork13 from "@/assets/Paintings-Images/13.jpg";

export interface Artwork {
  id: number;
  title: string;
  artist: string;
  category: 'mythology' | 'folk_life' | 'nature' | 'spiritual' | 'historical';
  period: string;
  year: string;
  description: string;
  image: string;
  dimensions: string;
  medium: string;
  cultural_significance: string;
  tags: string[];
  emotional_tone: string;
  mythological_reference?: string;
  filename: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Ahalya Devi - The Sacred Redemption",
    artist: "Kondapalli Sheshagiri Rao",
    category: "mythology",
    period: "Contemporary Classical",
    year: "1985-1990",
    description: "A profound representation of Ahalya's liberation from her curse, depicted in a dreamlike landscape where redemption blooms like flowers in paradise. The master's use of warm ochres and ethereal blues captures the moment of divine intervention and spiritual awakening.",
    image: ahalyaDevi,
    dimensions: "24\" x 18\"",
    medium: "Oil on canvas",
    cultural_significance: "Represents one of the Pancha Kanyas from Hindu mythology, symbolizing forgiveness and spiritual transformation",
    tags: ["mythology", "redemption", "Ramayana", "divine intervention", "spiritual awakening", "warm_tones", "classical"],
    emotional_tone: "Reverent and transformative",
    mythological_reference: "Story of Ahalya from the Ramayana - her redemption through Lord Rama's divine touch",
    filename: "Ahalya Devi.png"
  },
  {
    id: 2,
    title: "Shakuntala - The Forest Princess",
    artist: "Kondapalli Sheshagiri Rao",
    category: "mythology",
    period: "Classical Narrative",
    year: "1980-1985",
    description: "An intimate gathering in the forest ashram where Shakuntala dwells with the sages. The master captures the serenity of ashram life and the noble bearing of the legendary princess. Rich earth tones and luminous figures speak to Sheshagiri Rao's deep understanding of classical Indian aesthetics.",
    image: shakuntala,
    dimensions: "30\" x 24\"",
    medium: "Oil on canvas",
    cultural_significance: "From Kalidasa's Abhijnanasakuntalam, representing the ideal of feminine grace and nobility in Sanskrit literature",
    tags: ["mythology", "Kalidasa", "forest_life", "ashram", "classical_literature", "earth_tones", "nobility"],
    emotional_tone: "Peaceful and noble",
    mythological_reference: "Shakuntala from Kalidasa's play - the forest-raised princess and her divine love story",
    filename: "Shakuntala.jpg"
  },
  {
    id: 3,
    title: "Ganga Avataran - Divine Descent",
    artist: "Kondapalli Sheshagiri Rao",
    category: "mythology",
    period: "Spiritual Realism",
    year: "1982-1987",
    description: "The celestial descent of River Ganga to earth, cushioned by Lord Shiva's matted locks. Three ethereal figures emerge from the lotus pool, symbolizing the purifying power of divine grace. The master's palette of blues and whites evokes the sacred waters that cleanse all sins.",
    image: artwork2,
    dimensions: "28\" x 20\"",
    medium: "Tempera on canvas",
    cultural_significance: "Depicts the sacred story of Ganga's descent to earth, central to Hindu spirituality and the reverence for sacred rivers",
    tags: ["mythology", "Ganga", "divine_descent", "purification", "sacred_waters", "blue_palette", "spiritual"],
    emotional_tone: "Sacred and purifying",
    mythological_reference: "The descent of Ganga from heaven to earth through Shiva's hair",
    filename: "2.png"
  },
  {
    id: 4,
    title: "Village Harmony - The Three Graces",
    artist: "Kondapalli Sheshagiri Rao",
    category: "folk_life",
    period: "Rural Renaissance", 
    year: "1975-1980",
    description: "Three women of the village, their natural grace captured under the protective thatch. The master celebrates the inherent dignity of rural life, using warm terracotta and ochre tones that speak to his deep connection with the earth and its people.",
    image: artwork4,
    dimensions: "20\" x 16\"",
    medium: "Oil on canvas",
    cultural_significance: "Celebrates the dignity and beauty of rural Indian women, reflecting the artist's reverence for folk culture",
    tags: ["folk_life", "village_women", "rural_dignity", "terracotta_tones", "grace", "cultural_pride"],
    emotional_tone: "Warm and dignified",
    filename: "4.jpg"
  },
  {
    id: 5,
    title: "Forest Dance - Rhythms of Nature",
    artist: "Kondapalli Sheshagiri Rao",
    category: "folk_life",
    period: "Cultural Celebration",
    year: "1983-1988",
    description: "A celebration of life in the heart of the forest, where music and dance flow as naturally as the streams. The artist captures the joy of simple pleasures and the eternal rhythm that connects humanity with nature.",
    image: artwork5,
    dimensions: "26\" x 18\"",
    medium: "Acrylic on canvas",
    cultural_significance: "Represents the harmony between human culture and natural environment, celebrating folk traditions",
    tags: ["folk_life", "dance", "music", "forest", "celebration", "harmony", "vibrant_colors"],
    emotional_tone: "Joyful and harmonious",
    filename: "5.jpg"
  },
  {
    id: 6,
    title: "Village Maiden - Portrait of Grace",
    artist: "Kondapalli Sheshagiri Rao",
    category: "folk_life",
    period: "Rural Portraiture",
    year: "1978-1983",
    description: "A tender portrait of a village maiden adorned with flowers, her eyes reflecting the timeless beauty of rural India. The master's subtle use of warm flesh tones and traditional ornaments speaks to his reverence for feminine grace.",
    image: artwork6,
    dimensions: "16\" x 12\"",
    medium: "Oil on wood panel",
    cultural_significance: "Celebrates the natural beauty and cultural traditions of rural Indian women",
    tags: ["folk_life", "portrait", "feminine_grace", "traditional_ornaments", "warm_tones", "cultural_beauty"],
    emotional_tone: "Tender and reverent",
    filename: "6.jpg"
  },
  {
    id: 7,
    title: "Epic Voyage - The Sacred Journey",
    artist: "Kondapalli Sheshagiri Rao",
    category: "historical",
    period: "Epic Narrative",
    year: "1990-1995",
    description: "Heroes embark on their sacred mission across turbulent waters, their determination unwavering despite the challenges ahead. This grand composition reflects the artist's mastery in depicting epic narratives with both drama and spiritual depth.",
    image: artwork7,
    dimensions: "48\" x 36\"",
    medium: "Oil on canvas",
    cultural_significance: "Represents the heroic journeys found in Indian epics, symbolizing courage and dharma",
    tags: ["historical", "epic_journey", "heroism", "dharma", "grand_scale", "narrative_art", "courage"],
    emotional_tone: "Heroic and determined",
    filename: "7.jpeg"
  },
  {
    id: 8,
    title: "Warrior's Honor - Portrait of Valor",
    artist: "Kondapalli Sheshagiri Rao",
    category: "historical",
    period: "Heroic Portraiture",
    year: "1988-1993",
    description: "A noble warrior on horseback, representing the chivalric ideals of ancient India. The artist's attention to period details and his masterful rendering of both human and equine forms demonstrate his deep study of historical subjects.",
    image: artwork8,
    dimensions: "40\" x 30\"",
    medium: "Oil on canvas",
    cultural_significance: "Celebrates the warrior traditions and chivalric values of historical India",
    tags: ["historical", "warrior", "chivalry", "nobility", "horseback", "heroic_tradition", "valor"],
    emotional_tone: "Noble and proud",
    filename: "8.jpeg"
  },
  {
    id: 9,
    title: "Sacred Gathering - Wisdom in the Grove",
    artist: "Kondapalli Sheshagiri Rao",
    category: "spiritual",
    period: "Contemplative Realism",
    year: "1985-1990",
    description: "Sages and seekers gather in a natural amphitheater, sharing wisdom under ancient trees. The master captures the timeless tradition of learning in nature's embrace, where knowledge flows as freely as mountain streams.",
    image: artwork9,
    dimensions: "32\" x 24\"",
    medium: "Oil on canvas",
    cultural_significance: "Represents the ancient gurukula tradition where knowledge was transmitted in natural settings",
    tags: ["spiritual", "wisdom", "gurukula", "sages", "learning", "natural_setting", "tradition"],
    emotional_tone: "Contemplative and wise",
    filename: "9.jpeg"
  },
  {
    id: 10,
    title: "Divine Quaternity - Sacred Manifestations",
    artist: "Kondapalli Sheshagiri Rao",
    category: "mythology",
    period: "Devotional Art",
    year: "1990-1995",
    description: "Four divine manifestations representing different aspects of cosmic consciousness. In the upper panels, the Divine Mother cradles creation while a maiden tends to sacred duties. Below, a warrior goddess protects the faithful while Lord Shiva meditates in eternal samadhi.",
    image: artwork10,
    dimensions: "36\" x 48\" (four panels)",
    medium: "Oil on canvas",
    cultural_significance: "Represents the multifaceted nature of divine consciousness in Hindu philosophy",
    tags: ["mythology", "divine_manifestations", "cosmic_consciousness", "Shiva", "Devi", "meditation", "devotional"],
    emotional_tone: "Divine and transcendent",
    mythological_reference: "Various aspects of Hindu deities representing creation, protection, and meditation",
    filename: "10.jpg"
  },
  {
    id: 11,
    title: "Lotus Maiden - Purity in Sacred Waters",
    artist: "Kondapalli Sheshagiri Rao",
    category: "nature",
    period: "Symbolic Naturalism",
    year: "1988-1993",
    description: "A graceful figure emerges from the lotus pond, symbolizing purity arising from the waters of existence. The master's exquisite use of blues and saffron creates a meditation on beauty, purity, and the sacred feminine principle in nature.",
    image: artwork11,
    dimensions: "30\" x 24\"",
    medium: "Oil on canvas",
    cultural_significance: "The lotus symbolizes purity and spiritual awakening in Indian culture, often associated with divine feminine energy",
    tags: ["nature", "lotus", "purity", "sacred_feminine", "water", "blue_palette", "symbolic"],
    emotional_tone: "Serene and pure",
    filename: "11.jpg"
  },
  {
    id: 12,
    title: "Forest Nymph - Dance of the Woodland Spirit",
    artist: "Kondapalli Sheshagiri Rao",
    category: "nature",
    period: "Mystical Naturalism",
    year: "1985-1990",
    description: "A forest spirit dances among ancient trees, her movement echoing the rhythm of wind through leaves. The artist captures the mystical connection between human consciousness and the living spirit of the forest.",
    image: artwork13,
    dimensions: "28\" x 20\"",
    medium: "Oil on canvas",
    cultural_significance: "Represents the animistic beliefs and reverence for nature spirits in Indian folk traditions",
    tags: ["nature", "forest_spirit", "dance", "mystical", "trees", "natural_harmony", "folk_beliefs"],
    emotional_tone: "Mystical and enchanting",
    filename: "13.jpg"
  },
  {
    id: 13,
    title: "Harvest of Wisdom - Rural Abundance", 
    artist: "Kondapalli Sheshagiri Rao",
    category: "folk_life",
    period: "Agricultural Celebration",
    year: "1980-1985",
    description: "Simple joy radiates from this scene of harvest abundance, where the fruits of honest labor are shared in community. The master celebrates the dignity of agricultural life and the wisdom found in working with the earth's rhythms.",
    image: artwork3,
    dimensions: "22\" x 18\"",
    medium: "Oil on canvas",
    cultural_significance: "Celebrates agricultural traditions and the importance of community cooperation in rural Indian life",
    tags: ["folk_life", "harvest", "agriculture", "community", "abundance", "rural_wisdom", "earth_tones"],
    emotional_tone: "Joyful and abundant",
    filename: "3.jpg"
  }
];

// Category definitions for the memorial website
export const categories = [
  { 
    id: "all", 
    label: "Complete Legacy", 
    count: artworks.length,
    description: "The complete artistic heritage of Kondapalli Sheshagiri Rao"
  },
  { 
    id: "mythology", 
    label: "Sacred Mythology", 
    count: artworks.filter(a => a.category === "mythology").length,
    description: "Divine stories and mythological narratives from Hindu tradition"
  },
  { 
    id: "folk_life", 
    label: "Folk Life", 
    count: artworks.filter(a => a.category === "folk_life").length,
    description: "Celebrations of rural Indian life and cultural traditions"
  },
  { 
    id: "nature", 
    label: "Natural Harmony", 
    count: artworks.filter(a => a.category === "nature").length,
    description: "The sacred relationship between humanity and the natural world"
  },
  { 
    id: "spiritual", 
    label: "Spiritual Wisdom", 
    count: artworks.filter(a => a.category === "spiritual").length,
    description: "Contemplative works exploring divine consciousness and wisdom"
  },
  { 
    id: "historical", 
    label: "Historical Narratives", 
    count: artworks.filter(a => a.category === "historical").length,
    description: "Epic tales and historical moments from India's glorious past"
  }
];

// Helper functions for the gallery
export const getArtworksByCategory = (category: string): Artwork[] => {
  if (category === "all") return artworks;
  return artworks.filter(artwork => artwork.category === category);
};

export const searchArtworks = (query: string): Artwork[] => {
  const searchTerms = query.toLowerCase().split(' ');
  return artworks.filter(artwork => 
    searchTerms.every(term =>
      artwork.title.toLowerCase().includes(term) ||
      artwork.description.toLowerCase().includes(term) ||
      artwork.tags.some(tag => tag.toLowerCase().includes(term)) ||
      artwork.cultural_significance.toLowerCase().includes(term) ||
      artwork.mythological_reference?.toLowerCase().includes(term)
    )
  );
};

export const getArtworkById = (id: number): Artwork | undefined => {
  return artworks.find(artwork => artwork.id === id);
};