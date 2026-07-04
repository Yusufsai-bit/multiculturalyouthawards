import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Award, ArrowRight } from "lucide-react";
import { siteContent, getNominationButtonText } from "@/lib/siteContent";
import SectionHeading from "@/components/SectionHeading";

const SPONSOR_FORM_URL = "https://forms.cloud.microsoft/r/NRe8dxVEs6";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-background flex items-center justify-center overflow-hidden pt-44 pb-28 min-h-[80vh]">
        {/* Large faded backdrop wordmark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <span className="font-display text-foreground/[0.06] leading-[0.85] text-[13vw] md:text-[10vw]">
            Multicultural
          </span>
          <span className="font-display text-foreground/[0.06] leading-[0.85] text-[13vw] md:text-[10vw]">
            Youth Awards
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-foreground text-3xl md:text-5xl leading-tight mb-10">
              Celebrating the incredible talents &amp; leadership of Australia&rsquo;s
              multicultural youth
            </h1>
            <Button variant="gold" size="xl" className="uppercase tracking-[0.15em] text-xs font-bold" asChild>
              <Link to="/nominations">{getNominationButtonText(siteContent.nominationsStatus)}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="font-numeral text-gold text-7xl mb-2">13</div>
              <p className="uppercase tracking-[0.2em] text-sm text-muted-foreground mb-8">Awards</p>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                <strong>A national event</strong> devoted to{" "}
                <strong>showcasing the outstanding achievements of multicultural youth</strong>.
                Steering away from current traditional awards, this initiative offers a unique and
                focused <strong>platform for recognition, emphasising the diverse talents,
                resilience, and positive impact/contributions of young individuals</strong> from
                multicultural backgrounds across Victoria and the nation.
              </p>
              <Button variant="goldOutline" size="lg" asChild>
                <Link to="/about">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/Youth-Awards-7-10-24-Robert-.jpg"
                alt="Multicultural Youth Awards ceremony"
                loading="lazy"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Get Involved"
            title={<>Be part of the <span className="italic text-gold">change</span></>}
            className="mb-4"
          />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We thank our sponsors and partners for their generous support. Learn more about how you
            can support the Multicultural Youth Awards.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button variant="gold" size="xl" className="uppercase tracking-[0.15em] text-xs font-bold min-w-[200px]" asChild>
              <a href={SPONSOR_FORM_URL} target="_blank" rel="noopener noreferrer">Sponsor</a>
            </Button>
            <Button variant="goldOutline" size="xl" className="uppercase tracking-[0.15em] text-xs font-bold min-w-[200px]" asChild>
              <Link to="/nominations">Nomination</Link>
            </Button>
            <Button variant="goldOutline" size="xl" className="uppercase tracking-[0.15em] text-xs font-bold min-w-[200px]" asChild>
              <Link to="/contact">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event info */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 text-gold mb-3" />
              <p className="text-background font-semibold">{siteContent.eventDate}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-gold mb-3" />
              <p className="text-background font-semibold">{siteContent.eventLocation}</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-gold mb-3" />
              <p className="text-background font-semibold">13 Award Categories</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="gold" size="xl" className="uppercase tracking-[0.15em] text-xs font-bold" asChild>
              <Link to="/nominations">{getNominationButtonText(siteContent.nominationsStatus)}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
