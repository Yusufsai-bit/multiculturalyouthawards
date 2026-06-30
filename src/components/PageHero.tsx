import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  /** Large faded background numeral, e.g. an edition year */
  numeral?: string;
  children?: ReactNode;
}

/**
 * Navy hero band matching the live site: a deep navy field with a tracked gold
 * eyebrow, a large bold uppercase Anton headline (white with gold accents) and
 * an optional faded edition numeral. Used across every inner page for cohesion.
 */
const PageHero = ({ eyebrow, title, subtitle, numeral, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-navy pt-40 pb-20">
      {numeral && (
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-x-0 -bottom-10 text-center font-numeral leading-none text-[24vw] md:text-[15rem] text-background/[0.04]"
        >
          {numeral}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <span className="block text-gold text-[11px] tracking-[0.4em] uppercase font-semibold mb-6 animate-fade-in">
            {eyebrow}
          </span>

          {/* Headline */}
          <h1
            className="font-numeral uppercase text-background text-5xl md:text-7xl lg:text-8xl leading-[0.95] animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="text-background/70 text-lg font-light max-w-2xl mx-auto leading-relaxed mt-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              {subtitle}
            </p>
          )}

          {children && (
            <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.45s" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;