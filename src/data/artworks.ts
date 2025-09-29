// Import all artwork images with correct ES6 module imports
import image2 from "@/assets/Paintings-Images/2.png";
import image3 from "@/assets/Paintings-Images/3.jpg";
import image4 from "@/assets/Paintings-Images/4.jpg";
import image5 from "@/assets/Paintings-Images/5.jpg";
import image6 from "@/assets/Paintings-Images/6.jpg";
import image7 from "@/assets/Paintings-Images/7.jpeg";
import image8 from "@/assets/Paintings-Images/8.jpeg";
import image9 from "@/assets/Paintings-Images/9.jpeg";
import image10 from "@/assets/Paintings-Images/10.jpg";
import image11 from "@/assets/Paintings-Images/11.jpg";
import image13 from "@/assets/Paintings-Images/13.jpg";
import ahalyaDevi from "@/assets/Paintings-Images/Ahalya Devi.png";
import ahalyaShapa from "@/assets/Paintings-Images/Ahalya shapa vimochanam.jpg";
import goddessDurga from "@/assets/Paintings-Images/Godess Durga.jpg";
import pandavaJourney from "@/assets/Paintings-Images/Pandava's Journey.jpeg";
import peacock from "@/assets/Paintings-Images/Peacock.jpg";
import photoJH from "@/assets/Paintings-Images/Photo-JH.avif";
import shakuntala from "@/assets/Paintings-Images/Shakuntala.jpg";
import thyagaraju from "@/assets/Paintings-Images/Thyagaraju.jpg";
import new1 from "@/assets/Paintings-Images/new-1.jpg";
import new2 from "@/assets/Paintings-Images/new-2.jpg";
import new4 from "@/assets/Paintings-Images/new-4.jpg";
import new5 from "@/assets/Paintings-Images/new-5.jpg";
import new6 from "@/assets/Paintings-Images/new-6.jpg";
import new7 from "@/assets/Paintings-Images/new-7.jpg";
import new9 from "@/assets/Paintings-Images/new-9.jpg";
import teluguThalli from "@/assets/Paintings-Images/telugu thalli.jpg";

// Type definition for artwork objects
export interface Artwork {
  id: number;
  title: string;
  artist: string;
  category: string;
  image: string;
  description: string;
  year: string;
  medium: string;
  dimensions: string;
  period: string;
  emotional_tone: string;
  cultural_significance: string;
  mythological_reference?: string;
  tags: string[];
}

