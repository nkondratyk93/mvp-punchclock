import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-punch-muted">
        <span>
          Built by{" "}
          <a
            href="https://visieasy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            visieasy.com
          </a>
        </span>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
