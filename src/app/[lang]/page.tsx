import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Clock, BarChart3, Download, Shield } from "lucide-react";
import { notFound } from "next/navigation";

const LANGS = ["es", "de", "fr", "pt", "ja"] as const;
type Lang = (typeof LANGS)[number];

const translations: Record<Lang, {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSub: string;
  cta: string;
  mockLabel: string;
  features: { title: string; description: string }[];
  quote: string;
}> = {
  es: {
    title: "PunchClock — Registro de horas gratis para freelancers",
    metaTitle: "PunchClock — Registro de horas gratis para freelancers",
    metaDescription: "Registra tus horas de trabajo gratis. Sin cuenta, sin suscripción. Solo abre PunchClock y ficha. Exporta a CSV.",
    heroTitle: "Deja de complicarte con el registro de horas",
    heroSub: "Un botón para empezar. Un botón para parar. Descarga tus horas en CSV cuando quieras. Sin cuenta.",
    cta: "Empezar a registrar",
    mockLabel: "Listo para empezar",
    features: [
      { title: "Un solo clic", description: "Pulsa el botón cuando empieces a trabajar. Púlsalo otra vez cuando termines. Eso es todo." },
      { title: "Ve tu semana", description: "Los totales diarios y semanales se actualizan automáticamente. Sabrás exactamente cuántas horas trabajaste." },
      { title: "Exporta a CSV", description: "Descarga todas tus entradas como archivo CSV listo para hojas de cálculo. Fechas, horas, duraciones, notas." },
      { title: "Tu navegador, tus datos", description: "Todo se queda en el almacenamiento local de tu navegador. Nada sale de tu ordenador. Sin cuenta, nunca." },
    ],
    quote: "Solo necesitaba algo para fichar entrada y salida. Todas las demás herramientas me pedían crear una cuenta y elegir un plan.",
  },
  de: {
    title: "PunchClock — Kostenlose Zeiterfassung für Freelancer",
    metaTitle: "PunchClock — Kostenlose Zeiterfassung für Freelancer",
    metaDescription: "Erfasse deine Arbeitszeit kostenlos. Kein Konto, kein Abo. Öffne PunchClock und stempel ein. Export als CSV.",
    heroTitle: "Hör auf, Zeiterfassung zu verkomplizieren",
    heroSub: "Ein Button zum Starten. Ein Button zum Stoppen. Lade deine Stunden als CSV herunter, wann du willst. Kein Konto nötig.",
    cta: "Jetzt starten",
    mockLabel: "Bereit zum Starten",
    features: [
      { title: "Ein Klick", description: "Drücke den Button, wenn du anfängst zu arbeiten. Drücke ihn nochmal, wenn du aufhörst. Das ist alles." },
      { title: "Deine Woche im Blick", description: "Tages- und Wochensummen aktualisieren sich automatisch. Du weißt immer genau, wie viele Stunden du gearbeitet hast." },
      { title: "CSV-Export", description: "Lade alle Einträge als tabellenfertige CSV-Datei herunter. Daten, Zeiten, Dauer, Notizen." },
      { title: "Dein Browser, deine Daten", description: "Alles bleibt im lokalen Speicher deines Browsers. Nichts verlässt deinen Computer. Kein Konto, niemals." },
    ],
    quote: "Ich brauchte einfach nur etwas zum Ein- und Ausstempeln. Jedes andere Tool wollte, dass ich erst ein Konto erstelle.",
  },
  fr: {
    title: "PunchClock — Suivi du temps gratuit pour freelances",
    metaTitle: "PunchClock — Suivi du temps gratuit pour freelances",
    metaDescription: "Suivez vos heures de travail gratuitement. Sans compte, sans abonnement. Ouvrez PunchClock et pointez. Export CSV.",
    heroTitle: "Arrêtez de vous compliquer le suivi du temps",
    heroSub: "Un bouton pour commencer. Un bouton pour arrêter. Téléchargez vos heures en CSV quand vous voulez. Aucun compte requis.",
    cta: "Commencer le suivi",
    mockLabel: "Prêt à commencer",
    features: [
      { title: "Un seul clic", description: "Appuyez sur le bouton quand vous commencez à travailler. Appuyez encore quand vous arrêtez. C'est tout." },
      { title: "Voir votre semaine", description: "Les totaux journaliers et hebdomadaires se mettent à jour automatiquement. Vous savez exactement combien d'heures vous avez travaillé." },
      { title: "Export CSV", description: "Téléchargez toutes vos entrées sous forme de fichier CSV. Dates, heures, durées, notes." },
      { title: "Votre navigateur, vos données", description: "Tout reste dans le stockage local de votre navigateur. Rien ne quitte votre ordinateur. Aucun compte, jamais." },
    ],
    quote: "J'avais juste besoin de quelque chose pour pointer. Tous les autres outils voulaient que je crée un compte d'abord.",
  },
  pt: {
    title: "PunchClock — Controle de horas grátis para freelancers",
    metaTitle: "PunchClock — Controle de horas grátis para freelancers",
    metaDescription: "Registre suas horas de trabalho grátis. Sem cadastro, sem assinatura. Abra o PunchClock e bata o ponto. Exporte em CSV.",
    heroTitle: "Pare de complicar o controle de horas",
    heroSub: "Um botão para começar. Um botão para parar. Baixe suas horas em CSV quando quiser. Sem cadastro.",
    cta: "Começar a registrar",
    mockLabel: "Pronto para começar",
    features: [
      { title: "Um clique", description: "Aperte o botão quando começar a trabalhar. Aperte de novo quando parar. É só isso." },
      { title: "Veja sua semana", description: "Os totais diários e semanais se atualizam automaticamente. Saiba exatamente quantas horas você trabalhou." },
      { title: "Exportar CSV", description: "Baixe todas as suas entradas como arquivo CSV. Datas, horários, durações, notas." },
      { title: "Seu navegador, seus dados", description: "Tudo fica no armazenamento local do seu navegador. Nada sai do seu computador. Sem conta, nunca." },
    ],
    quote: "Eu só precisava de algo para bater ponto. Todas as outras ferramentas queriam que eu criasse uma conta antes.",
  },
  ja: {
    title: "PunchClock — フリーランサー向け無料タイムトラッカー",
    metaTitle: "PunchClock — フリーランサー向け無料タイムトラッカー",
    metaDescription: "作業時間を無料で記録。アカウント不要、サブスク不要。PunchClockを開いて打刻するだけ。CSV出力対応。",
    heroTitle: "時間管理をもっとシンプルに",
    heroSub: "ボタンひとつで開始。ボタンひとつで停止。いつでもCSVでダウンロード。アカウント登録不要。",
    cta: "無料で始める",
    mockLabel: "準備完了",
    features: [
      { title: "ワンクリック", description: "作業を始めたらボタンを押す。終わったらもう一度押す。それだけ。" },
      { title: "週間サマリー", description: "日別・週別の合計が自動で更新。正確な作業時間がひと目でわかります。" },
      { title: "CSV出力", description: "すべてのエントリーをCSVファイルでダウンロード。日付、時刻、所要時間、メモ付き。" },
      { title: "ブラウザ完結", description: "データはすべてブラウザのローカルストレージに保存。外部に送信されることはありません。" },
    ],
    quote: "出勤・退勤を記録するだけのものが欲しかった。他のツールはみんな最初にアカウント作成を求めてきた。",
  },
};

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as Lang];
  if (!t) return {};

  const base = "https://punchclock.no-humans.app";
  const langAlternates: Record<string, string> = { "x-default": base, en: base };
  for (const l of LANGS) {
    langAlternates[l] = `${base}/${l}`;
  }

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: `${base}/${lang}`,
      siteName: "PunchClock",
      type: "website",
    },
    alternates: {
      canonical: `${base}/${lang}`,
      languages: langAlternates,
    },
  };
}

