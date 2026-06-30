import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Trash2, Mail, MailOpen } from "lucide-react";

const SubmissionsSection = () => {
  const qc = useQueryClient();
  const { data = [] } = useQuery({
    queryKey: ["contact_submissions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const refresh = () => qc.invalidateQueries({ queryKey: ["contact_submissions"] });

  const toggleRead = async (id: string, isRead: boolean) => {
    await supabase.from("contact_submissions").update({ is_read: !isRead }).eq("id", id);
    refresh();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this submission?")) return;
    const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
    if (error) return toast.error(error.message);
    refresh();
  };

  return (
    <div className="space-y-3">
      {data.length === 0 && <p className="text-muted-foreground text-sm">No submissions yet.</p>}
      {data.map((s: any) => (
        <div key={s.id} className={`glass-card rounded-xl p-4 border-gold-glow ${s.is_read ? "opacity-70" : ""}`}>
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-foreground">{s.name}</span>
                <a href={`mailto:${s.email}`} className="text-gold text-sm">{s.email}</a>
                {s.phone && <span className="text-muted-foreground text-sm">{s.phone}</span>}
                {!s.is_read && <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded">New</span>}
              </div>
              {s.subject && <p className="text-sm font-medium text-foreground mt-1">{s.subject}</p>}
              <p className="text-muted-foreground text-sm mt-1 whitespace-pre-wrap">{s.message}</p>
              <p className="text-xs text-muted-foreground mt-2">{new Date(s.created_at).toLocaleString()}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => toggleRead(s.id, s.is_read)}>
              {s.is_read ? <MailOpen className="w-4 h-4" /> : <Mail className="w-4 h-4 text-gold" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => remove(s.id)}>
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubmissionsSection;
