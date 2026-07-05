import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteContent, getNominationButtonText } from "@/lib/siteContent";
import { useSiteStatus } from "@/hooks/useSiteStatus";
import CountUp from "@/components/CountUp";
import videoAsset from "@/assets/mya-2025.mp4.asset.json";
import videoPoster from "@/assets/mya-2025-poster.jpg.asset.json";

const SPONSOR_FORM_URL = "https://forms.cloud.microsoft/r/NRe8dxVEs6";

const HomePage = () => {
  const { nominationsStatus, eventDate, eventLocation } = useSiteStatus();
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden min-h-[92vh]">
        {/* Full-bleed background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={videoPoster.url}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoAsset.url} type="video/mp4" />
        </video>
        {/* Dark overlay for legibility */}
        <div aria-hidden="true" className="absolute inset-0 bg-navy/50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center bg-navy/40 backdrop-blur-[2px] px-6 py-14 md:px-12 md:py-16">
            <h1 className="font-display text-background text-3xl md:text-5xl leading-tight mb-10">
              Celebrating the incredible talents &amp; leadership of Australia&rsquo;s
              multicultural youth
            </h1>
            <Button variant="gold" size="xl" className="uppercase tracking-[0.15em] text-xs font-bold" asChild>
              <Link to="/nominations">{getNominationButtonText(nominationsStatus)}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="bg-navy border-b-8 border-gold">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,220px)_auto_minmax(0,1fr)_minmax(0,240px)]">
          {/* Left image (hugs edge) */}
          <img
            src="https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/Untitled-3.jpg"
            alt="Guests seated at the Multicultural Youth Awards ceremony"
            loading="lazy"
            className="hidden lg:block w-full h-auto max-h-[520px] object-cover"
          />

          {/* Big number */}
          <div className="text-center lg:text-left px-4 pt-14 lg:pt-0">
            <CountUp
              end={13}
              className="block font-numeral font-extrabold leading-none text-gold text-[130px] md:text-[210px] number-3d"
            />
            <p className="font-display font-extrabold uppercase tracking-wide text-background text-5xl md:text-7xl -mt-4 md:-mt-6">
              Awards
            </p>
          </div>

          {/* Text + button */}
          <div className="px-6 py-14 lg:py-16 max-w-xl">
            <p className="text-background/85 text-base md:text-lg leading-relaxed mb-8">
              <strong className="text-background">A national event</strong> devoted to{" "}
              <strong className="text-background">showcasing the outstanding achievements of
              multicultural youth</strong>. Steering away from current traditional awards, this
              initiative offers a unique and focused{" "}
              <strong className="text-background">platform for recognition, emphasising the diverse
              talents, resilience, and positive impact/contributions of young individuals</strong>{" "}
              from multicultural backgrounds across Victoria and the nation.
            </p>
            <Button
              size="xl"
              className="rounded-full bg-background text-navy hover:bg-background/90 uppercase tracking-[0.18em] text-xs font-bold"
              asChild
            >
              <Link to="/about">Learn more</Link>
            </Button>
          </div>

          {/* Right image */}
          <img
            src="https://multiculturalyouthawards.com.au/wp-content/uploads/2025/07/Youth-Awards-7-10-24-Robert-.jpg"
            alt="Presenters at the podium during the Multicultural Youth Awards"
            loading="lazy"
            className="hidden lg:block w-full h-auto max-h-[520px] object-cover justify-self-end"
          />
        </div>
      </section>

      {/* Get involved */}
      <section className="bg-gold py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-extrabold uppercase tracking-tight text-navy text-4xl md:text-6xl leading-[0.95]">
            Get Involved
          </h2>
          <p className="mt-4 text-navy/80 text-lg md:text-xl font-semibold">
            Be part of the <span className="italic">change</span>
          </p>
          <p className="mx-auto mt-8 mb-14 max-w-2xl text-center text-base md:text-lg leading-relaxed font-semibold text-navy/90">
            We thank our sponsors and partners for their generous support. Learn more about how you
            can support the Multicultural Youth Awards.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              size="xl"
              className="min-w-[250px] rounded-none border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-background uppercase tracking-[0.18em] text-xs font-bold"
              asChild
            >
              <a href={SPONSOR_FORM_URL} target="_blank" rel="noopener noreferrer">Sponsor</a>
            </Button>
            <Button
              size="xl"
              className="min-w-[250px] rounded-none border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-background uppercase tracking-[0.18em] text-xs font-bold"
              asChild
            >
              <Link to="/nominations">Nomination</Link>
            </Button>
            <Button
              size="xl"
              className="min-w-[250px] rounded-none border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-background uppercase tracking-[0.18em] text-xs font-bold"
              asChild
            >
              <Link to="/contact">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
