import { useEffect } from "react";
import { Link } from "react-router-dom";
import seatingHtml from "@/private/seating.html?raw";

// Keep in-page anchor links (#table-N) inside the iframe instead of
// resolving against the parent page URL (which reloads the app in the frame).
const seatingDoc = seatingHtml.replace(
  '<meta charset="utf-8"/>',
  '<meta charset="utf-8"/><base href="about:srcdoc"/>'
);

const SeatingPage = () => {
  useEffect(() => {
    document.title = "MYA 2026 Seating Plan (Private)";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <div className="h-screen flex flex-col bg-background">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border text-sm">
        <span className="font-semibold text-foreground">MYA 2026 Seating Plan — private</span>
        <span />
      </div>
      <iframe title="Seating plan" srcDoc={seatingDoc} className="flex-1 w-full border-0" />
    </div>
  );
};

export default SeatingPage;
