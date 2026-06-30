import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useEvent } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const EventSection = ({ yearId }: { yearId: string }) => {
  const qc = useQueryClient();
  const { data: event } = useEvent(yearId);
  const [form, setForm] = useState({ title: "", event_date: "", event_location: "", description: "" });

  useEffect(() => {
    setForm({
      title: event?.title ?? "",
      event_date: event?.event_date ?? "",
      event_location: event?.event_location ?? "",
      description: event?.description ?? "",
    });
  }, [event]);

  const save = async () => {
    let error;
    if (event) {
      ({ error } = await supabase.from("events").update(form).eq("id", event.id));
    } else {
      ({ error } = await supabase.from("events").insert({ ...form, year_id: yearId }));
    }
    if (error) return toast.error(error.message);
    qc.invalidateQueries({ queryKey: ["event", yearId] });
    toast.success("Event details saved");
  };

  return (
    <div className="max-w-2xl space-y-4">
      <div>
        <Label>Event title</Label>
        <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="mt-1" />
      </div>
      <div>
        <Label>Event date</Label>
        <Input value={form.event_date} placeholder="Saturday, 5 October 2024"
          onChange={(e) => setForm({ ...form, event_date: e.target.value })} className="mt-1" />
      </div>
      <div>
        <Label>Location</Label>
        <Input value={form.event_location} onChange={(e) => setForm({ ...form, event_location: e.target.value })} className="mt-1" />
      </div>
      <div>
        <Label>Description</Label>
        <Textarea value={form.description} rows={4}
          onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-1" />
      </div>
      <Button variant="gold" onClick={save}>Save Event Details</Button>
    </div>
  );
};

export default EventSection;
