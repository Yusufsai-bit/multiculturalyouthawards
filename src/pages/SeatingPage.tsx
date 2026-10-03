import { useEffect } from "react";
import { Link } from "react-router-dom";
import seatingHtml from "@/private/seating.html?raw";

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
        <span className="font-semibold text-foreground">MYA 2026 Seating Plan — staff only</span>
        <Link to="/admin" className="text-gold hover:underline">Back to admin</Link>
      </div>
      <iframe title="Seating plan" srcDoc={seatingHtml} className="flex-1 w-full border-0" />
    </div>
  );
};

export default SeatingPage;
