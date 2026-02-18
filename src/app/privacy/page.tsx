import Link from "next/link";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="mx-auto max-w-2xl px-6 py-24">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: February 2026
        </p>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Your Data Stays With You
            </h2>
            <p>
              PunchClock stores all your time tracking data exclusively in your
              browser&apos;s localStorage. We do not collect, transmit, or store
              your time entries on any server. Your data never leaves your
              device.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Analytics
            </h2>
            <p>
              We use Google Analytics to collect anonymous usage statistics such
              as page views, button clicks, and general usage patterns. This
              helps us understand how people use PunchClock so we can improve it.
              Google Analytics does not have access to your time tracking data.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Cookies
            </h2>
            <p>
              Google Analytics may set cookies to distinguish unique users and
              sessions. No other cookies are used by PunchClock.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Data Deletion
            </h2>
            <p>
              Since all data is stored locally in your browser, you can delete it
              at any time by clearing your browser&apos;s localStorage or site
              data for this domain.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Contact
            </h2>
            <p>
              Questions about this policy? Reach out at{" "}
              <a
                href="https://visieasy.com"
                className="underline hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                visieasy.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            &larr; Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
