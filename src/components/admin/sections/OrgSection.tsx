import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSponsors, usePartners } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ImageUploader from "@/components/admin/ImageUploader";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

type Mode = "sponsors" | "partners";
const blank = { name: "", logo_url: "", url: "", tier: "major_partner", sort_order: 0 };

const OrgSection = ({ mode }: { mode: Mode }) => {
  const qc = useQueryClient();
  const sponsors = useSponsors();
  const partners = usePartners();
  const list = mode === "sponsors" ? sponsors.data ?? [] : partners.data ?? [];
  const [form, setForm] = useState<typeof blank>(blank);
  const [editId, setEditId] = useState<string | null>(null);

  const refresh = () => qc.invalidateQueries({ queryKey: [mode] });
  const reset = () => { setEditId(null); setForm(blank); };

  const save = async () => {
    if (!form.name.trim()) return toast.error("Name required");
    const payload: any = { name: form.name, logo_url: form.logo_url, url: form.url, sort_order: form.sort_order || list.length + 1 };
    if (mode === "partners") payload.tier = form.tier;
    let error;
    if (editId) {
      ({ error } = await supabase.from(mode).update(payload).eq("id", editId));
    } else {
      ({ error } = await supabase.from(mode).insert(payload));
    }
    if (error) return toast.error(error.message);
    refresh(); reset();
    toast.success("Saved");
  };

  const edit = (o: any) => {
    setEditId(o.id);
    setForm({ name: o.name, logo_url: o.logo_url ?? "", url: o.url ?? "", tier: o.tier ?? "major_partner", sort_order: o.sort_order });
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this entry?")) return;
    const { error } = await supabase.from(mode).delete().eq("id", id);
    if (error) return toast.error(error.message);
    refresh();
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="glass-card rounded-xl p-5 border-gold-glow space-y-3 h-fit">
        <h4 className="font-semibold text-foreground">{editId ? "Edit" : "Add"} {mode === "sponsors" ? "Sponsor" : "Partner"}</h4>
        <Input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        {mode === "partners" && (
          <select value={form.tier} onChange={(e) => setForm({ ...form, tier: e.target.value })}
            className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground">
            <option value="major_partner">Major Partner</option>
            <option value="supporter">Supporter</option>
          </select>
        )}
        <ImageUploader label="Logo" value={form.logo_url} onChange={(url) => setForm({ ...form, logo_url: url })} />
        <Input placeholder="Website URL" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} />
        <Input type="number" placeholder="Display order" value={form.sort_order || ""}
          onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} />
        <div className="flex gap-2">
          <Button variant="gold" onClick={save}>{editId ? "Update" : "Add"}</Button>
          {editId && <Button variant="ghost" onClick={reset}>Cancel</Button>}
        </div>
      </div>
      <div className="space-y-2">
        {list.map((o: any) => (
          <div key={o.id} className="glass-card rounded-lg p-3 border-gold-glow flex items-center gap-3">
            {o.logo_url && <img src={o.logo_url} alt={o.name} className="h-8 w-12 object-contain bg-white rounded p-0.5" />}
            <span className="flex-1 text-foreground text-sm">{o.name}</span>
            {mode === "partners" && <span className="text-xs text-muted-foreground">{o.tier === "major_partner" ? "Major" : "Supporter"}</span>}
            <Button variant="ghost" size="sm" onClick={() => edit(o)}>Edit</Button>
            <Button variant="ghost" size="sm" onClick={() => remove(o.id)}>
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrgSection;
