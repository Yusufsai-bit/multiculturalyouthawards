const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-gold-gradient text-3xl font-display font-bold">M</span>
            <div>
              <span className="text-foreground font-display text-lg block">Multicultural Youth Awards</span>
              <span className="text-muted-foreground text-sm">Celebrating Diversity. Inspiring Leaders.</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-gold transition-colors">About</a>
            <a href="#categories" className="text-muted-foreground hover:text-gold transition-colors">Categories</a>
            <a href="#partners" className="text-muted-foreground hover:text-gold transition-colors">Partners</a>
            <a href="#contact" className="text-muted-foreground hover:text-gold transition-colors">Contact</a>
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors">Privacy Policy</a>
          </div>
        </div>

        <div className="section-divider my-8" />

        <div className="text-center text-muted-foreground text-sm">
          <p>© 2025 Multicultural Youth Awards. All rights reserved.</p>
          <p className="mt-2">
            A proud initiative of{" "}
            <a href="#" className="text-gold hover:text-gold-light transition-colors">
              Multicultural Arts Victoria
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;