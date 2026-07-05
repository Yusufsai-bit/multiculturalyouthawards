import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Megaphone, Sparkles, Heart, Users, User, Wrench, Feather,
  GraduationCap, HandHeart, Trophy, Palette, Rocket, Award,
} from "lucide-react";
import { useCurrentYear, useCategories } from "@/lib/queries";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const iconCycle: React.ElementType[] = [
  Megaphone, Sparkles, Heart, Users, User, Wrench, Feather,
  GraduationCap, HandHeart, Trophy, Palette, Rocket, Award,
];

const nominationLabel = (status?: string) => {
  if (status === "open") return "Nominate Now";
  if (status === "coming_soon") return "Nominations Opening Soon";
  return "Nominations Closed";
};

const AwardsPage = () => {
  const { data: currentYear } = useCurrentYear();
  const { data: categories = [] } = useCategories(currentYear?.id);
  const closed = currentYear?.nominations_status !== "open";

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="The Awards"
        title={<>{categories.length || 13} categories of <span className="italic text-gold">excellence</span></>}
        subtitle="Recognising outstanding achievements across diverse fields of talent, leadership and contribution"
      >
        <Button variant="gold" size="xl" className="min-w-[220px] tracking-[0.2em] uppercase text-xs font-bold" asChild disabled={closed}>
          <Link to="/nominations">{nominationLabel(currentYear?.nominations_status)}</Link>
        </Button>
      </PageHero>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => {
              const Icon = iconCycle[index % iconCycle.length] || Award;
              return (
                <div key={category.id}
                  className="glass-card rounded-2xl p-6 border-gold-glow hover:border-gold/50 transition-all duration-500 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-sans text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                        {category.name}
                      </h3>
                      {category.description && (
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              eyebrow="Make a Nomination"
              title={<>Know someone <span className="italic text-gold">deserving?</span></>}
              className="mb-6"
            />
            <p className="text-muted-foreground mb-8">
              Nominate an outstanding young person who is making a difference in their community.
            </p>
            <Button variant="gold" size="lg" asChild disabled={closed}>
              <Link to="/nominations">{nominationLabel(currentYear?.nominations_status)}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsPage;
