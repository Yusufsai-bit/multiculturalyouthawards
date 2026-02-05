import { Trophy } from "lucide-react";

const Winners = () => {
  const winners = [
    {
      name: "Sarah Chen",
      category: "Young Leader of the Year",
      background: "Chinese-Australian",
    },
    {
      name: "Amir Hassan",
      category: "Community Champion",
      background: "Somali-Australian",
    },
    {
      name: "Priya Sharma",
      category: "Academic Achievement",
      background: "Indian-Australian",
    },
    {
      name: "Thanh Nguyen",
      category: "Arts & Creative Excellence",
      background: "Vietnamese-Australian",
    },
  ];

  return (
    <section id="winners" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
            2024 Award Winners
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Celebrating Our{" "}
            <span className="text-gold-gradient">Champions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the exceptional young individuals who received recognition at the 2024 ceremony
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {winners.map((winner, index) => (
            <div
              key={index}
              className="award-card glass-card rounded-2xl p-6 text-center group border-gold-glow hover:border-gold/50 transition-all duration-500"
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <Trophy className="w-10 h-10 text-gold" />
              </div>
              
              <h3 className="text-foreground font-display text-xl font-semibold mb-1">
                {winner.name}
              </h3>
              <p className="text-gold text-sm font-medium mb-2">{winner.category}</p>
              <p className="text-muted-foreground text-sm">{winner.background}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
          >
            View all 2024 winners
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Winners;