// Comprehensive artwork collection showcasing Kondapalli Sheshagiri Rao's artistic legacy
export const artworks: Artwork[] = [
    {
      id: 1,
      title: "Divine Lotus Maiden",
      artist: "Kondapalli Sheshagiri Rao",
      category: "mythology",
      image: image2,
      description: "An enchanting portrayal of celestial grace, depicting a divine maiden emerging from sacred lotus blooms. The figure embodies the spiritual purity and feminine divinity revered in Indian mythology, painted with the master's signature aqua texture technique.",
      year: "1975",
      medium: "Aqua texture on canvas",
      dimensions: "24\" x 18\"",
      period: "Mature Period",
      emotional_tone: "Serene, divine, transcendent",
      cultural_significance: "Represents the lotus as a symbol of spiritual awakening and divine feminine energy in Hindu philosophy. The celestial maiden embodies Lakshmi's grace and purity.",
      mythological_reference: "Inspired by Padmini legends and Lakshmi iconography",
      tags: ["lotus", "divine feminine", "celestial", "mythology", "aqua texture", "spirituality", "purity", "sacred", "featured"]
    },
  {
    id: 2,
    title: "Ahalya Devi - The Pure Soul",
    artist: "Kondapalli Sheshagiri Rao",
    category: "mythology",
    image: ahalyaDevi,
    description: "A compassionate interpretation of Ahalya, showcasing her inner purity and spiritual strength. The artist captures her divine beauty with flowing garments and serene expression, emphasizing her role as a symbol of devotion and redemption in Hindu mythology.",
    year: "1978",
    medium: "Aqua texture on canvas",
    dimensions: "30\" x 24\"",
    period: "Mature Period",
    emotional_tone: "Devotional, pure, contemplative",
    cultural_significance: "Ahalya represents the power of redemption and divine grace. Her story teaches about forgiveness, spiritual transformation, and the triumph of virtue over circumstance.",
    mythological_reference: "From the Ramayana - Ahalya's liberation by Lord Rama",
    tags: ["ahalya", "ramayana", "redemption", "purity", "divine grace", "mythology", "devotional", "feminine divinity"]
  },
  {
    id: 3,
    title: "Ahalya Shapa Vimochanam",
    artist: "Kondapalli Sheshagiri Rao",
    category: "mythology",
    image: ahalyaShapa,
    description: "The pivotal moment of Ahalya's liberation from her stone curse by Lord Rama's divine touch. This powerful composition captures the transformation from stone to life, symbolizing spiritual awakening and the power of divine compassion.",
    year: "1980",
    medium: "Aqua texture on canvas",
    dimensions: "36\" x 28\"",
    period: "Mature Period",
    emotional_tone: "Triumphant, spiritual, transformative",
    cultural_significance: "Depicts the ultimate triumph of dharma and divine grace. The scene represents spiritual resurrection and the power of righteous action to transform lives.",
    mythological_reference: "Ramayana - The liberation of Ahalya by Sri Rama",
    tags: ["ahalya", "rama", "liberation", "transformation", "ramayana", "divine touch", "spiritual awakening", "dharma"]
  },
  {
    id: 4,
    title: "Goddess Durga - The Divine Warrior",
    artist: "Kondapalli Sheshagiri Rao",
    category: "mythology",
    image: goddessDurga,
    description: "A magnificent portrayal of Goddess Durga in her fierce yet benevolent form, wielding divine weapons while seated on her lion mount. The composition radiates power, protection, and maternal compassion, capturing the essence of Shakti in all her glory.",
    year: "1973",
    medium: "Aqua texture on canvas",
    dimensions: "32\" x 24\"",
    period: "Early Mature Period",
    emotional_tone: "Powerful, protective, divine",
    cultural_significance: "Durga represents the cosmic force of good triumphing over evil, the divine mother protecting her children, and the ultimate feminine power that sustains and protects the universe.",
    mythological_reference: "Devi Mahatmya - Durga's victory over Mahishasura",
    tags: ["durga", "goddess", "shakti", "divine mother", "protection", "lion", "weapons", "victory", "feminine power"]
  },
  {
    id: 5,
    title: "Pandavas' Sacred Journey",
    artist: "Kondapalli Sheshagiri Rao",
    category: "mythology",
    image: pandavaJourney,
    description: "An epic composition depicting the Pandava brothers on their final journey to the Himalayas. The painting captures their spiritual quest with Draupadi, showing their transformation from warriors to seekers of ultimate truth and liberation.",
    year: "1976",
    medium: "Aqua texture on canvas",
    dimensions: "40\" x 30\"",
    period: "Mature Period",
    emotional_tone: "Solemn, spiritual, transcendent",
    cultural_significance: "Represents the ultimate spiritual journey from material attachment to divine realization. The scene embodies the concept of dharmic life leading to moksha.",
    mythological_reference: "Mahabharata - The Pandavas' final journey (Mahaprasthanika Parva)",
    tags: ["pandavas", "mahabharata", "spiritual journey", "himalayas", "dharma", "liberation", "epic", "transcendence"]
  },
  {
    id: 6,
    title: "Majestic Peacock in Divine Garden",
    artist: "Kondapalli Sheshagiri Rao",
    category: "nature",
    image: peacock,
    description: "A stunning celebration of India's national bird, painted with intricate detail and vibrant plumage. The peacock, sacred to Lord Krishna, is depicted in its full glory amid lush foliage, symbolizing beauty, grace, and divine consciousness.",
    year: "1977",
    medium: "Aqua texture on canvas",
    dimensions: "28\" x 22\"",
    period: "Mature Period",
    emotional_tone: "Joyful, vibrant, majestic",
    cultural_significance: "The peacock symbolizes immortality, love, and the cyclical nature of time. In Hindu tradition, it's associated with Saraswati's wisdom and Krishna's divine play.",
    mythological_reference: "Sacred to Lord Krishna and Goddess Saraswati",
    tags: ["peacock", "national bird", "krishna", "nature", "divine beauty", "plumage", "sacred", "consciousness"]
  },
  {
    id: 7,
    title: "Shakuntala - The Forest Daughter",
    artist: "Kondapalli Sheshagiri Rao",
    category: "mythology",
    image: shakuntala,
    description: "A tender portrayal of Shakuntala, the beloved heroine of Kalidasa's drama, shown in her natural forest setting. The painting captures her innocent beauty and deep connection with nature, embodying the ideal of harmony between human and divine love.",
    year: "1974",
    medium: "Aqua texture on canvas",
    dimensions: "26\" x 20\"",
    period: "Mature Period",
    emotional_tone: "Romantic, innocent, natural",
    cultural_significance: "Shakuntala represents the perfect fusion of nature and culture, embodying the Sanskrit literary ideal of woman as both earthly beauty and spiritual inspiration.",
    mythological_reference: "Kalidasa's Abhijnanasakuntalam - The story of Shakuntala and King Dushyanta",
    tags: ["shakuntala", "kalidasa", "forest", "nature", "romance", "literature", "classical", "beauty"]
  },
  {
    id: 8,
    title: "Saint Thyagaraja in Divine Ecstasy",
    artist: "Kondapalli Sheshagiri Rao",
    category: "spiritual",
    image: thyagaraju,
    description: "A deeply spiritual portrait of the great composer-saint Thyagaraja in meditation, surrounded by the divine aura of his musical devotion. The painting captures his profound connection with Lord Rama through the medium of celestial music.",
    year: "1979",
    medium: "Aqua texture on canvas",
    dimensions: "24\" x 18\"",
    period: "Mature Period",
    emotional_tone: "Devotional, serene, transcendent",
    cultural_significance: "Thyagaraja represents the pinnacle of devotional music in South India, showing how art can be a path to divine realization and spiritual enlightenment.",
    mythological_reference: "Thyagaraja's devotion to Lord Rama through Carnatic music",
    tags: ["thyagaraja", "saint", "music", "devotion", "rama", "carnatic", "spiritual", "meditation"]
  },
  {
    id: 9,
    title: "Telugu Thalli - Mother Telangana",
    artist: "Kondapalli Sheshagiri Rao",
    category: "cultural",
    image: teluguThalli,
    description: "A powerful personification of Telugu Thalli, the mother goddess of Telugu culture and language. Depicted with traditional ornaments and flowing sari, she embodies the cultural pride and linguistic heritage of the Telugu-speaking people.",
    year: "1981",
    medium: "Aqua texture on canvas",
    dimensions: "30\" x 24\"",
    period: "Late Mature Period",
    emotional_tone: "Proud, nurturing, dignified",
    cultural_significance: "Telugu Thalli represents the preservation and celebration of Telugu culture, language, and traditions. She symbolizes the maternal aspect of regional identity and cultural continuity.",
    tags: ["telugu thalli", "telangana", "cultural identity", "language", "mother goddess", "regional pride", "heritage"]
  },
  {
    id: 10,
    title: "Rural Harmony",
    artist: "Kondapalli Sheshagiri Rao",
    category: "folk_life",
    image: new1,
    description: "A heartwarming scene of rural life depicting villagers in their daily activities. The composition celebrates the simple joys and communal spirit of village existence, painted with the warmth and authenticity that characterizes the artist's folk life series.",
    year: "1972",
    medium: "Aqua texture on canvas",
    dimensions: "32\" x 24\"",
    period: "Early Mature Period",
    emotional_tone: "Warm, communal, peaceful",
    cultural_significance: "Captures the essence of India's village life, emphasizing the values of community, simplicity, and harmony with nature that form the backbone of Indian civilization.",
    tags: ["rural", "village life", "community", "folk", "simplicity", "harmony", "daily life", "traditional"]
  },
  {
    id: 11,
    title: "Festival Celebration",
    artist: "Kondapalli Sheshagiri Rao",
    category: "folk_life",
    image: new2,
    description: "A vibrant depiction of a traditional festival celebration with dancers, musicians, and jubilant villagers. The painting pulsates with the energy and color of Indian festivities, showcasing the cultural richness of rural celebrations.",
    year: "1975",
    medium: "Aqua texture on canvas",
    dimensions: "36\" x 28\"",
    period: "Mature Period",
    emotional_tone: "Joyful, energetic, celebratory",
    cultural_significance: "Festivals represent the spiritual and cultural continuity of Indian society, bringing communities together in celebration of divine grace and seasonal cycles.",
    tags: ["festival", "celebration", "dance", "music", "community", "joy", "tradition", "culture"]
  },
  {
    id: 12,
    title: "Sacred Grove",
    artist: "Kondapalli Sheshagiri Rao",
    category: "spiritual",
    image: new4,
    description: "A mystical landscape depicting a sacred grove where earth meets heaven. Ancient trees shelter a small shrine, creating an atmosphere of spiritual reverence and natural sanctity that speaks to the divine presence in nature.",
    year: "1978",
    medium: "Aqua texture on canvas",
    dimensions: "28\" x 22\"",
    period: "Mature Period",
    emotional_tone: "Mystical, peaceful, sacred",
    cultural_significance: "Sacred groves represent the Hindu concept of divine presence in nature, where trees, stones, and natural elements are revered as manifestations of the divine.",
    tags: ["sacred grove", "nature", "spirituality", "trees", "shrine", "mystical", "divine presence", "reverence"]
  },
  {
    id: 13,
    title: "Goddess Mother carrying a child",
    artist: "Kondapalli Sheshagiri Rao",
    category: "folk_life",
    image: new5,
    description: "A tenqder scene of women in form of a goddess mother carrying a child, engaged in conversation. The painting highlights the strength, dignity, and nurturing spirit",
    year: "1976",
    medium: "Aqua texture on canvas",
    dimensions: "24\" x 18\"",
    period: "Mature Period",
    emotional_tone: "Gentle, contemplative, dignified",
    cultural_significance: "Celebrates the quiet strength and wisdom of women in Indian society, honoring their role as preservers of culture and nurturers of community values.",
    tags: ["women", "contemplation", "village life", "dignity", "conversation", "feminine grace", "community", "wisdom"]
  },
  {
    id: 14,
    title: "Women's delicate beauty",
    artist: "Kondapalli Sheshagiri Rao",
    category: "spiritual",
    image: new6,
    description: "A Women looking into a well, This picture depicts the delicare nature of a women where she is admiring her own beauty in the well",
    year: "1977",
    medium: "Aqua texture on canvas",
    dimensions: "26\" x 20\"",
    period: "Mature Period",
    emotional_tone: "Devotional, humble, reverent",
    cultural_significance: "Indian women's beautification rituals are deeply intertwined with spiritual practices, symbolizing inner purity and the offering of one's best self to the divine.",
    tags: ["devotion", "worship", "prayer", "offering", "spiritual", "bhakti", "ritual", "divine connection"]
  },
  {
    id: 15,
    title: "Pastoral Serenity",
    artist: "Kondapalli Sheshagiri Rao",
    category: "folk_life",
    image: new7,
    description: "A peaceful pastoral scene featuring cattle and herders in the golden light of evening. The composition embodies the timeless rhythm of rural life and humanity's harmonious relationship with domestic animals and the land.",
    year: "1974",
    medium: "Aqua texture on canvas",
    dimensions: "30\" x 24\"",
    period: "Mature Period",
    emotional_tone: "Peaceful, pastoral, harmonious",
    cultural_significance: "Cattle hold sacred significance in Hindu culture, representing prosperity, non-violence, and the nurturing aspect of Mother Earth. The pastoral life embodies dharmic living.",
    tags: ["pastoral", "cattle", "herders", "rural life", "harmony", "sacred animals", "evening", "peace"]
  },
  {
    id: 16,
    title: "Garden of Paradise",
    artist: "Kondapalli Sheshagiri Rao",
    category: "nature",
    image: new9,
    description: "A lush garden scene filled with flowering trees and verdant foliage, creating an earthly paradise. The painting celebrates the abundance and beauty of nature, rendered with the artist's characteristic attention to botanical detail and color harmony.",
    year: "1973",
    medium: "Aqua texture on canvas",
    dimensions: "28\" x 22\"",
    period: "Early Mature Period",
    emotional_tone: "Abundant, peaceful, paradisiacal",
    cultural_significance: "Gardens in Indian tradition represent the divine creative force and the harmony achievable between human cultivation and natural beauty.",
    tags: ["garden", "paradise", "flowers", "nature", "abundance", "botanical", "harmony", "beauty"]
  },
  {
    id: 17,
    title: "Folk culture",
    artist: "Kondapalli Sheshagiri Rao",
    category: "mythology",
    image: image3,
    description: "The picture depicts the Folk culture of India where three women participate in a ritual dance",
    year: "1975",
    medium: "Aqua texture on canvas",
    dimensions: "24\" x 18\"",
    period: "Mature Period",
    emotional_tone: "Ethereal, purposeful, divine",
    cultural_significance: "Cultural harmony is achieved with friendship, mutual respect, and shared spiritual purpose, reflecting the interconnectedness of all beings.",
    mythological_reference: "Inspired by Gandharva and Apsara traditions",
    tags: ["divine messenger", "celestial", "ethereal", "mythology", "cosmic connection", "spiritual purpose", "luminous"]
  },
  {
    id: 18,
    title: "A princess in a Garden",
    artist: "Kondapalli Sheshagiri Rao",
    category: "spiritual",
    image: image4,
    description: "A princess is seen playing in the garden along with her friends. The painting captures the serene joy and playful innocence of youth, set against the backdrop of a lush, tranquil garden that symbolizes purity and grace.",
    year: "1978",
    medium: "Aqua texture on canvas",
    dimensions: "26\" x 20\"",
    period: "Mature Period",
    emotional_tone: "Transcendent, devotional, absorbed",
    cultural_significance: "A playfull hour for the royal princess in a garden along with her friends",
    tags: ["music", "devotion", "classical", "transcendence", "spiritual discipline", "raga", "divine communion"]
  },
  {
    id: 19,
    title: "A couple in a Forest",
    artist: "Kondapalli Sheshagiri Rao",
    category: "cultural",
    image: image5,
    description: "A Couple carrying a basket of produce and their child on the back walking through the forest. The paintng captures the everday of the common folk in a forest, carrying their daily needs",
    year: "1976",
    medium: "Aqua texture on canvas",
    dimensions: "34\" x 26\"",
    period: "Mature Period",
    emotional_tone: "Majestic, dignified, ceremonial",
    cultural_significance: "The picture depicts the peaceful nature of the couple entagled in their duties but still happy and content",
    tags: ["royal", "procession", "dharmic kingship", "ceremony", "tradition", "majesty", "courtly", "grandeur"]
  },
  {
    id: 20,
    title: "Folk Life",
    artist: "Kondapalli Sheshagiri Rao",
    category: "spiritual",
    image: image6,
    description: "A women is seen in a folk attire. The picture showcases the innocence and beauty in a people of a village",
    year: "1977",
    medium: "Aqua texture on canvas",
    dimensions: "28\" x 22\"",
    period: "Mature Period",
    emotional_tone: "Graceful, sacred, expressive",
    cultural_significance: "The picture depicts the folk nature of country which keeps the cultural significance alive",
    tags: ["classical dance", "sacred performance", "divine feminine", "mudras", "bharatanatyam", "worship", "grace"]
  },
  {
    id: 21,
    title: "Art Work Exhibition",
    artist: "Kondapalli Sheshagiri Rao",
    category: "spiritual",
    image: image7,
    description: "An exhibition held in Hyderabad, attended by art enthuasiasts and dignitaries, showcasing the artist Kondapalli Sheshagiri Rao's masterpieces. The event highlights the cultural significance of his work in preserving and promoting Indian artistic traditions.",
    year: "1979",
    medium: "Aqua texture on canvas",
    dimensions: "24\" x 18\"",
    period: "Late Mature Period",
    emotional_tone: "Serene, contemplative, illuminated",
    cultural_significance: "Night meditation under moonlight is considered particularly powerful in Indian spiritual traditions, as the calm energy supports deep introspection and cosmic connection.",
    tags: ["meditation", "moonlight", "sage", "night", "contemplation", "spiritual illumination", "inner journey", "peace"]
  },
  {
    id: 22,
    title: "Rani Rudrama Devi",
    artist: "Kondapalli Sheshagiri Rao",
    category: "folk_life",
    image: image8,
    description: "This painiting is of Rani Rudrama Devi, the warrior queen of the Kakatiya dynasty. The artwork captures her regal presence and valor, carrying a sword and shield,and a child symbolizing her role as a powerful leader and a nurturing mother.",
    year: "1974",
    medium: "Aqua texture on canvas",
    dimensions: "32\" x 24\"",
    period: "Mature Period",
    emotional_tone: "Lively, communal, vibrant",
    cultural_significance: "The Fierce nature and valiant queen who ruled the Kakatiya dynasty, known for her administrative skills and military prowess. Her character symbolizes strength, resilience, and also represents the women in Indian history who broke societal norms to lead and inspire.",
    tags: ["village market", "commerce", "community", "daily life", "social bonds", "rural economy", "exchange", "vendors"]
  },
  {
    id: 23,
    title: "Paintings in an Exhibition",
    artist: "Kondapalli Sheshagiri Rao",
    category: "Mutiple",
    image: image9,
    description: "This Images showcases the artwork done by the artist Kondapalli Sheshagiri Rao in an Exhibition held in Hyderabad. This are a few among the many masterpieces created by the artist",
    year: "1975", 
    medium: "Aqua texture on canvas",
    dimensions: "30\" x 24\"",
    period: "Mature Period",
    emotional_tone: "Sacred, purifying, reverent",
    cultural_significance: "The many different forms of Artwork done by the artist Kondapalli Sheshagiri Rao",
    tags: ["sacred river", "ritual bathing", "purification", "devotees", "divine grace", "water goddess", "spirituality"]
  },
  {
    id: 24,
    title: "Sacred Grove",
    artist: "Kondapalli Sheshagiri Rao",
    category: "spiritual",
    image: new4,
    description: "A mystical landscape depicting a sacred grove where earth meets heaven. Ancient trees shelter a small shrine, creating an atmosphere of spiritual reverence and natural sanctity that speaks to the divine presence in nature.",
    year: "1978",
    medium: "Aqua texture on canvas",
    dimensions: "28\" x 22\"",
    period: "Mature Period",
    emotional_tone: "Mystical, peaceful, sacred",
    cultural_significance: "Sacred groves represent the Hindu concept of divine presence in nature, where trees, stones, and natural elements are revered as manifestations of the divine.",
    tags: ["sacred grove", "nature", "spirituality", "trees", "shrine", "mystical", "divine presence", "reverence"]
  },
  {
    id: 25,
    title: "Harvest Celebration",
    artist: "Kondapalli Sheshagiri Rao",
    category: "folk_life",
    image: image11,
    description: "A joyous celebration of the harvest season, showing a farmer giving thanks for the year's bounty. The painting radiates gratitude and the deep connection between human labor and nature's abundance.",
    year: "1976",
    medium: "Aqua texture on canvas",
    dimensions: "34\" x 26\"",
    period: "Mature Period",
    emotional_tone: "Joyful, grateful, abundant",
    cultural_significance: "Harvest festivals represent humanity's gratitude to Mother Earth and the divine forces that ensure agricultural prosperity and food security.",
    tags: ["harvest", "celebration", "farmers", "gratitude", "abundance", "mother earth", "agricultural", "prosperity"]
  },
  {
    id: 26,
    title: "A beauty in a Forest",
    artist: "Kondapalli Sheshagiri Rao",
    category: "spiritual",
    image: image13,
    description: "This picture shows a women looking back into the path in doubt and confusion. The eyes of the women in the painting raidates the complexity of human emotions with just faint look of her eyes",
    year: "1977",
    medium: "Aqua texture on canvas",
    dimensions: "32\" x 24\"",
    period: "Mature Period",
    emotional_tone: "Sacred, devotional, architectural",
    cultural_significance: "A rural villager in her every chores. The artist was able tp capture the essence of human emotions with just a faint look of her eyes",
    tags: ["temple", "courtyard", "architecture", "devotees", "prayer", "sacred space", "spiritual community", "divine energy"]
  },
  {
    id: 27,
    title: "Portrait of the Master with Jawaharlal Nehru",
    artist: "Kondapalli Sheshagiri Rao",
    category: "cultural",
    image: photoJH,
    description: "A capture of the artist Kondapalli Sheshagiri Rao in a moment of recognition with India's first Prime Minister, Jawaharlal Nehru. The photo reflects the artist's esteemed position in the cultural landscape of India and his dedication to preserving and innovating Indian art traditions.",
    year: "1982",
    medium: "Aqua texture on canvas",
    dimensions: "20\" x 16\"",
    period: "Late Mature Period",
    emotional_tone: "Contemplative, wise, introspective",
    cultural_significance: "Represents the artist's philosophy that the creator must embody the spiritual values expressed in their art, becoming a vessel for divine creativity.",
    tags: ["self portrait", "master artist", "wisdom", "spiritual depth", "introspection", "divine creativity", "artistic devotion"]
  },
  /*{
    id: 28,
    title: "The Artist's Vision",
    artist: "Kondapalli Sheshagiri Rao",
    category: "cultural",
    image: photo,
    description: "A portrait capturing the artist in a moment of creative inspiration, his eyes reflecting the inner vision that guided his artistic expression. The composition embodies the marriage of technical skill and spiritual insight.",
    year: "1983",
    medium: "Aqua texture on canvas",
    dimensions: "18\" x 14\"",
    period: "Late Mature Period",
    emotional_tone: "Inspired, visionary, creative",
    cultural_significance: "Represents the concept of the artist as a conduit for divine inspiration, where personal vision serves universal truth and cultural preservation.",
    tags: ["artist portrait", "creative inspiration", "inner vision", "artistic expression", "divine inspiration", "cultural preservation"]
  },*/
  /*{
    id: 29,
    title: "Legacy Portrait",
    artist: "Kondapalli Sheshagiri Rao",
    category: "cultural",
    image: photo2,
    description: "A formal portrait commemorating the artist's contribution to Indian art and culture. The dignified composition reflects his role as both cultural guardian and innovative creator in the modern artistic landscape.",
    year: "1984",
    medium: "Aqua texture on canvas",
    dimensions: "22\" x 18\"",
    period: "Late Period",
    emotional_tone: "Dignified, commemorative, honored",
    cultural_significance: "Honors the artist's legacy as a bridge between traditional Indian art forms and contemporary expression, preserving cultural heritage for future generations.",
    tags: ["legacy portrait", "cultural guardian", "artistic innovation", "heritage preservation", "modern art", "dignified", "commemorative"]
  }*/
];

