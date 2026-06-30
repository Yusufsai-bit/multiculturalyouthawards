import { Calendar, MapPin, List } from "lucide-react";
import aboutGroup from "@/assets/about-group.jpg";
import parliamentHouse from "@/assets/parliament-house.jpg";

const AboutPage = () => {
  return (
    <div className="bg-navy text-background">
      {/* Hero */}
      <section className="pt-40 pb-16 text-center">
        <h1 className="font-numeral uppercase text-background text-6xl md:text-8xl leading-none">
          About
        </h1>
      </section>

      {/* Intro: group photo + paragraph */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <img
              src={aboutGroup}
              alt="Multicultural Youth Awards finalists and winners at Victorian Parliament House"
              className="w-full h-auto rounded-sm object-cover"
            />
            <p className="text-background/90 text-lg leading-relaxed">
              The Multicultural Youth Awards is a national event devoted to showcasing the
              outstanding achievements of multicultural youth. Steering away from current
              traditional awards, this initiative offers a unique and focused platform for
              recognition, emphasising the diverse talents, resilience, and positive
              impact/contributions of young individuals from multicultural backgrounds across
              Victoria and the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="font-numeral uppercase text-4xl md:text-5xl text-gold mb-6 leading-none">
                Mission
              </h2>
              <p className="text-background/90 text-lg leading-relaxed mb-5">
                <span className="text-gold">Celebrate</span> the rich diversity of talents,
                resilience, and positive impacts of multicultural youth.
              </p>
              <p className="text-background/90 text-lg leading-relaxed">
                <span className="text-gold">Fostering inclusivity,</span> and showcasing their
                accomplishments on a national stage
              </p>
            </div>
            <div>
              <h2 className="font-numeral uppercase text-4xl md:text-5xl text-gold mb-6 leading-none">
                Vision
              </h2>
              <p className="text-background/90 text-lg leading-relaxed mb-5">
                <span className="text-gold">Recognise</span> excellence across 13 categories.
              </p>
              <p className="text-background/90 text-lg leading-relaxed">
                <span className="text-gold">Highlighting</span> the outstanding achievements and
                contributions of young individuals from diverse backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event details + Parliament House image */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-7">
              <div className="flex items-center gap-4">
                <Calendar className="w-7 h-7 text-background shrink-0" strokeWidth={1.5} />
                <span className="text-background text-lg">Friday, October 3 2024</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-7 h-7 text-background shrink-0" strokeWidth={1.5} />
                <span className="text-background text-lg">Victorian Parliament House</span>
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