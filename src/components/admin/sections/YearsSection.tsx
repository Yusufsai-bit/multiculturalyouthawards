import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useYears } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Trash2, Star } from "lucide-react";

const STATUSES = ["open", "closed", "coming_soon"] as const;

const YearsSection = ({ onSelectYear }: { onSelectYear: (id: string) => void }) => {
  const qc = useQueryClient();
  const { data: years = [] } = useYears();
  const [newYear, setNewYear] = useState("");

  const refresh = () => {
    qc.invalidateQueries({ queryKey: ["award_years"] });
    qc.invalidateQueries({ queryKey: ["current_year"] });
  };

  const addYear = async () => {
    const y = parseInt(newYear);
    if (!y) return toast.error("Enter a valid year");
    const { error } = await supabase.from("award_years").insert({ year: y, nominations_status: "coming_soon" });
    if (error) return toast.error(error.message);
    setNewYear("");
    refresh();
    toast.success(`Year ${y} added`);
  };

  const setCurrent = async (id: string) => {
    await supabase.from("award_years").update({ is_current: false }).neq("id", id);
    const { error } = await supabase.from("award_years").update({ is_current: true }).eq("id", id);
    if (error) return toast.error(error.message);
    refresh();
    toast.success("Current year updated");
  };

  const setStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("award_years").update({ nominations_status: status }).eq("id", id);
    if (error) return toast.error(error.message);
    refresh();
  };

  const remove = async (id: string, year: number) => {
    if (!confirm(`Delete year ${year} and all its categories, winners and finalists?`)) return;
    const { error } = await supabase.from("award_years").delete().eq("id", id);
    if (error) return toast.error(error.message);
    refresh();
    toast.success("Year deleted");
  };

  return (
    <div>
      <div className="flex gap-2 mb-6">
        <Input type="number" placeholder="e.g. 2027" value={newYear}
          onChange={(e) => setNewYear(e.target.value)} className="max-w-[160px]" />
        <Button variant="gold" onClick={addYear}>Add Year</Button>
      </div>
      <div className="space-y-3">
        {years.map((y) => (
          <div key={y.id} className="glass-card rounded-xl p-4 border-gold-glow flex flex-wrap items-center gap-3">
            <span className="font-display text-xl font-bold text-foreground">{y.year}</span>
            {y.is_current && <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded">Current</span>}
            <div className="flex-1" />
            <select
              value={y.nominations_status}
              onChange={(e) => setStatus(y.id, e.target.value)}
              className="bg-background border border-border rounded px-3 py-2 text-sm text-foreground"
            >
              {STATUSES.map((s) => <option key={s} value={s}>Nominations: {s.replace("_", " ")}</option>)}
            </select>
            <Button variant="goldOutline" size="sm" onClick={() => onSelectYear(y.id)}>Manage content</Button>
            {!y.is_current && (
              <Button variant="ghost" size="sm" onClick={() => setCurrent(y.id)} title="Set as current year">
                <Star className="w-4 h-4" />
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={() => remove(y.id, y.year)}>
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearsSection;
