import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && user && isAdmin) navigate("/admin", { replace: true });
  }, [user, isAdmin, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        toast.success("Account created. Signing you in...");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      // small delay to allow role check
      setTimeout(() => navigate("/admin", { replace: true }), 400);
    } catch (err: any) {
      toast.error(err.message ?? "Authentication failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md glass-card rounded-2xl p-8 border-gold-glow">
        <h1 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
          Admin {mode === "signin" ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-muted-foreground text-sm text-center mb-6">
          Multicultural Youth Awards content management
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} required
              onChange={(e) => setEmail(e.target.value)} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} required minLength={6}
              onChange={(e) => setPassword(e.target.value)} className="mt-1" />
          </div>
          <Button type="submit" variant="gold" className="w-full" disabled={busy}>
            {busy ? "Please wait..." : mode === "signin" ? "Sign In" : "Create Account"}
          </Button>
        </form>
        <button
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="text-muted-foreground hover:text-gold text-sm mt-4 w-full text-center transition-colors"
        >
          {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
