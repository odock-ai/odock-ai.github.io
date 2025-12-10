import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Use | Odock.ai",
  description:
    "Terms for using the Odock.ai marketing site and waitlist, including acceptable use and limitations of liability.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background gradient-ocean">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24 space-y-10">
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center rounded-full border border-border/60 bg-card/60 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            Legal
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Terms of Use</h1>
              <p className="text-lg text-muted-foreground">
                These terms govern how you may use the Odock.ai marketing site, waitlist, and contact channels.
              </p>
              <p className="text-sm text-muted-foreground">Last updated: 2025-12-09</p>
            </div>
            <Link
              href="/"
              className="text-sm text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent/90"
            >
              ← Back to homepage
            </Link>
          </div>
        </div>

        <section className="space-y-5 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">1. Using this site</h2>
          <p className="text-sm text-muted-foreground">
            The site is provided to share information about Odock.ai and to let you join the waitlist or contact us.
            You must use the site lawfully and agree to these terms each time you access it.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">2. Waitlist and inquiries</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground">
            <li>Joining the waitlist does not guarantee product availability or timing.</li>
            <li>
              Provide accurate information when you submit forms. We use it to contact you about access or to respond to
              your message.
            </li>
            <li>You may ask to be removed from the waitlist or stop communications at any time.</li>
          </ul>
        </section>

        <section className="space-y-5 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">3. Acceptable use</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground">
            <li>No interfering with or disrupting the site, security features, or infrastructure.</li>
            <li>No attempting to access data that does not belong to you.</li>
            <li>No automated scraping, scanning, or reverse engineering of the site without consent.</li>
            <li>No use that violates applicable laws or regulations.</li>
          </ul>
        </section>

        <section className="space-y-5 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">4. Analytics and cookies</h2>
          <p className="text-sm text-muted-foreground">
            We keep cookies limited. Google Analytics is used only if you accept analytics cookies so we can understand
            traffic in aggregate. See the Privacy Policy for details on data handling and your choices.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">5. Intellectual property</h2>
          <p className="text-sm text-muted-foreground">
            All content on the site (brand, copy, graphics, and layout) is owned by Odock.ai or its licensors. You may
            not reuse it without prior written permission unless a specific license is provided.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">6. Disclaimer</h2>
          <p className="text-sm text-muted-foreground">
            The site is provided “as is” for informational purposes. We may update or discontinue parts of the site at
            any time. To the fullest extent permitted by law, Odock.ai disclaims warranties of fitness, merchantability,
            and non-infringement.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">7. Limitation of liability</h2>
          <p className="text-sm text-muted-foreground">
            To the extent permitted by law, Odock.ai is not liable for indirect, incidental, consequential, or punitive
            damages arising from your use of the site. If liability cannot be excluded, it is limited to the amount you
            paid us for accessing the site (which is typically zero).
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">8. Changes to these terms</h2>
          <p className="text-sm text-muted-foreground">
            We may update these terms to reflect new features or legal requirements. If changes are material, we will
            note it on this page. Continued use of the site after changes means you accept the updated terms.
          </p>
        </section>

        <section className="space-y-3 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">9. Contact</h2>
          <p className="text-sm text-muted-foreground">
            Questions about these terms? Reach us at{" "}
            <a className="font-semibold text-accent underline decoration-accent/50" href="mailto:hello@odock.ai">
              hello@odock.ai
            </a>
            .
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
