import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Upload } from "lucide-react";

const TEN_YEARS = 60 * 60 * 24 * 365 * 10;

interface Props {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

const ImageUploader = ({ value, onChange, label = "Image" }: Props) => {
  const [uploading, setUploading] = useState(false);

  const handleFile = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error: upErr } = await supabase.storage.from("media").upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      });
      if (upErr) throw upErr;

      const { data: signed, error: signErr } = await supabase.storage
        .from("media")
        .createSignedUrl(path, TEN_YEARS);
      if (signErr) throw signErr;

      const url = signed.signedUrl;
      onChange(url);

      await supabase.from("media_assets").insert({
        file_name: file.name,
        url,
        storage_path: path,
        alt_text: file.name,
      });

      toast.success("Image uploaded");
    } catch (err: any) {
      toast.error(err.message ?? "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="flex gap-2 mt-1">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Image URL or upload"
        />
        <Button type="button" variant="goldOutline" disabled={uploading} asChild>
          <label className="cursor-pointer">
            <Upload className="w-4 h-4" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            />
          </label>
        </Button>
      </div>
      {value && (
        <img src={value} alt="preview" className="mt-2 h-16 object-contain rounded bg-white p-1" />
      )}
    </div>
  );
};

export default ImageUploader;
