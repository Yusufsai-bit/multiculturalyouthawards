import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

const SubscribersSection = () => {
  const qc = useQueryClient();
  const { data = [] } = useQuery({
    queryKey: ["newsletter_subscribers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("newsletter_subscribers")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const remove = async (id: string) => {
    if (!confirm("Remove this subscriber?")) return;
    const { error } = await supabase.from("newsletter_subscribers").delete().eq("id", id);
    if (error) return toast.error(error.message);
    qc.invalidateQueries({ queryKey: ["newsletter_subscribers"] });
  };

  const exportCsv = () => {
    const rows = ["email,subscribed_at", ...data.map((d: any) => `${d.email},${d.created_at}`)];
    const blob = new Blob([rows.join("\n")], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "newsletter_subscribers.csv";
    a.click();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-muted-foreground text-sm">{data.length} subscriber(s)</p>
        {data.length > 0 && <Button variant="goldOutline" size="sm" onClick={exportCsv}>Export CSV</Button>}
      </div>
      <div className="space-y-2">
        {data.map((s: any) => (
          <div key={s.id} className="glass-card rounded-lg p-3 border-gold-glow flex items-center gap-3">
            <span className="flex-1 text-foreground text-sm">{s.email}</span>
            <span className="text-xs text-muted-foreground">{new Date(s.created_at).toLocaleDateString()}</span>
            <Button variant="ghost" size="sm" onClick={() => remove(s.id)}>
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </div>
        ))}
        {data.length === 0 && <p className="text-muted-foreground text-sm">No subscribers yet.</p>}
      </div>
    </div>
  );
};

export default SubscribersSection;
