import { Calendar, MapPin, List } from "lucide-react";
import aboutGroup from "@/assets/about-group.jpg";
import parliamentHouse from "@/assets/parliament-house.jpg";
import { useSiteStatus } from "@/hooks/useSiteStatus";

const AboutPage = () => {
  const { eventDate, eventLocation } = useSiteStatus();
  return (
    <div className="bg-navy text-background">
      {/* Hero */}
      <section className="pt-48 md:pt-40 pb-16 text-center">
        <h1 className="font-display font-bold text-background text-5xl md:text-[75px] leading-none">
          About
        </h1>
      </section>

      {/* Intro: group photo + paragraph */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <img
              src={aboutGroup}
              alt="Multicultural Youth Awards finalists and winners at Victorian Parliament House"
              className="w-full h-auto rounded-sm object-cover"
            />
            <p className="text-background text-xl md:text-[23px] leading-[1.5]">
              The Multicultural Youth Awards recognises young people from multicultural
              communities whose talent, leadership and service are making a difference. The
              national program gives their achievements a dedicated stage and brings families,
              communities and sector leaders together to celebrate them.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="font-display font-bold uppercase text-5xl md:text-[60px] text-gold mb-6 leading-none">
                Mission
              </h2>
              <p className="text-background text-xl md:text-[23px] leading-[1.5] mb-5">
                <span className="text-gold">Celebrate</span> the talent, resilience and positive
                contributions of multicultural young people.
              </p>
              <p className="text-background text-xl md:text-[23px] leading-[1.5]">
                <span className="text-gold">Build inclusion</span> by showcasing their
                achievements on a national stage.
              </p>
            </div>
            <div>
              <h2 className="font-display font-bold uppercase text-5xl md:text-[60px] text-gold mb-6 leading-none">
                Vision
              </h2>
              <p className="text-background text-xl md:text-[23px] leading-[1.5] mb-5">
                <span className="text-gold">Recognise</span> excellence across 13 categories.
              </p>
              <p className="text-background text-xl md:text-[23px] leading-[1.5]">
                <span className="text-gold">Highlight</span> achievements that strengthen
                communities and inspire other young people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event details + Parliament House image */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-7">
              <div className="flex items-center gap-4">
                <Calendar className="w-7 h-7 text-background shrink-0" strokeWidth={1.5} />
                <span className="text-background text-lg">{eventDate}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-7 h-7 text-background shrink-0" strokeWidth={1.5} />
                <span className="text-background text-lg">{eventLocation}</span>
              </div>
              <div className="flex items-center gap-4">
                <List className="w-7 h-7 text-background shrink-0" strokeWidth={1.5} />
                <span className="text-background text-lg">13 Award Categories</span>
              </div>
            </div>
            <img
              src={parliamentHouse}
              alt="Victorian Parliament House"
              className="w-full h-auto rounded-sm object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
