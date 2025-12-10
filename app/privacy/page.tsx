import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Odock.ai",
  description:
    "Learn how Odock.ai handles data for the waitlist and optional Google Analytics in line with GDPR requirements.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background gradient-ocean">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24 space-y-10">
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center rounded-full border border-border/60 bg-card/60 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            Privacy
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground">
                We keep data collection limited to what is needed for the waitlist and to understand site usage when you
                accept analytics cookies. Everything is handled to remain GDPR compliant.
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

        <section className="space-y-6 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Our site is intentionally minimal. We collect only the information you choose to share so we can manage
              the waitlist or respond to your inquiries.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-foreground">Waitlist sign-up:</span> name, email, role, and
                optional team size so we can confirm your place on the list and send updates.
              </li>
              <li>
                <span className="font-semibold text-foreground">Contact and enterprise inquiries:</span> the details you
                provide (such as company, role, and message) plus hCaptcha verification to prevent spam.
              </li>
              <li>
                <span className="font-semibold text-foreground">Analytics (optional):</span> Google Analytics runs only
                after you accept analytics cookies. We view aggregated trends (e.g., page views, device/browser details)
                to improve the site.
              </li>
              <li>
                <span className="font-semibold text-foreground">Technical logs:</span> minimal logs for security and
                reliability (e.g., request metadata) retained for short periods.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">How we use your information</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground">
            <li>To send waitlist confirmations, product updates, or invitations to early access.</li>
            <li>To respond to messages you send through the contact form.</li>
            <li>To protect the service from abuse (spam prevention and security monitoring).</li>
            <li>
              To understand how the site is used through aggregated analytics when you have opted in. We do not sell or
              share data for advertising.
            </li>
          </ul>
        </section>

        <section className="space-y-6 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">Cookies and tracking</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground">
            <li>Essential cookies are limited to site reliability and spam prevention (e.g., hCaptcha).</li>
            <li>
              Google Analytics cookies are set only after you accept them. Data is used in aggregate to improve the site,
              and you can withdraw consent at any time through your browser or the cookie controls.
            </li>
            <li>We do not use advertising or social media tracking pixels.</li>
          </ul>
        </section>

        <section className="space-y-6 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">Sharing and transfers</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground">
            <li>
              We share data only with service providers that help us operate the site (for example, hosting, email, form
              handling, analytics, and security). These providers are bound by data protection agreements.
            </li>
            <li>We do not sell personal data.</li>
            <li>Data may be processed outside your country, but always with protections consistent with GDPR.</li>
          </ul>
        </section>

        <section className="space-y-6 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">Retention</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground">
            <li>Waitlist and inquiry details are kept only as long as needed to manage access and conversations.</li>
            <li>Analytics data is kept in aggregate form according to Google Analytics retention settings.</li>
            <li>
              If you ask us to delete your data, we will remove it unless we need to keep it to meet legal or security
              obligations.
            </li>
          </ul>
        </section>

        <section className="space-y-6 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">Your rights</h2>
          <p className="text-sm text-muted-foreground">
            If you are in the EU/UK (or similar jurisdictions), you can request access, correction, deletion, restriction
            of processing, portability, or withdraw consent for analytics at any time. To exercise these rights or ask a
            privacy question, contact us at{" "}
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
