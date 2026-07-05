import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(var(--gold) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold) / 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-glow-pulse" />
            <span className="text-gold text-sm font-medium">Nominations Now Open for 2025</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Multicultural</span>
            <br />
            <span className="text-gold-gradient">Youth Awards</span>
          </h1>

          {/* Tagline */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Celebrating the incredible talents, resilience, and leadership of Australia's multicultural youth
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="gold" size="xl" className="min-w-[200px]">
              Submit Nomination
            </Button>
            <Button variant="goldOutline" size="xl" className="min-w-[200px]">
              Learn More
            </Button>
          </div>

          {/* Event Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="glass-card rounded-xl p-6 border-gold-glow">
              <Calendar className="w-6 h-6 text-gold mx-auto mb-3" />
              <p className="text-foreground font-semibold">October 4, 2025</p>
              <p className="text-muted-foreground text-sm">Save the Date</p>
            </div>
            <div className="glass-card rounded-xl p-6 border-gold-glow">
              <MapPin className="w-6 h-6 text-gold mx-auto mb-3" />
              <p className="text-foreground font-semibold">Parliament House</p>
              <p className="text-muted-foreground text-sm">Victoria, Australia</p>
            </div>
            <div className="glass-card rounded-xl p-6 border-gold-glow">
              <Award className="w-6 h-6 text-gold mx-auto mb-3" />
              <p className="text-foreground font-semibold">13 Categories</p>
              <p className="text-muted-foreground text-sm">Excellence Awards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;