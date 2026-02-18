import Link from "next/link";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="mx-auto max-w-2xl px-6 py-24">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: February 2026
        </p>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Acceptance
            </h2>
            <p>
              By using PunchClock, you agree to these terms. If you don&apos;t
              agree, please don&apos;t use the service.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Service Description
            </h2>
            <p>
              PunchClock is a free, browser-based time tracking tool. All data is
              stored locally in your browser. We do not provide cloud storage,
              backups, or account management.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Disclaimer
            </h2>
            <p>
              PunchClock is provided &ldquo;as is&rdquo; without warranty of any
              kind, express or implied. We do not guarantee the accuracy,
              reliability, or availability of the service. Use it at your own
              risk.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Limitation of Liability
            </h2>
            <p>
              In no event shall PunchClock or its creators be liable for any
              indirect, incidental, special, or consequential damages arising
              from the use or inability to use this service, including but not
              limited to loss of data or profits.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Data Responsibility
            </h2>
            <p>
              You are solely responsible for your data. Since all data is stored
              in your browser&apos;s localStorage, clearing your browser data
              will permanently delete your time entries. We recommend regularly
              exporting your data as CSV.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Changes
            </h2>
            <p>
              We may update these terms at any time. Continued use of PunchClock
              after changes constitutes acceptance of the new terms.
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