// Categories with counts and descriptions for filtering
export const categories = [
  {
    id: "all",
    label: "All Artworks",
    count: artworks.length,
    description: "Complete collection spanning all themes and periods"
  },
  {
    id: "mythology",
    label: "Mythology",
    count: artworks.filter(art => art.category === "mythology").length,
    description: "Divine stories and epic tales from Hindu scriptures"
  },
  {
    id: "spiritual",
    label: "Spiritual",
    count: artworks.filter(art => art.category === "spiritual").length,
    description: "Devotional works and mystical experiences"
  },
  {
    id: "folk_life",
    label: "Folk Life",
    count: artworks.filter(art => art.category === "folk_life").length,
    description: "Rural scenes and traditional community life"
  },
  {
    id: "nature",
    label: "Nature",
    count: artworks.filter(art => art.category === "nature").length,
    description: "Natural beauty and divine creation"
  },
  {
    id: "cultural",
    label: "Cultural",
    count: artworks.filter(art => art.category === "cultural").length,
    description: "Regional traditions and cultural heritage"
  }
];

// Helper functions for artwork filtering and search
export const getArtworksByCategory = (category: string): Artwork[] => {
  if (category === "all") {
    return artworks;
  }
  return artworks.filter(artwork => artwork.category === category);
};

export const searchArtworks = (query: string): Artwork[] => {
  const searchTerm = query.toLowerCase();
  return artworks.filter(artwork => 
    artwork.title.toLowerCase().includes(searchTerm) ||
    artwork.description.toLowerCase().includes(searchTerm) ||
    artwork.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    artwork.cultural_significance.toLowerCase().includes(searchTerm) ||
    artwork.mythological_reference?.toLowerCase().includes(searchTerm) ||
    artwork.emotional_tone.toLowerCase().includes(searchTerm) ||
    artwork.medium.toLowerCase().includes(searchTerm) ||
    artwork.category.toLowerCase().includes(searchTerm)
  );
};

export const getArtworkById = (id: number): Artwork | undefined => {
  return artworks.find(artwork => artwork.id === id);
};