import { useState, useEffect } from "react";
import { Trophy } from "lucide-react";
import { useYears, useResultsByYear } from "@/lib/queries";
import PageHero from "@/components/PageHero";
import { siteContent } from "@/lib/siteContent";

interface DisplayFinalist {
  id: string;
  name: string;
  bio?: string | null;
}

interface DisplayWinner {
  id: string;
  name: string;
  bio?: string | null;
  image_url?: string | null;
}

interface DisplayCategory {
  id: string;
  name: string;
  description?: string | null;
  winners: DisplayWinner[];
  finalists: DisplayFinalist[];
}

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

  // Fallback: only for 2025, and only when the database has no published
  // results for it, render the cohort from siteContent so the page matches
  // the live site. Database results always take precedence once published.
  const useFallback =
    !isLoading && dbCategories.length === 0 && selectedYear?.year === 2025;
  const fallbackCategories: DisplayCategory[] = useFallback
    ? Object.entries(siteContent.winners2025).map(([categoryName, w], i) => {
        const cat = siteContent.categories.find((c) => c.name === categoryName);
        return {
          id: `sc-${i}`,
          name: categoryName,
          description: cat?.description,
          winners: [{ id: `sc-w-${i}`, name: w.name, bio: w.bio }],
          finalists: w.finalists.map((f, j) => ({
            id: `sc-f-${i}-${j}`,
            name: f.name,
            bio: f.bio,
          })),
        };
      })
    : [];
  const categories: DisplayCategory[] = useFallback
    ? fallbackCategories
    : (dbCategories as DisplayCategory[]);

  const noResults = !isLoading && categories.length === 0;

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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isLoading && (
              <p className="text-center text-muted-foreground">Loading...</p>
            )}

            {noResults && (
              <div className="text-center py-12">
                <Trophy className="w-10 h-10 text-gold mx-auto mb-5" />
                <h2 className="font-display text-2xl text-foreground mb-3">
                  Winners {selectedYear ? selectedYear.year : ""} to be announced
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The {selectedYear?.year} winners will be announced following the
                  awards ceremony on {siteContent.eventDate} at {siteContent.eventLocation}.
                </p>
              </div>
            )}

            <div className="space-y-24">
              {categories.map((category) => (
                <article key={category.id}>
                  {/* Category header — booklet style */}
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-gold uppercase leading-tight mb-4">
                    {category.name}
                  </h2>
                  {category.description && (
                    <p className="text-navy leading-relaxed mb-10 max-w-2xl">
                      {category.description}
                    </p>
                  )}

                  {/* Winner / Finalist columns */}
                  <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                    {/* Winner column */}
                    <div>
                      <p className="font-display font-bold text-navy uppercase tracking-[0.15em] text-lg mb-4">
                        Winner
                      </p>
                      {category.winners.map((winner) => (
                        <div key={winner.id} className="mb-8 last:mb-0">
                          {winner.image_url && (
                            <img
                              src={winner.image_url}
                              alt={winner.name}
                              className="w-24 h-24 rounded-full object-cover mb-4"
                            />
                          )}
                          <span className="inline-block bg-gold text-navy font-semibold rounded-full px-6 py-2 mb-4">
                            {winner.name}
                          </span>
                          {winner.bio && (
                            <p className="text-muted-foreground leading-relaxed">
                              {winner.bio}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Finalist column */}
                    {category.finalists.length > 0 && (
                      <div>
                        <p className="font-display font-bold text-navy uppercase tracking-[0.15em] text-lg mb-4">
                          {category.finalists.length === 1 ? "Finalist" : "Finalists"}
                        </p>
                        {category.finalists.map((finalist) => (
                          <div key={finalist.id} className="mb-8 last:mb-0">
                            <p className="font-semibold text-navy text-lg mb-4">
                              {finalist.name}
                            </p>
                            {finalist.bio && (
                              <p className="text-muted-foreground leading-relaxed border-l-2 border-navy/20 pl-4">
                                {finalist.bio}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WinnersPage;
