import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useCategories, Category } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

const blank = { name: "", description: "", sort_order: 0 };

const CategoriesSection = ({ yearId }: { yearId: string }) => {
  const qc = useQueryClient();
  const { data: categories = [] } = useCategories(yearId);
  const [form, setForm] = useState<typeof blank>(blank);
  const [editId, setEditId] = useState<string | null>(null);

  const refresh = () => {
    qc.invalidateQueries({ queryKey: ["categories", yearId] });
    qc.invalidateQueries({ queryKey: ["results", yearId] });
  };

  const edit = (c: Category) => {
    setEditId(c.id);
    setForm({ name: c.name, description: c.description ?? "", sort_order: c.sort_order });
  };

  const reset = () => { setEditId(null); setForm(blank); };

  const save = async () => {
    if (!form.name.trim()) return toast.error("Name required");
    let error;
    if (editId) {
      ({ error } = await supabase.from("award_categories").update(form).eq("id", editId));
    } else {
      const order = form.sort_order || categories.length + 1;
      ({ error } = await supabase.from("award_categories").insert({ ...form, sort_order: order, year_id: yearId }));
    }
    if (error) return toast.error(error.message);
    refresh(); reset();
    toast.success("Category saved");
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this category and its winners/finalists?")) return;
    const { error } = await supabase.from("award_categories").delete().eq("id", id);
    if (error) return toast.error(error.message);
    refresh();
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="glass-card rounded-xl p-5 border-gold-glow space-y-3 h-fit">
        <h4 className="font-semibold text-foreground">{editId ? "Edit" : "Add"} Category</h4>
        <Input placeholder="Category name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Textarea placeholder="Description" rows={3} value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <Input type="number" placeholder="Display order" value={form.sort_order || ""}
          onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} />
        <div className="flex gap-2">
          <Button variant="gold" onClick={save}>{editId ? "Update" : "Add"}</Button>
          {editId && <Button variant="ghost" onClick={reset}>Cancel</Button>}
        </div>
      </div>
      <div className="space-y-2">
        {categories.map((c) => (
          <div key={c.id} className="glass-card rounded-lg p-3 border-gold-glow flex items-center gap-2">
            <span className="text-gold text-sm w-6">{c.sort_order}</span>
            <span className="flex-1 text-foreground text-sm">{c.name}</span>
            <Button variant="ghost" size="sm" onClick={() => edit(c)}>Edit</Button>
            <Button variant="ghost" size="sm" onClick={() => remove(c.id)}>
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </div>
        ))}
        {categories.length === 0 && <p className="text-muted-foreground text-sm">No categories yet.</p>}
      </div>
    </div>
  );
};

export default CategoriesSection;
