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
          <div className="max-w-3xl mx-auto">
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

            <div className="space-y-20">
              {categories.map((category) => (
                <article key={category.id}>
                  {/* Category header — navy accent band */}
                  <div className="bg-navy px-6 py-8 md:px-10 md:py-10 text-center">
                    <h2 className="font-display text-2xl md:text-3xl text-background">
                      {category.name}
                    </h2>
                    {category.description && (
                      <p className="text-background/80 leading-relaxed mt-4 max-w-2xl mx-auto">
                        {category.description}
                      </p>
                    )}
                  </div>

                  {/* Winner */}
                  {category.winners.map((winner) => (
                    <div key={winner.id} className="pt-10 text-center">
                      <p className="font-display text-gold uppercase tracking-[0.2em] text-sm mb-3">
                        Winner
                      </p>
                      {winner.image_url && (
                        <img
                          src={winner.image_url}
                          alt={winner.name}
                          className="w-28 h-28 rounded-full object-cover mx-auto mb-5"
                        />
                      )}
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                        {winner.name}
                      </h3>
                      {winner.bio && (
                        <p className="text-muted-foreground leading-relaxed text-left md:text-justify">
                          {winner.bio}
                        </p>
                      )}
                    </div>
                  ))}

                  {/* Finalists */}
                  {category.finalists.length > 0 && (
                    <div className="pt-10 text-center">
                      <p className="font-display text-gold uppercase tracking-[0.2em] text-sm mb-3">
                        {category.finalists.length === 1 ? "Finalist" : "Finalists"}
                      </p>
                      {category.finalists.map((finalist) => (
                        <div key={finalist.id} className="mb-8 last:mb-0">
                          <h4 className="font-display text-lg md:text-xl font-semibold text-foreground mb-4">
                            {finalist.name}
                          </h4>
                          {finalist.bio && (
                            <p className="text-muted-foreground leading-relaxed text-left md:text-justify">
                              {finalist.bio}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
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
