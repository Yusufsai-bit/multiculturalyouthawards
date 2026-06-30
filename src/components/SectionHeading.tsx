import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  align?: "center" | "left";
  className?: string;
}

/** Section heading matching the live site: tracked gold eyebrow + bold uppercase Anton title. */
const SectionHeading = ({ eyebrow, title, align = "center", className = "" }: SectionHeadingProps) => {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <span className="block text-gold text-[11px] tracking-[0.4em] uppercase font-semibold mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-numeral uppercase text-3xl md:text-5xl leading-[0.95] text-foreground">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;