import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | PunchClock — Time Tracking Tips for Freelancers",
  description:
    "Freelancer time tracking guides, invoicing tips, and tool comparisons. Learn how to track hours, invoice accurately, and pick the right time tracker.",
  openGraph: {
    title: "PunchClock Blog — Time Tracking Tips for Freelancers",
    description:
      "Freelancer time tracking guides, invoicing tips, and tool comparisons.",
    url: "https://punchclock.no-humans.app/blog",
    siteName: "PunchClock",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PunchClock Blog — Time Tracking Tips for Freelancers",
    description:
      "Freelancer time tracking guides, invoicing tips, and tool comparisons.",
  },
  alternates: {
    canonical: "https://punchclock.no-humans.app/blog",
  },
};

const posts = [
  {
    slug: "how-to-track-freelance-hours-without-apps",
    title: "How to Track Freelance Hours Without Expensive Apps (2025)",
    description:
      "Why freelancers need time tracking, common pain points like app overload and subscription fatigue, and why a no-signup approach works best.",
    date: "2025-03-21",
    readTime: "4 min read",
  },
  {
    slug: "how-to-invoice-clients-accurate-time-tracking",
    title:
      "How to Invoice Clients with Accurate Time Tracking (Freelancer's Guide)",
    description:
      "Why accurate hours matter for invoicing, common mistakes freelancers make, how to organize time by project, and exporting clean data for invoices.",
    date: "2025-03-21",
    readTime: "4 min read",
  },
  {
    slug: "punchclock-vs-toggl-vs-clockify",
    title:
      "PunchClock vs Toggl vs Clockify: Best Free Time Tracker for Solo Freelancers",
    description:
      "Side-by-side comparison of pricing, features, signup requirements, and data privacy for three popular free time trackers.",
    date: "2025-03-21",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-punch-muted hover:text-foreground transition-colors text-sm"
          >
            ← PunchClock
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-3">
          Blog
        </h1>
        <p className="text-punch-muted text-lg mb-12">
          Time tracking tips, invoicing guides, and tool comparisons for
          freelancers.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 transition-all hover:bg-zinc-900/50"
            >
              <div className="flex items-center gap-3 text-sm text-punch-muted mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-punch-green transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                {post.description}
              </p>
              <span className="inline-flex items-center gap-1 text-punch-green text-sm font-medium group-hover:gap-2 transition-all">
                Read article <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
