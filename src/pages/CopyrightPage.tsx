const CopyrightPage = () => {
  return (
    <div className="min-h-screen bg-background pt-32">
      {/* Hero Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Copyright and <span className="text-gold-gradient">Disclaimer</span>
            </h1>
            <p className="text-muted-foreground">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <div className="glass-card rounded-2xl p-8 border-gold-glow space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">Copyright</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  © Multicultural Youth Awards, {new Date().getFullYear()}. All rights reserved.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Unless otherwise stated, all text, images, graphics, video, and other content on this
                  website are owned by or licensed to the Multicultural Youth Awards and its partners. You
                  may not reproduce, distribute, modify, or publicly display any content from this site
                  without our prior written permission, except as permitted by law for personal and
                  non-commercial use.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The information on this website is provided for general information purposes only. While
                  we aim to keep all content accurate and up to date, we make no representations or
                  warranties of any kind, express or implied, about the completeness, accuracy,
                  reliability, or suitability of the information contained on the site.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Any reliance you place on such information is strictly at your own risk. We accept no
                  responsibility for any loss or damage that may arise from the use of this website.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">External links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website may contain links to external websites that are not operated by the
                  Multicultural Youth Awards. We have no control over the content or availability of those
                  sites and do not endorse or accept any responsibility for their content, privacy
                  practices or policies.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Copyright &amp; Disclaimer notice, please contact us
                  at{" "}
                  <a href="mailto:info@multiculturalyouthawards.com.au" className="text-gold hover:text-gold-light">
                    info@multiculturalyouthawards.com.au
                  </a>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CopyrightPage;
