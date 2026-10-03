import { useState, ReactNode, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const USER = "multiculturalyouthawards";
const PASS = "MYA2026";
const KEY = "mya-seating-ok";

const SeatingGate = ({ children }: { children: ReactNode }) => {
  const [ok, setOk] = useState(() => sessionStorage.getItem(KEY) === "1");
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState(false);

  if (ok) return <>{children}</>;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (u.trim().toLowerCase() === USER && p === PASS) {
      sessionStorage.setItem(KEY, "1");
      setOk(true);
    } else setErr(true);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-sm space-y-4 border border-border rounded-lg p-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Seating Plan</h1>
        <p className="text-sm text-muted-foreground">Please sign in to view the MYA 2026 seating plan.</p>
        <Input placeholder="Username" value={u} onChange={(e) => setU(e.target.value)} autoComplete="username" />
        <Input placeholder="Password" type="password" value={p} onChange={(e) => setP(e.target.value)} autoComplete="current-password" />
        {err && <p className="text-sm text-destructive">Incorrect username or password.</p>}
        <Button type="submit" variant="gold" className="w-full">Sign in</Button>
      </form>
    </div>
  );
};

export default SeatingGate;
