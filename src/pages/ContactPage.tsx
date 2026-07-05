import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import { siteContent } from "@/lib/siteContent";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    contactNo: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from("contact_submissions").insert({
      name: form.firstName,
      email: form.email,
      subject: form.contactNo ? `Contact No: ${form.contactNo}` : "General enquiry",
      message: form.message,
    });

    setIsSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
    setForm({ firstName: "", email: "", contactNo: "", message: "" });
    toast.success("Thank you. Your message has been sent.");
  };

  const socialLinks = [
    { icon: Facebook, href: siteContent.socialLinks.facebook, label: "Facebook" },
    { icon: Linkedin, href: siteContent.socialLinks.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: siteContent.socialLinks.instagram, label: "Instagram" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navy contact band */}
      <section className="bg-navy pt-40 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-sans font-extrabold uppercase tracking-tight text-background text-5xl md:text-7xl text-center mb-14">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Let's talk */}
            <div className="border border-background/25 p-8 md:p-10">
              <h2 className="font-sans font-semibold text-background text-3xl mb-8">Let&rsquo;s talk</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4 text-background/85">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span>{siteContent.contactLocation}</span>
                </div>
                <div className="flex items-start gap-4 text-background/85">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <a href={`mailto:${siteContent.contactEmail}`} className="hover:text-gold transition-colors break-all">
                    {siteContent.contactEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Get social */}
            <div className="border border-background/25 p-8 md:p-10">
              <h2 className="font-sans font-semibold text-background text-3xl mb-8">Get social</h2>
              <div className="flex items-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background hover:text-gold transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
                <span className="text-background/85 ml-2">#myawards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Got Questions */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
            <div>
              <h2 className="font-sans font-extrabold uppercase tracking-tight text-navy text-5xl md:text-6xl mb-6">Got Questions?</h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Send us a message! We&rsquo;re here to help and will get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="lg:border-l lg:border-border lg:pl-12 space-y-8">
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                required
                placeholder="First Name"
                className="w-full bg-transparent border-0 border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                placeholder="Email Address"
                className="w-full bg-transparent border-0 border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="tel"
                value={form.contactNo}
                onChange={(e) => setForm({ ...form, contactNo: e.target.value })}
                placeholder="Contact No"
                className="w-full bg-transparent border-0 border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={3}
                placeholder="Tell Us How We Can Help"
                className="w-full bg-transparent border-0 border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
              />
              <Button type="submit" variant="gold" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : submitted ? "Sent" : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;