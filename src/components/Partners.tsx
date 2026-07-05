const Partners = () => {
  const partners = [
    { name: "Multicultural Arts Victoria", type: "Principal Partner" },
    { name: "Victorian Government", type: "Government Partner" },
    { name: "MYG - Multicultural Youth Group", type: "Community Partner" },
    { name: "SBS Australia", type: "Media Partner" },
    { name: "Diversity Council", type: "Supporting Partner" },
    { name: "Youth Affairs Council", type: "Community Partner" },
  ];

  return (
    <section id="partners" className="py-24 bg-background relative">
      <div className="section-divider mb-24" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Partners
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proudly Supported By
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We thank our sponsors and partners for their generous support in making this celebration possible
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-8 text-center border-gold-glow group hover:border-gold/50 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <span className="text-gold font-sans text-2xl font-bold">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-foreground font-medium mb-1">{partner.name}</h3>
              <p className="text-muted-foreground text-sm">{partner.type}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in becoming a sponsor or partner?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
          >
            Get in touch
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;