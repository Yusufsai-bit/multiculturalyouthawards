import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useCategories, useResultsByYear } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageUploader from "@/components/admin/ImageUploader";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

type TableName = "winners" | "finalists";
const blank = { name: "", bio: "", image_url: "", sort_order: 0 };

const PeopleSection = ({ yearId, table }: { yearId: string; table: TableName }) => {
  const qc = useQueryClient();
  const { data: categories = [] } = useCategories(yearId);
  const { data: results = [] } = useResultsByYear(yearId);
  const [categoryId, setCategoryId] = useState("");
  const [form, setForm] = useState<typeof blank>(blank);
  const [editId, setEditId] = useState<string | null>(null);

  const refresh = () => qc.invalidateQueries({ queryKey: ["results", yearId] });
  const reset = () => { setEditId(null); setForm(blank); };

  const rowsFor = (catId: string) =>
    results.find((r) => r.id === catId)?.[table] ?? [];

  const save = async () => {
    if (!categoryId) return toast.error("Select a category");
    if (!form.name.trim()) return toast.error("Name required");
    let error;
    if (editId) {
      ({ error } = await supabase.from(table).update(form).eq("id", editId));
    } else {
      ({ error } = await supabase.from(table).insert({ ...form, category_id: categoryId }));
    }
    if (error) return toast.error(error.message);
    refresh(); reset();
    toast.success("Saved");
  };

  const edit = (row: any, catId: string) => {
    setCategoryId(catId);
    setEditId(row.id);
    setForm({ name: row.name, bio: row.bio ?? "", image_url: row.image_url ?? "", sort_order: row.sort_order });
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this entry?")) return;
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) return toast.error(error.message);
    refresh();
  };

  const label = table === "winners" ? "Winner" : "Finalist";

  if (categories.length === 0)
    return <p className="text-muted-foreground text-sm">Add categories first before adding {table}.</p>;

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="glass-card rounded-xl p-5 border-gold-glow space-y-3 h-fit">
        <h4 className="font-semibold text-foreground">{editId ? "Edit" : "Add"} {label}</h4>
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}
          className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground">
          <option value="">Select category...</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <Input placeholder={`${label} name`} value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Textarea placeholder="Biography (optional)" rows={4} value={form.bio}
          onChange={(e) => setForm({ ...form, bio: e.target.value })} />
        <ImageUploader label="Photo (optional)" value={form.image_url}
          onChange={(url) => setForm({ ...form, image_url: url })} />
        <Input type="number" placeholder="Display order" value={form.sort_order || ""}
          onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} />
        <div className="flex gap-2">
          <Button variant="gold" onClick={save}>{editId ? "Update" : "Add"}</Button>
          {editId && <Button variant="ghost" onClick={reset}>Cancel</Button>}
        </div>
      </div>
      <div className="space-y-4">
        {results.map((cat) => {
          const rows = rowsFor(cat.id);
          if (rows.length === 0) return null;
          return (
            <div key={cat.id}>
              <h5 className="text-gold text-sm font-medium mb-1">{cat.name}</h5>
              <div className="space-y-2">
                {rows.map((row: any) => (
                  <div key={row.id} className="glass-card rounded-lg p-3 border-gold-glow flex items-center gap-2">
                    <span className="flex-1 text-foreground text-sm">{row.name}</span>
                    <Button variant="ghost" size="sm" onClick={() => edit(row, cat.id)}>Edit</Button>
                    <Button variant="ghost" size="sm" onClick={() => remove(row.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PeopleSection;
