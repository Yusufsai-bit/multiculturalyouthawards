import { 
  Palette, 
  Music, 
  Lightbulb, 
  Users, 
  Heart, 
  GraduationCap,
  Trophy,
  Mic,
  Camera,
  BookOpen,
  Rocket,
  HandHeart,
  Star
} from "lucide-react";

const Categories = () => {
  const categories = [
    { icon: Trophy, name: "Young Leader of the Year" },
    { icon: Palette, name: "Arts & Creative Excellence" },
    { icon: Music, name: "Music & Performance" },
    { icon: GraduationCap, name: "Academic Achievement" },
    { icon: Lightbulb, name: "Innovation & Entrepreneurship" },
    { icon: Heart, name: "Community Champion" },
    { icon: HandHeart, name: "Volunteer of the Year" },
    { icon: Mic, name: "Public Speaking & Advocacy" },
    { icon: Camera, name: "Media & Digital Content" },
    { icon: BookOpen, name: "Cultural Ambassador" },
    { icon: Rocket, name: "Rising Star" },
    { icon: Users, name: "Team Excellence" },
    { icon: Star, name: "Lifetime Achievement" },
  ];

  return (
    <section id="categories" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
            Award Categories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            13 Categories of{" "}
            <span className="text-gold-gradient">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognising outstanding achievements across diverse fields of talent and contribution
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="award-card glass-card rounded-xl p-6 text-center group hover:border-gold/30 transition-all duration-500 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <category.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-foreground font-medium text-sm leading-tight group-hover:text-gold transition-colors duration-300">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;