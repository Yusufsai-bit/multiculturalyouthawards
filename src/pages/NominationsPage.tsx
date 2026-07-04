import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UserRound, CheckCircle2, CalendarCheck, CalendarX } from "lucide-react";
import { siteContent, getNominationButtonText, areNominationsOpen } from "@/lib/siteContent";

const NominationsPage = () => {
  const statusLabel =
    siteContent.nominationsStatus === "open"
      ? "Open"
      : siteContent.nominationsStatus === "closed"
      ? "Closed"
      : "Opening soon";

  const info = [
    {
      icon: UserRound,
      label: "Who can apply:",
      value: "Individuals, Organisations, Self nominations are encouraged",
    },
    { icon: CheckCircle2, label: "Status:", value: statusLabel },
    {
      icon: CalendarCheck,
      label: "Nominations Open:",
      value: siteContent.nominationsOpenDate,
    },
    {
      icon: CalendarX,
      label: "Nominations Close:",
      value: siteContent.nominationsCloseDate,
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-40 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-sans font-bold text-navy text-4xl md:text-5xl mb-8">
            Multicultural Youth Awards
          </h1>

          {/* Info list */}
          <ul className="space-y-4 mb-8">
            {info.map((item) => (
              <li key={item.label} className="flex items-start gap-3 text-foreground">
                <item.icon className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span>
                  <span className="font-semibold">{item.label}</span> {item.value}
                </span>
              </li>
            ))}
          </ul>

          {areNominationsOpen(siteContent.nominationsStatus) ? (
            <a
              href="https://forms.office.com/r/2eVszS9qWc?origin=lprLink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-navy uppercase tracking-[0.15em] text-sm font-semibold px-8 py-4 mb-14"
            >
              {getNominationButtonText(siteContent.nominationsStatus)}
            </a>
          ) : (
            <button
              disabled
              className="border border-navy/40 text-navy uppercase tracking-[0.15em] text-sm font-semibold px-8 py-4 mb-14 cursor-not-allowed"
            >
              {getNominationButtonText(siteContent.nominationsStatus)}
            </button>
          )}

          {/* Accordion */}
          <Accordion type="single" collapsible defaultValue="how-to" className="border-t border-border">
            <AccordionItem value="how-to" className="border-b border-border">
              <AccordionTrigger className="font-sans font-semibold text-navy text-lg py-5 hover:no-underline">
                How to Nominate
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4 pb-6">
                <p>
                  Step 1: Read through the nomination guide, along with the terms and
                  conditions, and understand the entry requirements for the awards.
                </p>
                <p>
                  Step 2: Choose a nominee, either an individual or a team, ensuring they
                  meet the eligibility criteria for the award category. Make sure to obtain
                  their consent before proceeding with the nomination.
                </p>
                <p>
                  Step 3: Visit www.multiculturalyouthawards.com.au/nominations to access
                  the nomination form. Fill out all necessary details accurately. Include
                  the contact information of two independent referees who can confirm the
                  accuracy of the submission and verify the nominee&rsquo;s eligibility.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="eligibility" className="border-b border-border">
              <AccordionTrigger className="font-sans font-semibold text-navy text-lg py-5 hover:no-underline">
                Eligibility for nominees of all award categories
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                <p className="mb-3">A nominee is eligible if they:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>have a culturally diverse background.</li>
                  <li>are within the age range of 16 &ndash; 30 years old.</li>
                  <li>reside in Australia (for individuals); or</li>
                  <li>
                    are part of a community or volunteer organisation, service provider,
                    government agency or business nominated for a specific project, program
                    or initiative that benefits Australians.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="judging" className="border-b border-border">
              <AccordionTrigger className="font-sans font-semibold text-navy text-lg py-5 hover:no-underline">
                Screening and Judging
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4 pb-6">
                <p>
                  <strong className="text-foreground">Judging Panel</strong>
                  <br />
                  There will be a dedicated judging panel of members representing peak
                  bodies, grass-roots level expertise/stakeholders and government
                  departments. All panel members have relevant experience and expertise to
                  assess each category. The panels usually consist of three members per
                  award category (nine members in total) excluding the Minister for Youth
                  Award. Attention is taken to ensure a balance of genders and backgrounds
                  make up the panel groups.
                </p>
                <p>
                  <strong className="text-foreground">Screening</strong>
                  <br />
                  Prior to reaching the judging panel, all nominations for the Multicultural
                  Youth Awards will undergo a comprehensive pre-evaluation and screening led
                  by the MYG team and relevant stakeholders. This assessment will adhere to
                  strict eligibility requirements to determine the nominees eligible to
                  proceed to the shortlisting stage. The evaluation process ensures a
                  comprehensive and impartial consideration of each nomination.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="scoring" className="border-b border-border">
              <AccordionTrigger className="font-sans font-semibold text-navy text-lg py-5 hover:no-underline">
                Scoring Metrix
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                <p className="mb-3">
                  All judges will use the following scoring matrix for each selection
                  criterion, with a scale out of 10:
                </p>
                <ul className="space-y-2">
                  <li><strong className="text-foreground">1&ndash;2: Not Demonstrated</strong> &mdash; Limited or no evidence of the nominee displaying outstanding qualities in the given criterion.</li>
                  <li><strong className="text-foreground">3&ndash;4: Satisfactory but Needs Improvement</strong> &mdash; Adequate, but there is room for more clarity or detail.</li>
                  <li><strong className="text-foreground">5&ndash;6: Good</strong> &mdash; The nominee has demonstrated proficiency in the criterion.</li>
                  <li><strong className="text-foreground">7&ndash;8: Very Clearly Demonstrated</strong> &mdash; The nominee has explicitly showcased excellence in the given criterion.</li>
                  <li><strong className="text-foreground">9&ndash;10: Outstandingly Demonstrated</strong> &mdash; Exceptional demonstration, exceeding expectations in the criterion.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="categories" className="border-b border-border">
              <AccordionTrigger className="font-sans font-semibold text-navy text-lg py-5 hover:no-underline">
                Award Categories
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                <div className="space-y-5">
                  {siteContent.categories.map((cat) => (
                    <div key={cat.id}>
                      <strong className="text-foreground block mb-1">{cat.name}</strong>
                      <p>{cat.fullDescription ?? cat.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NominationsPage;
