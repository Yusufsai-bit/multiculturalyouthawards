import { Users, Globe, Star, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Nominations Received" },
    { icon: Globe, value: "50+", label: "Cultural Backgrounds" },
    { icon: Star, value: "13", label: "Award Categories" },
    { icon: Heart, value: "1000+", label: "Lives Impacted" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="section-divider mb-24" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
              About The Awards
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Honouring the Brilliance of{" "}
              <span className="text-gold-gradient">Multicultural Youth</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The Multicultural Youth Awards is a prestigious national event devoted to showcasing 
              the outstanding achievements of multicultural youth across Australia.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Steering away from traditional awards, this initiative offers a unique platform for 
              recognition—emphasising the diverse talents, resilience, and positive contributions 
              of young individuals from multicultural backgrounds.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                "Celebrating diversity and cultural heritage",
                "Recognising leadership and community impact",
                "Inspiring the next generation of leaders",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="award-card glass-card rounded-2xl p-8 text-center border-gold-glow group hover:border-gold/50 transition-all duration-500"
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;