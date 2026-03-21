import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { ArrowLeft, Clock } from "lucide-react";
import { notFound } from "next/navigation";

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

const articles: Record<string, Article> = {
  "how-to-track-freelance-hours-without-apps": {
    slug: "how-to-track-freelance-hours-without-apps",
    title: "How to Track Freelance Hours Without Expensive Apps (2025)",
    description:
      "Learn simple, free methods to track your freelance hours without subscription apps. Discover why PunchClock's no-signup time tracker is the easiest option for solo freelancers.",
    date: "2025-03-21",
    readTime: "4 min read",
    content: (
      <>
        <p>
          If you freelance, you already know the drill: you sit down to work, forget to start a timer,
          finish three hours later, and then try to reconstruct what you did from memory. Sound familiar?
          You&apos;re not alone. Time tracking is one of the most universally dreaded tasks among freelancers,
          and it&apos;s made worse by the overwhelming number of apps promising to &ldquo;simplify&rdquo; it &mdash; for
          $10, $15, or $20 a month.
        </p>
        <p>
          But here&apos;s the thing: you don&apos;t need an expensive app to track your hours. In fact, for most
          solo freelancers, the simpler the tool, the better. Let&apos;s break down why, and what actually works.
        </p>

        <h2>Why Freelancers Need Time Tracking</h2>
        <p>
          Whether you bill hourly or charge flat rates, knowing how long tasks take is essential. Without
          tracking, you&apos;re guessing &mdash; and guessing almost always means undercharging. Studies consistently
          show that freelancers who track their time earn 15-20% more than those who don&apos;t, simply because
          they have real data to base their rates on.
        </p>
        <p>
          Time tracking also helps you identify where your hours actually go. That &ldquo;quick email check&rdquo;
          that turns into 45 minutes? The client revision that eats an entire afternoon? You only see
          these patterns when you have data.
        </p>

        <h2>The Common Pain Points</h2>
        <p>
          So if time tracking is so valuable, why do most freelancers hate it? A few reasons keep
          coming up:
        </p>
        <ul>
          <li>
            <strong>Forgetting to start the timer.</strong> You get into flow and realize two hours
            later you never pressed &ldquo;start.&rdquo; Now you&apos;re estimating, which defeats the purpose.
          </li>
          <li>
            <strong>App overload.</strong> Toggl, Harvest, Clockify, Timely, RescueTime, Everhour &mdash;
            there are dozens of options, each with dashboards, integrations, team features, and settings
            you&apos;ll never use. For a solo freelancer, it&apos;s overkill.
          </li>
          <li>
            <strong>Subscription fatigue.</strong> You&apos;re already paying for your domain, hosting, accounting
            software, maybe a project management tool. Adding another $10/month subscription for a timer
            feels absurd.
          </li>
          <li>
            <strong>Signup friction.</strong> Most apps require an email, password, email verification,
            onboarding wizard, and workspace setup before you can track a single minute. That&apos;s 5-10
            minutes of setup for something that should take zero.
          </li>
        </ul>

        <h2>Simple Methods That Actually Work</h2>
        <p>
          Before reaching for any app, consider these low-tech approaches:
        </p>
        <h3>1. The Notebook Method</h3>
        <p>
          Keep a physical notebook next to your keyboard. When you start working, write the time. When
          you stop, write the time. At the end of the week, tally it up. It&apos;s analog, it&apos;s reliable,
          and it costs nothing. The downside? Doing the math manually and transferring data to invoices.
        </p>
        <h3>2. A Simple Spreadsheet</h3>
        <p>
          Google Sheets or Excel with columns for date, start time, end time, project, and notes.
          Add a formula for duration and you have a basic time tracker. Works well if you&apos;re disciplined
          about filling it in, but most people fall off after a week.
        </p>
        <h3>3. A Browser-Based Punch Clock</h3>
        <p>
          This is where tools like PunchClock come in. Instead of a full-featured app with team management
          and billing integrations, you get exactly one thing: a clock-in/clock-out button. Open it in your
          browser, punch in when you start, punch out when you stop. Your hours accumulate automatically.
          Export to CSV when you need the data.
        </p>

        <h2>Why PunchClock&apos;s No-Signup Approach Works</h2>
        <p>
          PunchClock was built for the freelancer who just wants to track hours without dealing with
          accounts, subscriptions, or feature bloat. Here&apos;s what makes it different:
        </p>
        <ul>
          <li>
            <strong>Zero signup.</strong> Open the page, click &ldquo;Clock In.&rdquo; That&apos;s it. No email, no
            password, no onboarding. You&apos;re tracking time within 2 seconds of arriving.
          </li>
          <li>
            <strong>Free forever.</strong> Not free with limits. Not free for 14 days. Free, period.
            There&apos;s no premium tier because there&apos;s nothing to upsell.
          </li>
          <li>
            <strong>All data stays local.</strong> Your time entries live in your browser&apos;s localStorage.
            Nothing is sent to a server. No one can see your data, sell it, or lose it in a breach.
          </li>
          <li>
            <strong>CSV export.</strong> When you need your hours for an invoice or tax records, export
            everything as a CSV file. Dates, times, durations, notes &mdash; all formatted and ready to go.
          </li>
        </ul>
        <p>
          The philosophy is simple: time tracking should take less effort than the work you&apos;re tracking.
          If your tracking tool has a learning curve, it&apos;s too complicated.
        </p>

        <h2>When You Actually Need a Full App</h2>
        <p>
          To be fair, there are situations where a more feature-rich tool makes sense. If you manage a
          team, need client-facing reports, or want automatic invoicing integrations, tools like Toggl
          or Harvest earn their price tag. But if you&apos;re a solo freelancer who just needs to know how
          many hours you worked this week? You don&apos;t need any of that.
        </p>

        <h2>Start Tracking in 2 Seconds</h2>
        <p>
          The best time tracking method is the one you&apos;ll actually use. For most solo freelancers, that
          means the simplest option available. Give PunchClock a try &mdash; open it, clock in, and see how
          painless time tracking can be.
        </p>
      </>
    ),
  },
  "how-to-invoice-clients-accurate-time-tracking": {
    slug: "how-to-invoice-clients-accurate-time-tracking",
    title:
      "How to Invoice Clients with Accurate Time Tracking (Freelancer's Guide)",
    description:
      "Freelancer's guide to accurate invoicing with time tracking. Learn common time tracking mistakes, how to organize hours by project, and export clean data for invoices.",
    date: "2025-03-21",
    readTime: "4 min read",
    content: (
      <>
        <p>
          Nothing kills a freelancer&apos;s income faster than inaccurate invoicing. Undercharge by 15 minutes
          per day and you&apos;re losing over 60 hours a year &mdash; that&apos;s a full week and a half of unpaid work.
          Overcharge and you risk damaging client trust. Accurate time tracking isn&apos;t just good practice;
          it&apos;s the foundation of sustainable freelancing.
        </p>

        <h2>Why Accurate Hours Matter for Invoicing</h2>
        <p>
          When you bill hourly, your time records <em>are</em> your invoice. Every entry is a line item
          that justifies your payment. Vague entries like &ldquo;worked on project &mdash; 3 hours&rdquo; invite
          questions. Precise entries like &ldquo;Homepage redesign: responsive layout adjustments &mdash; 2h 15m&rdquo;
          demonstrate professionalism and reduce disputes.
        </p>
        <p>
          Even on flat-rate projects, time tracking matters. It tells you whether your fixed price
          actually covers your hours. If you quoted $500 for a project and end up spending 20 hours,
          you&apos;re earning $25/hour. Track that, and you&apos;ll know to quote higher next time.
        </p>

        <h2>Common Time Tracking Mistakes Freelancers Make</h2>
        <h3>1. Rounding Too Aggressively</h3>
        <p>
          &ldquo;That was about two hours&rdquo; is almost never accurate. Humans are terrible at estimating time
          retrospectively. Studies show we consistently underestimate how long tasks take by 25-40%.
          If you round to the nearest hour, you&apos;re almost certainly leaving money on the table.
        </p>
        <h3>2. Forgetting Small Tasks</h3>
        <p>
          The 10-minute email exchange. The 20-minute revision. The 5-minute Slack thread. These micro-tasks
          add up fast, but they rarely make it onto invoices because they feel too small to track.
          Over a month, they can easily total 5-10 hours of unbilled work.
        </p>
        <h3>3. Tracking After the Fact</h3>
        <p>
          Monday night, you sit down to fill in your time sheet for the day. What did you work on at 10 AM?
          How long did that client call take? The further from the moment you record your time, the less
          accurate it becomes. Real-time tracking &mdash; clocking in and out as you work &mdash; eliminates this
          problem entirely.
        </p>
        <h3>4. Mixing Projects in One Block</h3>
        <p>
          Logging &ldquo;3 hours of client work&rdquo; when you actually split time between two projects makes
          invoicing a nightmare. Each client gets a vague approximation instead of a clear record. Track
          each project separately, even if you switch between them during the day.
        </p>

        <h2>How to Organize Time by Project and Client</h2>
        <p>
          The key to clean invoicing is categorization. Here&apos;s a simple system that works:
        </p>
        <ul>
          <li>
            <strong>One timer per project.</strong> When you switch from Client A&apos;s website to Client B&apos;s
            logo design, stop the first timer and start a new one. Most tools, including PunchClock,
            let you add notes to each entry &mdash; use them to tag the project or client.
          </li>
          <li>
            <strong>Use consistent naming.</strong> Pick a format like &ldquo;ClientName &mdash; TaskDescription&rdquo; and
            stick with it. When you export your data, you can filter by client name instantly.
          </li>
          <li>
            <strong>Track breaks.</strong> If you step away for lunch or a walk, clock out. It keeps
            your records honest and prevents inflated hours that you&apos;d have to manually adjust later.
          </li>
          <li>
            <strong>Review weekly.</strong> Set aside 10 minutes on Friday to review your week&apos;s entries.
            Catch any missing sessions while your memory is still fresh.
          </li>
        </ul>

        <h2>Exporting Time Data for Invoices</h2>
        <p>
          The real payoff of time tracking comes when you turn your data into invoices. Here&apos;s how
          to make the export-to-invoice workflow smooth:
        </p>
        <h3>CSV Export</h3>
        <p>
          Most time tracking tools, including PunchClock, can export your entries as a CSV file. This
          gives you a spreadsheet with dates, start times, end times, durations, and notes. From there,
          you can:
        </p>
        <ul>
          <li>Filter rows by client name or project tag</li>
          <li>Sum the duration column for total billable hours</li>
          <li>Copy relevant rows directly into your invoice template</li>
          <li>Attach the CSV as a backup for clients who want detailed records</li>
        </ul>
        <h3>Building Your Invoice</h3>
        <p>
          A professional invoice should include: your name and contact info, client details, invoice number
          and date, line items with descriptions and hours, your hourly rate, total amount, and payment
          terms. Having accurate time data makes filling this out straightforward instead of a guessing game.
        </p>

        <h2>Why PunchClock Makes This Easy</h2>
        <p>
          PunchClock is designed for exactly this workflow. Clock in when you start, clock out when you stop,
          add a note about what you worked on. Your entries accumulate with precise timestamps. When it&apos;s
          invoice time, export to CSV, filter by client, and you have your billable hours ready.
        </p>
        <p>
          There&apos;s no signup process to slow you down. No monthly fee eating into the income you just
          tracked. No server storing your data &mdash; everything stays in your browser&apos;s local storage, so
          your client information never leaves your machine.
        </p>

        <h2>Start Tracking Accurately Today</h2>
        <p>
          Accurate invoicing starts with accurate tracking, and accurate tracking starts with a tool
          you&apos;ll actually use. If your current system involves guessing, reconstructing, or rounding,
          it&apos;s costing you money. Try PunchClock &mdash; clock in, do your work, clock out, and get paid
          for every minute.
        </p>
      </>
    ),
  },
  "punchclock-vs-toggl-vs-clockify": {
    slug: "punchclock-vs-toggl-vs-clockify",
    title:
      "PunchClock vs Toggl vs Clockify: Best Free Time Tracker for Solo Freelancers",
    description:
      "Detailed comparison of PunchClock, Toggl, and Clockify for solo freelancers. Compare pricing, features, privacy, and signup requirements to find the best free time tracker.",
    date: "2025-03-21",
    readTime: "5 min read",
    content: (
      <>
        <p>
          Choosing a time tracker as a solo freelancer shouldn&apos;t be complicated, but the market has
          made it that way. There are dozens of options, most designed for teams of 10+, priced
          accordingly, and packed with features you&apos;ll never use. In this comparison, we&apos;ll look at
          three popular options &mdash; PunchClock, Toggl, and Clockify &mdash; through the lens of what actually
          matters to a freelancer working alone.
        </p>

        <h2>Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="py-3 pr-4 font-semibold">Feature</th>
                <th className="py-3 pr-4 font-semibold text-punch-green">PunchClock</th>
                <th className="py-3 pr-4 font-semibold">Toggl</th>
                <th className="py-3 font-semibold">Clockify</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-zinc-800">
                <td className="py-3 pr-4 font-medium">Price</td>
                <td className="py-3 pr-4 text-punch-green font-medium">Free forever</td>
                <td className="py-3 pr-4">Free tier, then $10/user/mo</td>
                <td className="py-3">Free tier, then $3.99/user/mo</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 pr-4 font-medium">Signup required</td>
                <td className="py-3 pr-4 text-punch-green font-medium">No</td>
                <td className="py-3 pr-4">Yes (email + verification)</td>
                <td className="py-3">Yes (email + verification)</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 pr-4 font-medium">Time to first track</td>
                <td className="py-3 pr-4 text-punch-green font-medium">~2 seconds</td>
                <td className="py-3 pr-4">~3-5 minutes</td>
                <td className="py-3">~3-5 minutes</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 pr-4 font-medium">Data storage</td>
                <td className="py-3 pr-4 text-punch-green font-medium">Browser (local only)</td>
                <td className="py-3 pr-4">Cloud (Toggl servers)</td>
                <td className="py-3">Cloud (Clockify servers)</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 pr-4 font-medium">CSV export</td>
                <td className="py-3 pr-4 text-punch-green font-medium">Yes (free)</td>
                <td className="py-3 pr-4">Yes (free tier)</td>
                <td className="py-3">Yes (free tier)</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 pr-4 font-medium">Team features</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3">Yes</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 pr-4 font-medium">Integrations</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3 pr-4">100+ (Asana, Jira, etc.)</td>
                <td className="py-3">80+ (Trello, Asana, etc.)</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 pr-4 font-medium">Mobile app</td>
                <td className="py-3 pr-4">PWA (browser)</td>
                <td className="py-3 pr-4">iOS + Android</td>
                <td className="py-3">iOS + Android</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">Best for</td>
                <td className="py-3 pr-4 text-punch-green font-medium">Solo freelancers</td>
                <td className="py-3 pr-4">Small teams</td>
                <td className="py-3">Budget teams</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Pricing: What &ldquo;Free&rdquo; Actually Means</h2>
        <h3>PunchClock: Free, Period</h3>
        <p>
          PunchClock is free with no asterisk. There&apos;s no premium tier, no usage limits, no &ldquo;free for
          up to X entries.&rdquo; The entire tool is available to everyone, forever. This is possible because
          PunchClock doesn&apos;t run servers for user data &mdash; everything stays in your browser&apos;s local storage.
          No infrastructure costs means no need to charge.
        </p>
        <h3>Toggl: Free Tier with Guardrails</h3>
        <p>
          Toggl&apos;s free plan supports up to 5 users and includes basic time tracking, the Pomodoro timer,
          and CSV export. However, you lose access to billable rates, project time estimates, scheduled
          reports, and most integrations. To unlock these, you need the Starter plan at $10/user/month.
          For a solo freelancer who just needs to clock in and out, the free tier works but feels limited
          by design &mdash; it&apos;s built to convert you to paid.
        </p>
        <h3>Clockify: Free with Strategic Limits</h3>
        <p>
          Clockify&apos;s free plan is generous for teams &mdash; unlimited users and projects. For solo freelancers,
          it covers the basics: time tracking, reports, and export. Paid plans ($3.99-$11.99/user/month)
          add time off tracking, invoicing, scheduling, and custom fields. Like Toggl, the free tier is
          designed to show you what you&apos;re missing.
        </p>

        <h2>Signup and Onboarding</h2>
        <p>
          This is where PunchClock diverges most sharply. Both Toggl and Clockify require email signup,
          email verification, workspace creation, and an onboarding flow before you can track your first
          minute. It typically takes 3-5 minutes to go from &ldquo;I want to track time&rdquo; to actually tracking time.
        </p>
        <p>
          PunchClock has no signup at all. Open the page, click &ldquo;Clock In.&rdquo; You&apos;re tracking time within
          2 seconds. For freelancers who value their time (which should be all of them), this difference
          matters more than it sounds.
        </p>

        <h2>Data Privacy and Storage</h2>
        <p>
          This is an increasingly important consideration, especially for freelancers handling client work.
        </p>
        <p>
          <strong>PunchClock</strong> stores all data in your browser&apos;s localStorage. Nothing is sent to any
          server. No cookies, no analytics on your time data, no third-party access. Your time entries
          exist only on your device. The trade-off is that you can&apos;t sync across devices and clearing
          your browser data deletes your entries (export regularly).
        </p>
        <p>
          <strong>Toggl</strong> stores data on their cloud servers. They have a privacy policy covering
          GDPR compliance and data handling, but your time entries &mdash; including project names and
          descriptions &mdash; live on their infrastructure. This enables cross-device sync but means a
          third party has access to your work patterns and client names.
        </p>
        <p>
          <strong>Clockify</strong> similarly uses cloud storage with servers in the US and EU. Same
          trade-off: cross-device sync in exchange for third-party data storage. They also comply with
          GDPR and offer data export.
        </p>

        <h2>Features: What You Actually Need</h2>
        <p>
          Here&apos;s a reality check: most solo freelancers use about 5% of what Toggl and Clockify offer.
          The core workflow is:
        </p>
        <ol>
          <li>Start a timer when you begin work</li>
          <li>Stop it when you finish</li>
          <li>Add a note about what you did</li>
          <li>Export your hours for invoicing</li>
        </ol>
        <p>
          All three tools handle this. The question is how much extra complexity comes with it.
        </p>
        <p>
          Toggl and Clockify surround this core workflow with project management, team dashboards,
          billable rate calculations, calendar integrations, and reporting engines. If you need those
          features, they&apos;re valuable. If you don&apos;t, they&apos;re clutter that makes the interface harder
          to navigate.
        </p>
        <p>
          PunchClock gives you exactly the four steps above and nothing else. The interface is a single
          button. There&apos;s no learning curve because there&apos;s nothing to learn.
        </p>

        <h2>When to Choose Each Tool</h2>
        <h3>Choose PunchClock if:</h3>
        <ul>
          <li>You&apos;re a solo freelancer who just needs clock-in/clock-out</li>
          <li>You don&apos;t want to create yet another account</li>
          <li>You care about data privacy and want everything local</li>
          <li>You want zero cost with zero strings attached</li>
          <li>You export to CSV for manual invoicing</li>
        </ul>
        <h3>Choose Toggl if:</h3>
        <ul>
          <li>You work with a small team (2-5 people)</li>
          <li>You need integrations with project management tools</li>
          <li>You want detailed reporting and analytics</li>
          <li>Cross-device sync is important to you</li>
          <li>You&apos;re comfortable paying $10/month for premium features</li>
        </ul>
        <h3>Choose Clockify if:</h3>
        <ul>
          <li>You need team features but have a tight budget</li>
          <li>You want a generous free tier for multiple users</li>
          <li>You need built-in invoicing (paid plan)</li>
          <li>You work across many projects with different billable rates</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>
          For solo freelancers who want the absolute simplest way to track hours, PunchClock wins on
          friction. No signup, no cost, no complexity. Open it, clock in, clock out. Done.
        </p>
        <p>
          Toggl and Clockify are excellent tools &mdash; for the right use case. They shine when you need team
          collaboration, integrations, or advanced reporting. But if you&apos;re one person tracking your own
          hours, they&apos;re bringing a chainsaw to a job that needs scissors.
        </p>
        <p>
          Try PunchClock and see if simple is all you need.
        </p>
      </>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};

  return {
    title: `${article.title} | PunchClock Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://punchclock.no-humans.app/blog/${article.slug}`,
      siteName: "PunchClock",
      type: "article",
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
    alternates: {
      canonical: `https://punchclock.no-humans.app/blog/${article.slug}`,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "PunchClock",
      url: "https://punchclock.no-humans.app",
    },
    publisher: {
      "@type": "Organization",
      name: "PunchClock",
      url: "https://punchclock.no-humans.app",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://punchclock.no-humans.app/blog/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-punch-muted hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>
        </div>
      </header>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
        <header className="mb-10">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-punch-muted">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        </header>

        <div className="prose prose-invert prose-zinc max-w-none [&>p]:text-zinc-300 [&>p]:leading-relaxed [&>p]:text-base [&>p]:mb-5 [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:font-display [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3 [&>ul]:text-zinc-300 [&>ul]:mb-5 [&>ul>li]:mb-2 [&>ul>li]:leading-relaxed [&>ol]:text-zinc-300 [&>ol]:mb-5 [&>ol>li]:mb-2 [&>ol>li]:leading-relaxed [&_table]:text-zinc-300 [&_strong]:text-foreground [&_em]:text-zinc-200">
          {article.content}
        </div>

        {/* CTA */}
        <div className="mt-16 border border-zinc-800 rounded-2xl bg-punch-surface p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Ready to start tracking?
          </h2>
          <p className="text-punch-muted mb-6 max-w-md mx-auto">
            No signup. No credit card. Just open PunchClock and clock in. Your
            data stays in your browser.
          </p>
          <Link href="/app">
            <Button
              size="lg"
              className="bg-punch-green hover:bg-punch-green/90 text-background font-display text-lg px-8 py-6 transition-transform hover:scale-105"
            >
              Start tracking free
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
