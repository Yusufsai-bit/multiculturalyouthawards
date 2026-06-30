import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  align?: "center" | "left";
  className?: string;
}

/** Editorial section heading: vertical gold rule, tracked eyebrow, serif title. */
const SectionHeading = ({ eyebrow, title, align = "center", className = "" }: SectionHeadingProps) => {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : "text-left"} ${className}`}>
      <div
        className={`w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent mb-5 ${
          centered ? "mx-auto" : ""
        }`}
      />
      {eyebrow && (
        <span className="block text-gold text-[11px] tracking-[0.4em] uppercase font-semibold mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-normal leading-tight text-foreground">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;