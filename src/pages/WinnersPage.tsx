import { useState, useEffect } from "react";
import {
  Trophy, Lightbulb, Medal, HeartHandshake, GraduationCap, Palette,
  Feather, Award, Wrench, Users, Mountain, Megaphone, Heart,
  type LucideIcon,
} from "lucide-react";
import { useYears, useResultsByYear } from "@/lib/queries";
import PageHero from "@/components/PageHero";
import { siteContent } from "@/lib/siteContent";

// Custom gold icons supplied for each award category. Matched on keywords so
// they work for every year regardless of exact naming.
import iconIdea from "@/assets/category-icons/idea-innovation.png.asset.json";
import iconArts from "@/assets/category-icons/performing-arts.png.asset.json";
import iconSports from "@/assets/category-icons/sports.png.asset.json";
import iconCommunity from "@/assets/category-icons/community-heart.png.asset.json";
import iconAcademic from "@/assets/category-icons/academic.png.asset.json";
import iconAboriginal from "@/assets/category-icons/aboriginal-boomerang.png.asset.json";
import iconVocational from "@/assets/category-icons/vocational-skills.png.asset.json";
import iconInfluencer from "@/assets/category-icons/influencer-people.png.asset.json";
import iconLeadership from "@/assets/category-icons/leadership-steps.png.asset.json";
import iconVolunteer from "@/assets/category-icons/volunteer-hands.png.asset.json";
import iconInspirational from "@/assets/category-icons/inspirational-perseverance.png.asset.json";
import iconYoungWoman from "@/assets/category-icons/young-woman-voice.png.asset.json";
import iconMinister from "@/assets/category-icons/minister-laurel.png.asset.json";
import qrMougadam from "@/assets/winner-qr-2026/mougadam-and-mobeen-mougadam.png";
import qrQiqiLu from "@/assets/winner-qr-2026/qiqi-lu.png";
import qrJaydenNguyen from "@/assets/winner-qr-2026/jayden-nguyen.png";
import qrDanishRizal from "@/assets/winner-qr-2026/danish-rizal.png";
import qrVeronicaTan from "@/assets/winner-qr-2026/veronica-tan.png";
import qrNicholasStefanadakis from "@/assets/winner-qr-2026/nicholas-stefanadakis.png";
import qrRumaysaSalman from "@/assets/winner-qr-2026/rumaysa-salman.png";
import qrAdrielAppathurai from "@/assets/winner-qr-2026/adriel-appathurai.png";
import qrMahsaNabizada from "@/assets/winner-qr-2026/mahsa-nabizada.png";
import qrAmeyaJaurigue from "@/assets/winner-qr-2026/ameya-jaurigue.png";
import qrLadanAhmed from "@/assets/winner-qr-2026/ladan-ahmed.png";

const winnerQrCodes: Record<string, { image: string; url: string }> = {
  "mougadam and mobeen mougadam": {
    image: qrMougadam,
    url: "https://www.instagram.com/duxacademy/",
  },
  "qiqi lu": {
    image: qrQiqiLu,
    url: "https://www.instagram.com/qiqimusic_/",
  },
  "jayden nguyen": {
    image: qrJaydenNguyen,
    url: "https://www.instagram.com/jayden_nguy3n/?hl=en",
  },
  "danish rizal": {
    image: qrDanishRizal,
    url: "https://www.instagram.com/danish.rizal/",
  },
  "veronica tan": {
    image: qrVeronicaTan,
    url: "https://www.linkedin.com/in/tan-veronica/",
  },
  "nicholas stefanadakis": {
    image: qrNicholasStefanadakis,
    url: "https://www.instagram.com/southmelbournefc/",
  },
  "rumaysa salman": {
    image: qrRumaysaSalman,
    url: "https://www.instagram.com/rumaysasalman/",
  },
  "adriel appathurai": {
    image: qrAdrielAppathurai,
    url: "https://www.linkedin.com/in/adrielappa/",
  },
  "mahsa nabizada": {
    image: qrMahsaNabizada,
    url: "https://www.linkedin.com/in/mahsanabizada/",
  },
  "ameya jaurigue": {
    image: qrAmeyaJaurigue,
    url: "https://www.instagram.com/keeping.brisbane.alive/",
  },
  "ladan ahmed": {
    image: qrLadanAhmed,
    url: "https://www.linkedin.com/in/ladan-ahmed-369113381/",
  },
};