const icons = [Clock, BarChart3, Download, Shield];

export default async function LangLandingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = translations[lang as Lang];
  if (!t) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl">
          {t.heroTitle}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-punch-muted max-w-2xl">
          {t.heroSub}
        </p>
        <Link href="/app" className="mt-10">
          <Button size="lg" className="bg-punch-green hover:bg-punch-green/90 text-background font-display text-lg px-8 py-6 transition-transform hover:scale-105">
            {t.cta}
          </Button>
        </Link>

        <div className="mt-16 w-full max-w-md mx-auto">
          <div className="bg-punch-surface border border-zinc-800 rounded-2xl p-8 flex flex-col items-center gap-4">
            <div className="w-28 h-28 rounded-full bg-punch-green/20 border-2 border-punch-green flex items-center justify-center">
              <span className="font-display text-punch-green text-xl font-bold">CLOCK IN</span>
            </div>
            <div className="font-mono text-2xl text-foreground tabular-nums">00:00:00</div>
            <div className="text-sm text-punch-muted">{t.mockLabel}</div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <div key={feature.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <Icon className="w-6 h-6 text-punch-green mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-punch-muted leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto border-t border-b border-zinc-800 py-10">
          <blockquote className="text-center italic text-zinc-400 text-lg leading-relaxed">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
        </div>
      </section>

      <Footer currentLang={lang} />
    </div>
  );
}
