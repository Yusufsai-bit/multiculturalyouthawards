import { useState, useEffect } from "react";
import { Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useYears, useResultsByYear } from "@/lib/queries";
import PageHero from "@/components/PageHero";
import { siteContent } from "@/lib/siteContent";

const WinnersPage = () => {
  const { data: years = [] } = useYears();
  const [yearId, setYearId] = useState<string>("");

  useEffect(() => {
    if (!yearId && years.length) {
      const withResults = years.find((y) => !y.is_current) ?? years[0];
      setYearId(withResults.id);
    }
  }, [years, yearId]);

  const { data: results = [], isLoading } = useResultsByYear(yearId);
  const selectedYear = years.find((y) => y.id === yearId);
  const dbCategories = results.filter((c) => c.winners.length > 0);

  // Fallback: when the database has no published results for the selected
  // year, render the 2025 cohort from siteContent so the page matches the
  // live site. Database results always take precedence once published.
  const useFallback = !isLoading && dbCategories.length === 0;
  const fallbackCategories = useFallback
    ? Object.entries(siteContent.winners2025).map(([categoryName, w], i) => ({
        id: `sc-${i}`,
        name: categoryName,
        winners: [{ id: `sc-w-${i}`, name: w.name, bio: w.bio, image_url: null as string | null }],
        finalists: w.finalists.map((f, j) => ({ id: `sc-f-${i}-${j}`, name: f.name, bio: f.bio })),
      }))
    : [];
  const categoriesWithWinners = useFallback ? fallbackCategories : dbCategories;

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow={`Winners${selectedYear ? ` ${selectedYear.year}` : ""}`}
        title={<>Celebrating our <span className="italic text-gold">champions</span></>}
        subtitle="Meet the exceptional young people recognised at the Multicultural Youth Awards"
        numeral={selectedYear ? String(selectedYear.year) : undefined}
      >
        {years.length > 0 && (
          <select
            value={yearId}
            onChange={(e) => setYearId(e.target.value)}
            className="bg-background border border-border rounded-lg px-4 py-2 text-foreground"
          >
            {years.map((y) => (
              <option key={y.id} value={y.id}>{y.year}</option>
            ))}
          </select>
        )}
      </PageHero>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {isLoading && <p className="text-center text-muted-foreground">Loading...</p>}
            {!isLoading && categoriesWithWinners.length === 0 && (
              <p className="text-center text-muted-foreground">
                Winners for this year have not been published yet.
              </p>
            )}
            <Accordion type="single" collapsible className="space-y-4">
              {categoriesWithWinners.map((category, index) => (
                <AccordionItem
                  key={category.id}
                  value={`category-${index}`}
                  className="glass-card rounded-xl border-gold-glow px-6"
                >
                  <AccordionTrigger className="text-foreground font-semibold hover:text-gold py-6">
                    <div className="flex items-center gap-4">
                      <Trophy className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-left">{category.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="pl-9">
                      {category.winners.map((winner) => (
                        <div className="mb-6" key={winner.id}>
                          <div className="flex items-center gap-3 mb-2">
                            {winner.image_url ? (
                              <img src={winner.image_url} alt={winner.name}
                                className="w-12 h-12 rounded-full object-cover" />
                            ) : (
                              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                                <Trophy className="w-6 h-6 text-gold" />
                              </div>
                            )}
                            <div>
                              <p className="text-gold text-sm font-medium">Winner</p>
                              <h4 className="font-display text-lg font-semibold text-foreground">
                                {winner.name}
                              </h4>
                            </div>
                          </div>
                          {winner.bio && (
                            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                              {winner.bio}
                            </p>
                          )}
                        </div>
                      ))}

                      {category.finalists.length > 0 && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-2">
                            {category.finalists.length === 1 ? "Finalist" : "Finalists"}
                          </p>
                          <ul className="space-y-1">
                            {category.finalists.map((finalist) => (
                              <li key={finalist.id} className="text-foreground text-sm">
                                <span className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                                  {finalist.name}
                                </span>
                                {"bio" in finalist && finalist.bio && (
                                  <p className="text-muted-foreground mt-1 leading-relaxed pl-3.5">{finalist.bio}</p>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WinnersPage;
