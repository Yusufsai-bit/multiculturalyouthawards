import { useState } from "react";
import { useYears } from "@/lib/queries";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CalendarDays, Tag, Trophy, Medal, Building2, Handshake,
  CalendarClock, Mail, Users, Image, LogOut, ExternalLink,
} from "lucide-react";
import YearsSection from "@/components/admin/sections/YearsSection";
import EventSection from "@/components/admin/sections/EventSection";
import CategoriesSection from "@/components/admin/sections/CategoriesSection";
import PeopleSection from "@/components/admin/sections/PeopleSection";
import OrgSection from "@/components/admin/sections/OrgSection";
import SubmissionsSection from "@/components/admin/sections/SubmissionsSection";
import SubscribersSection from "@/components/admin/sections/SubscribersSection";
import MediaSection from "@/components/admin/sections/MediaSection";

type Tab =
  | "years" | "event" | "categories" | "winners" | "finalists"
  | "sponsors" | "partners" | "media" | "submissions" | "subscribers";

const yearTabs: Tab[] = ["event", "categories", "winners", "finalists"];

type NavItem = { id: Tab; label: string; icon: React.ElementType };
type NavGroup = { page: string; description: string; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    page: "Home Page",
    description: "Award year and event info shown on the homepage",
    items: [
      { id: "years", label: "Award Years", icon: CalendarDays },
      { id: "event", label: "Event Details", icon: CalendarClock },
    ],
  },
  {
    page: "Winners Page",
    description: "Categories, winners and finalists for each year",
    items: [
      { id: "categories", label: "Categories", icon: Tag },
      { id: "winners", label: "Winners", icon: Trophy },
      { id: "finalists", label: "Finalists", icon: Medal },
    ],
  },
  {
    page: "Partners Page",
    description: "Sponsors and partner organisations",
    items: [
      { id: "sponsors", label: "Sponsors", icon: Building2 },
      { id: "partners", label: "Partners", icon: Handshake },
    ],
  },
  {
    page: "Contact Page",
    description: "Messages and newsletter subscribers",
    items: [
      { id: "submissions", label: "Contact Messages", icon: Mail },
      { id: "subscribers", label: "Subscribers", icon: Users },
    ],
  },
  {
    page: "Shared",
    description: "Images and files used across the site",
    items: [
      { id: "media", label: "Media Library", icon: Image },
    ],
  },
];

const allNavItems: NavItem[] = navGroups.flatMap((g) => g.items);

const AdminDashboard = () => {
  const { signOut } = useAuth();
  const { data: years = [] } = useYears();
  const [tab, setTab] = useState<Tab>("years");
  const [yearId, setYearId] = useState<string>("");

  const selectedYear = years.find((y) => y.id === yearId) ?? years[0];
  const effectiveYearId = yearId || selectedYear?.id || "";

  const needsYear = yearTabs.includes(tab);

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="lg:w-72 border-b lg:border-b-0 lg:border-r border-border p-4 lg:min-h-screen">
        <h1 className="font-display text-lg font-bold text-gold mb-1">MYA Admin</h1>
        <p className="text-xs text-muted-foreground mb-6">Content management</p>
        <nav className="flex flex-col gap-5">
          {navGroups.map((group) => (
            <div key={group.page}>
              <p className="px-3 mb-1 text-[11px] font-semibold uppercase tracking-wider text-gold/80">
                {group.page}
              </p>
              <p className="px-3 mb-2 text-[11px] text-muted-foreground leading-snug">
                {group.description}
              </p>
              <div className="flex flex-col gap-1">
                {group.items.map((n) => (
                  <button key={n.id} onClick={() => setTab(n.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                      tab === n.id ? "bg-gold/15 text-gold" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}>
                    <n.icon className="w-4 h-4 shrink-0" /> {n.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="mt-6 space-y-2">
          <Button variant="goldOutline" size="sm" className="w-full" asChild>
            <Link to="/" target="_blank"><ExternalLink className="w-4 h-4 mr-2" />View Site</Link>
          </Button>
          <Button variant="ghost" size="sm" className="w-full" onClick={signOut}>
            <LogOut className="w-4 h-4 mr-2" />Sign Out
          </Button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 lg:p-10">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h2 className="font-display text-2xl font-bold text-foreground capitalize">
            {allNavItems.find((n) => n.id === tab)?.label}
          </h2>
          {needsYear && (
            <select value={effectiveYearId} onChange={(e) => setYearId(e.target.value)}
              className="bg-background border border-border rounded px-3 py-2 text-sm text-foreground">
              {years.map((y) => <option key={y.id} value={y.id}>{y.year}{y.is_current ? " (current)" : ""}</option>)}
            </select>
          )}
        </div>

        {tab === "years" && <YearsSection onSelectYear={(id) => { setYearId(id); setTab("event"); }} />}
        {needsYear && !effectiveYearId && <p className="text-muted-foreground">Create an award year first.</p>}
        {tab === "event" && effectiveYearId && <EventSection yearId={effectiveYearId} />}
        {tab === "categories" && effectiveYearId && <CategoriesSection yearId={effectiveYearId} />}
        {tab === "winners" && effectiveYearId && <PeopleSection yearId={effectiveYearId} table="winners" />}
        {tab === "finalists" && effectiveYearId && <PeopleSection yearId={effectiveYearId} table="finalists" />}
        {tab === "sponsors" && <OrgSection mode="sponsors" />}
        {tab === "partners" && <OrgSection mode="partners" />}
        {tab === "media" && <MediaSection />}
        {tab === "submissions" && <SubmissionsSection />}
        {tab === "subscribers" && <SubscribersSection />}
      </main>
    </div>
  );
};

export default AdminDashboard;
