import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type AwardYear = {
  id: string;
  year: number;
  is_current: boolean;
  nominations_status: "open" | "closed" | "coming_soon";
};

export type AwardEvent = {
  id: string;
  year_id: string;
  title: string | null;
  event_date: string | null;
  event_location: string | null;
  description: string | null;
};

export type Category = {
  id: string;
  year_id: string;
  name: string;
  description: string | null;
  sort_order: number;
};

export type Winner = {
  id: string;
  category_id: string;
  name: string;
  bio: string | null;
  image_url: string | null;
  sort_order: number;
};

export type Finalist = {
  id: string;
  category_id: string;
  name: string;
  bio: string | null;
  image_url: string | null;
  sort_order: number;
};

export type Sponsor = {
  id: string;
  name: string;
  logo_url: string | null;
  url: string | null;
  sort_order: number;
  year_id: string | null;
};

export type Partner = {
  id: string;
  name: string;
  logo_url: string | null;
  url: string | null;
  tier: string;
  sort_order: number;
  year_id: string | null;
};

// ---------- Years ----------
export const useYears = () =>
  useQuery({
    queryKey: ["award_years"],
    queryFn: async (): Promise<AwardYear[]> => {
      const { data, error } = await supabase
        .from("award_years")
        .select("id, year, is_current, nominations_status")
        .order("year", { ascending: false });
      if (error) throw error;
      return (data ?? []) as AwardYear[];
    },
  });

export const useCurrentYear = () =>
  useQuery({
    queryKey: ["current_year"],
    queryFn: async (): Promise<AwardYear | null> => {
      const { data, error } = await supabase
        .from("award_years")
        .select("id, year, is_current, nominations_status")
        .order("is_current", { ascending: false })
        .order("year", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (error) throw error;
      return (data as AwardYear) ?? null;
    },
  });

// ---------- Event ----------
export const useEvent = (yearId?: string) =>
  useQuery({
    queryKey: ["event", yearId],
    enabled: !!yearId,
    queryFn: async (): Promise<AwardEvent | null> => {
      const { data, error } = await supabase
        .from("events")
        .select("id, year_id, title, event_date, event_location, description")
        .eq("year_id", yearId!)
        .maybeSingle();
      if (error) throw error;
      return (data as AwardEvent) ?? null;
    },
  });

// ---------- Categories ----------
export const useCategories = (yearId?: string) =>
  useQuery({
    queryKey: ["categories", yearId],
    enabled: !!yearId,
    queryFn: async (): Promise<Category[]> => {
      const { data, error } = await supabase
        .from("award_categories")
        .select("id, year_id, name, description, sort_order")
        .eq("year_id", yearId!)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return (data ?? []) as Category[];
    },
  });

// ---------- Winners + finalists grouped by category for a year ----------
export type CategoryWithResults = Category & {
  winners: Winner[];
  finalists: Finalist[];
};

export const useResultsByYear = (yearId?: string) =>
  useQuery({
    queryKey: ["results", yearId],
    enabled: !!yearId,
    queryFn: async (): Promise<CategoryWithResults[]> => {
      const { data: cats, error: cErr } = await supabase
        .from("award_categories")
        .select("id, year_id, name, description, sort_order")
        .eq("year_id", yearId!)
        .order("sort_order", { ascending: true });
      if (cErr) throw cErr;
      const categories = (cats ?? []) as Category[];
      const ids = categories.map((c) => c.id);
      if (ids.length === 0) return [];

      const [{ data: winners, error: wErr }, { data: finalists, error: fErr }] =
        await Promise.all([
          supabase
            .from("winners")
            .select("id, category_id, name, bio, image_url, sort_order")
            .in("category_id", ids)
            .order("sort_order", { ascending: true }),
          supabase
            .from("finalists")
            .select("id, category_id, name, bio, image_url, sort_order")
            .in("category_id", ids)
            .order("sort_order", { ascending: true }),
        ]);
      if (wErr) throw wErr;
      if (fErr) throw fErr;

      return categories.map((c) => ({
        ...c,
        winners: ((winners ?? []) as Winner[]).filter((w) => w.category_id === c.id),
        finalists: ((finalists ?? []) as Finalist[]).filter((f) => f.category_id === c.id),
      }));
    },
  });

// ---------- Sponsors ----------
export const useSponsors = () =>
  useQuery({
    queryKey: ["sponsors"],
    queryFn: async (): Promise<Sponsor[]> => {
      const { data, error } = await supabase
        .from("sponsors")
        .select("id, name, logo_url, url, sort_order, year_id")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return (data ?? []) as Sponsor[];
    },
  });

// ---------- Partners ----------
export const usePartners = () =>
  useQuery({
    queryKey: ["partners"],
    queryFn: async (): Promise<Partner[]> => {
      const { data, error } = await supabase
        .from("partners")
        .select("id, name, logo_url, url, tier, sort_order, year_id")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return (data ?? []) as Partner[];
    },
  });
