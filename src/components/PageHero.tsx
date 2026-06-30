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
 * Editorial Prestige hero used across every inner page for a cohesive feel:
 * vertical gold rule, tracked uppercase eyebrow, serif headline with italic
 * gold accents, concentric frames and an optional faded edition numeral.
 */
const PageHero = ({ eyebrow, title, subtitle, numeral, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden hero-gradient pt-16 pb-20">
      {numeral && (
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -bottom-8 left-1/2 -translate-x-1/2 font-numeral leading-none text-[26vw] md:text-[16rem] text-foreground/[0.035]"
        >
          {numeral}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative max-w-3xl mx-auto text-center">
          {/* Concentric editorial frames */}
          <div className="absolute -inset-x-10 -inset-y-10 border border-gold/10 pointer-events-none hidden lg:block" />
          <div className="absolute -inset-x-14 -inset-y-14 border border-gold/5 pointer-events-none hidden lg:block" />

          {/* Vertical gold rule */}
          <div className="mx-auto w-px h-14 bg-gradient-to-b from-transparent via-gold to-transparent mb-7 animate-fade-in" />

          {/* Eyebrow */}
          <span className="block text-gold text-[11px] tracking-[0.4em] uppercase font-semibold mb-6 animate-fade-in">
            {eyebrow}
          </span>

          {/* Headline */}
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] mb-6 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="text-muted-foreground text-lg font-light max-w-xl mx-auto leading-relaxed animate-fade-in"
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