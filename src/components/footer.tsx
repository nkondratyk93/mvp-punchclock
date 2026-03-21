import Link from "next/link";

const LANGUAGES = [
  { code: "en", label: "EN", href: "/" },
  { code: "es", label: "ES", href: "/es" },
  { code: "de", label: "DE", href: "/de" },
  { code: "fr", label: "FR", href: "/fr" },
  { code: "pt", label: "PT", href: "/pt" },
  { code: "ja", label: "JA", href: "/ja" },
];

export function Footer({ currentLang = "en" }: { currentLang?: string }) {
  return (
    <footer className="border-t border-zinc-800 py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-punch-muted">
          <span>
            Built by{" "}
            <a
              href="https://no-humans.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              no-humans.app
            </a>
          </span>
          <div className="flex gap-4">
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 text-xs text-punch-muted">
          {LANGUAGES.map((lang) => (
            <Link
              key={lang.code}
              href={lang.href}
              className={`px-2 py-1 rounded transition-colors ${
                currentLang === lang.code
                  ? "bg-zinc-800 text-foreground font-medium"
                  : "hover:text-foreground"
              }`}
            >
              {lang.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