/** Custom uploaded icon per category, matched on keywords. Returns the image
 *  URL when one has been supplied, otherwise null (falls back to a lucide icon). */
const categoryImage = (name: string): string | null => {
  const n = name.toLowerCase();
  if (n.includes("entrepreneur")) return iconIdea.url;
  if (n.includes("creative") || n.includes("performing")) return iconArts.url;
  if (n.includes("sports")) return iconSports.url;
  if (n.includes("community") || n.includes("contribution")) return iconCommunity.url;
  if (n.includes("academic")) return iconAcademic.url;
  if (n.includes("aboriginal") || n.includes("indigenous")) return iconAboriginal.url;
  if (n.includes("apprentice") || n.includes("vocational")) return iconVocational.url;
  if (n.includes("influencer")) return iconInfluencer.url;
  if (n.includes("inspirational")) return iconInspirational.url;
  if (n.includes("woman")) return iconYoungWoman.url;
  if (n.includes("minister")) return iconMinister.url;
  if (n.includes("leader")) return iconLeadership.url;
  if (n.includes("volunteer")) return iconVolunteer.url;
  return null;
};

/** Icon per award category, matched on keywords so it works for every year. */
const categoryIcon = (name: string): LucideIcon => {
  const n = name.toLowerCase();
  if (n.includes("entrepreneur")) return Lightbulb;
  if (n.includes("sports")) return Medal;
  if (n.includes("community")) return HeartHandshake;
  if (n.includes("academic")) return GraduationCap;
  if (n.includes("creative") || n.includes("performing")) return Palette;
  if (n.includes("aboriginal") || n.includes("indigenous")) return Feather;
  if (n.includes("minister")) return Award;
  if (n.includes("apprentice") || n.includes("vocational")) return Wrench;
  if (n.includes("woman")) return Users;
  if (n.includes("leader")) return Mountain;
  if (n.includes("influencer")) return Megaphone;
  if (n.includes("volunteer")) return Heart;
  return Trophy;
};

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

  // Show 2024, 2025 and 2026 in the selector, oldest first (left).
  const displayYears = years
    .filter((y) => y.year === 2024 || y.year === 2025 || y.year === 2026)
    .sort((a, b) => a.year - b.year);

  useEffect(() => {
    if (!yearId && displayYears.length) {
      const defaultYear =
        displayYears.find((y) => y.year === 2026) ?? displayYears[displayYears.length - 1];
      setYearId(defaultYear.id);
    }
  }, [displayYears, yearId]);

  const { data: results = [], isLoading } = useResultsByYear(yearId);
  const selectedYear = years.find((y) => y.id === yearId);
  const dbCategories = results.filter((c) => c.winners.length > 0);

  // Fallback: when the database has no published results for the selected
  // year, render that year's cohort from siteContent (2024 and 2025 are
  // available). Database results always take precedence once published.
  const fallbackByYear: Record<number, Record<string, { name: string; bio: string; finalists: { name: string; bio?: string }[] }>> = {
    2024: siteContent.winners2024,
    2025: siteContent.winners2025,
  };
  const fallbackSource =
    selectedYear && fallbackByYear[selectedYear.year]
      ? fallbackByYear[selectedYear.year]
      : null;
  const useFallback = !isLoading && dbCategories.length === 0 && !!fallbackSource;
  const fallbackCategories: DisplayCategory[] = useFallback && fallbackSource
    ? Object.entries(fallbackSource).map(([categoryName, w], i) => {
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
        {displayYears.length > 0 && (
          <div className="flex flex-col items-center gap-6">
            <span className="text-base font-semibold tracking-[0.3em] uppercase text-gold">
              Select Year
            </span>
            <div
              role="group"
              aria-label="Select awards year"
              className="flex items-center gap-2 p-3 rounded-full border border-background/10 bg-background/5 backdrop-blur-xl shadow-2xl"
            >
              {displayYears.map((y) => {
                const active = y.id === yearId;
                return (
                  <button
                    key={y.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setYearId(y.id)}
                    className={
                      active
                        ? "px-10 sm:px-12 py-4 rounded-full font-sans text-lg font-bold bg-gold text-navy shadow-[0_0_32px_hsl(var(--gold)/0.45)] transition-transform active:scale-95"
                        : "px-10 sm:px-12 py-4 rounded-full font-sans text-lg font-semibold text-background/50 hover:text-background transition-colors"
                    }
                  >
                    {y.year}
                  </button>
                );
              })}
            </div>
          </div>
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
                <h2 className="font-display font-extrabold uppercase text-2xl text-foreground mb-3">
                  Winners {selectedYear ? selectedYear.year : ""} to be announced
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Results for {selectedYear?.year} are not currently available. Please check back for updates.
                </p>
              </div>
            )}

            <div className="space-y-24">
              {categories.map((category) => (
                <article key={category.id}>
                  {/* Category header — booklet style (icon + big title, matching printed guide) */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 mb-6">
                    {(() => {
                      const img = categoryImage(category.name);
                      if (img) {
                        return (
                          <img
                            src={img}
                            alt=""
                            aria-hidden="true"
                            className="w-32 h-32 md:w-40 md:h-40 object-contain shrink-0"
                          />
                        );
                      }
                      const Icon = categoryIcon(category.name);
                      return <Icon aria-hidden="true" className="w-28 h-28 md:w-36 md:h-36 text-gold shrink-0" strokeWidth={1.25} />;
                    })()}
                    {(() => {
                      // Strip a trailing "award" from the stored name so we can
                      // render it as a separate lighter-weight line, matching the
                      // printed booklet ("YOUNG LEADER OF THE YEAR" + "AWARD").
                      const base = category.name.replace(/\s*award\s*$/i, "").trim();
                      return (
                        <h2 className="font-display text-gold uppercase leading-[0.9] tracking-tight">
                          <span className="block text-4xl md:text-6xl font-extrabold">
                            {base}
                          </span>
                          <span className="block text-3xl md:text-5xl font-light">
                            Award
                          </span>
                        </h2>
                      );
                    })()}
                  </div>
                  {category.description && (
                    <p className="text-navy text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
                      {category.description}
                    </p>
                  )}

                  {/* Winner / Finalist columns */}
                  <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                    {/* Winner column */}
                    <div>
                      <p className="font-sans font-bold text-navy uppercase tracking-[0.15em] text-lg mb-4">
                        Winner
                      </p>
                      {category.winners.map((winner) => {
                        const qrCode = selectedYear?.year === 2026
                          ? winnerQrCodes[winner.name.toLowerCase().trim()]
                          : undefined;

                        return (
                        <div key={winner.id} className="mb-8 last:mb-0">
                          {winner.image_url && (
                            <img
                              src={winner.image_url}
                              alt={winner.name}
                              loading="lazy"
                              width={96}
                              height={96}
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
                          {qrCode && (
                            <a
                              href={qrCode.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-6 inline-flex items-center gap-4 border border-border p-3 transition-colors hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                              aria-label={`Connect with ${winner.name}`}
                            >
                              <img
                                src={qrCode.image}
                                alt={`QR code to connect with ${winner.name}`}
                                className="h-24 w-24 shrink-0 object-contain"
                              />
                              <span className="max-w-24 font-sans text-xs font-semibold uppercase leading-snug text-navy">
                                Connect with {winner.name}
                              </span>
                            </a>
                          )}
                        </div>
                        );
                      })}
                    </div>

                    {/* Finalist column */}
                    {category.finalists.length > 0 && (
                      <div>
                        <p className="font-sans font-bold text-navy uppercase tracking-[0.15em] text-lg mb-4">
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
