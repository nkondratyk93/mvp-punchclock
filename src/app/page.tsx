import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Clock, BarChart3, Download, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "One-click punch",
    description:
      "Hit the button when you start working. Hit it again when you stop. That is the whole workflow.",
  },
  {
    icon: BarChart3,
    title: "See your week",
    description:
      "Daily and weekly totals update automatically. Know exactly how many hours you put in.",
  },
  {
    icon: Download,
    title: "Export to CSV",
    description:
      "Download all your entries as a spreadsheet-ready CSV file. Dates, times, durations, notes.",
  },
  {
    icon: Shield,
    title: "Your browser, your data",
    description:
      "Everything stays in your browser local storage. Nothing leaves your computer. No account, ever.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl">
          Stop overthinking time tracking
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-punch-muted max-w-2xl">
          One button to start. One button to stop. Download your hours as CSV
          whenever you want. No account needed.
        </p>
        <Link href="/app" className="mt-10">
          <Button
            size="lg"
            className="bg-punch-green hover:bg-punch-green/90 text-background font-display text-lg px-8 py-6 transition-transform hover:scale-105"
          >
            Start tracking
          </Button>
        </Link>

        {/* Mock preview */}
        <div className="mt-16 w-full max-w-md mx-auto">
          <div className="bg-punch-surface border border-zinc-800 rounded-2xl p-8 flex flex-col items-center gap-4">
            <div className="w-28 h-28 rounded-full bg-punch-green/20 border-2 border-punch-green flex items-center justify-center">
              <span className="font-display text-punch-green text-xl font-bold">
                CLOCK IN
              </span>
            </div>
            <div className="font-mono text-2xl text-foreground tabular-nums">
              00:00:00
            </div>
            <div className="text-sm text-punch-muted">Ready to start</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            >
              <feature.icon className="w-6 h-6 text-punch-green mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-punch-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto border-t border-b border-zinc-800 py-10">
          <blockquote className="text-center italic text-zinc-400 text-lg leading-relaxed">
            &ldquo;I just needed something to clock in and out. Every other tool
            wanted me to create an account and pick a plan first.&rdquo;
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
}
