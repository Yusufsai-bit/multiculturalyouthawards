import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCurrentYear, useCategories } from "@/lib/queries";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const AwardsPage = () => {
  const { data: currentYear } = useCurrentYear();
  const { data: categories = [] } = useCategories(currentYear?.id);
  const closed = currentYear?.nominations_status !== "open";

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="The Awards"
        title={<>{categories.length || 13} categories of <span className="italic text-gold normal-case">Excellence</span></>}
        subtitle="Recognising outstanding achievements across diverse fields of talent, leadership and contribution"
      >
        <Button variant="gold" size="xl" className="min-w-[220px] rounded-none tracking-[0.2em] uppercase text-xs font-bold" asChild>
          <Link to={closed ? "/winners" : "/nominations"}>{closed ? "View 2026 Winners" : "Nominate Now"}</Link>
        </Button>
      </PageHero>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto border-b border-border">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="group grid gap-3 md:grid-cols-[72px_1fr_1.3fr] md:gap-10 items-baseline border-t border-border px-4 md:px-6 py-8 transition-colors duration-300 hover:bg-secondary/40"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-2xl md:text-3xl font-semibold text-gold/60 group-hover:text-gold transition-colors duration-300"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              eyebrow={closed ? "2026 Awards" : "Make a Nomination"}
              title={closed ? <>Meet this year&rsquo;s <span className="italic text-gold normal-case">Winners</span></> : <>Know someone <span className="italic text-gold normal-case">Deserving?</span></>}
              className="mb-6"
            />
            <p className="text-muted-foreground mb-8">
              {closed
                ? "Nominations have closed. Discover the young people recognised across this year’s 13 categories."
                : "Nominate an outstanding young person who is making a difference in their community."}
            </p>
            <Button variant="gold" size="lg" className="rounded-none" asChild>
              <Link to={closed ? "/winners" : "/nominations"}>{closed ? "View Winners" : "Nominate Now"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsPage;
