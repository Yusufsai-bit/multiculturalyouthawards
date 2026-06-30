import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Trash2, Copy, Upload } from "lucide-react";

const TEN_YEARS = 60 * 60 * 24 * 365 * 10;

const MediaSection = () => {
  const qc = useQueryClient();
  const [uploading, setUploading] = useState(false);
  const { data = [] } = useQuery({
    queryKey: ["media_assets"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("media_assets")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const refresh = () => qc.invalidateQueries({ queryKey: ["media_assets"] });

  const upload = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error: upErr } = await supabase.storage.from("media").upload(path, file);
      if (upErr) throw upErr;
      const { data: signed, error: sErr } = await supabase.storage.from("media").createSignedUrl(path, TEN_YEARS);
      if (sErr) throw sErr;
      const { error } = await supabase.from("media_assets").insert({
        file_name: file.name, url: signed.signedUrl, storage_path: path, alt_text: file.name,
      });
      if (error) throw error;
      refresh();
      toast.success("Uploaded");
    } catch (err: any) {
      toast.error(err.message ?? "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const remove = async (id: string, path: string | null) => {
    if (!confirm("Delete this file?")) return;
    if (path) await supabase.storage.from("media").remove([path]);
    const { error } = await supabase.from("media_assets").delete().eq("id", id);
    if (error) return toast.error(error.message);
    refresh();
  };

  const copy = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("URL copied");
  };

  return (
    <div>
      <Button variant="gold" disabled={uploading} asChild className="mb-6">
        <label className="cursor-pointer">
          <Upload className="w-4 h-4 mr-2" />
          {uploading ? "Uploading..." : "Upload Image"}
          <input type="file" accept="image/*" className="hidden"
            onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
        </label>
      </Button>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((m: any) => (
          <div key={m.id} className="glass-card rounded-xl p-3 border-gold-glow">
            <img src={m.url} alt={m.alt_text ?? ""} className="h-28 w-full object-contain bg-white rounded mb-2" />
            <p className="text-xs text-muted-foreground truncate mb-2">{m.file_name}</p>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" onClick={() => copy(m.url)}><Copy className="w-4 h-4" /></Button>
              <Button variant="ghost" size="sm" onClick={() => remove(m.id, m.storage_path)}>
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {data.length === 0 && <p className="text-muted-foreground text-sm">No media uploaded yet.</p>}
    </div>
  );
};

export default MediaSection;
