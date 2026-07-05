const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background pt-32">
      {/* Hero Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy <span className="text-gold-gradient">Policy</span>
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
                <h2 className="font-display text-xl font-bold text-gold mb-4">Who we are</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website address is: https://multiculturalyouthawards.com.au.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">What personal data we collect and why we collect it</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect personal information that you voluntarily provide to us, for example when you
                  contact us, submit a nomination, become a sponsor or partner, subscribe to updates, or
                  interact with us on social media. This may include your name, contact details,
                  organisation, role, and any information you choose to include in forms or messages.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We also collect limited technical data (such as IP address, browser type and pages
                  visited) to help us maintain the security, performance and usability of this website.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">Nominations and event participation</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you submit a nomination or participate in the Multicultural Youth Awards, we collect
                  information about nominees, nominators, referees and organisations as required on the
                  nomination forms. We use this information to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>assess eligibility and process nominations</li>
                  <li>administer judging and awards</li>
                  <li>contact nominees, nominators and referees about their submission</li>
                  <li>promote the Awards, including publishing winners and finalists (with consent)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Nomination information may be shared, on a need-to-know basis, with our judging panel,
                  event partners and sponsors who are involved in delivering and promoting the Awards. We
                  take reasonable steps to ensure your information is handled confidentially and in line
                  with this policy.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This site uses cookies and similar technologies to improve your browsing experience and
                  understand how our website is used. You can choose to block or delete cookies in your
                  browser settings, but some features of the site may not function correctly as a result.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">Embedded content from other websites</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pages on this site may include embedded content (for example videos, forms, images or
                  social media feeds). Embedded content from other websites behaves in the same way as if
                  you visited those websites directly. Those sites may collect data about you, use cookies
                  and monitor your interaction with embedded content, in line with their own privacy
                  policies.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">Who we share your data with</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share your information with trusted
                  service providers and partners who help us operate this website and deliver the
                  Multicultural Youth Awards (for example, website hosting, email services, nomination
                  platforms and event partners). These providers only access your information to perform
                  services on our behalf and are required to protect it.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">How long we retain your data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We keep personal information for as long as it is needed for the purposes for which it
                  was collected, or as required by law. Nomination and event records may be retained for
                  several years to support reporting, evaluation and future planning of the Awards.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">What rights you have over your data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Depending on where you live, you may have rights to request access to the personal
                  information we hold about you, to request corrections, or to ask that we delete certain
                  information where it is no longer required. To make a request, please contact us at{" "}
                  <a href="mailto:info@multiculturalyouthawards.com.au" className="text-gold hover:text-gold-light">
                    info@multiculturalyouthawards.com.au
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">How we protect your data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take reasonable steps to protect the personal information we hold from misuse, loss,
                  unauthorised access, modification or disclosure. However, no method of transmission or
                  storage is completely secure, and you share information with us at your own risk.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-gold mb-4">Contact us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or how we handle your personal
                  information, please contact us at{" "}
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

export default PrivacyPage;
