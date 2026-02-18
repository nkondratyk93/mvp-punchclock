import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PunchClock",
  description:
    "Free browser-based time clock for freelancers. Clock in, clock out, export to CSV. No signup, no account, no bloat.",
  openGraph: {
    title: "PunchClock",
    description:
      "Free browser-based time clock for freelancers. Clock in, clock out, export to CSV. No signup, no account, no bloat.",
    url: "https://punchclock.visieasy.com",
    siteName: "PunchClock",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PunchClock",
    description:
      "Free browser-based time clock for freelancers. Clock in, clock out, export to CSV. No signup, no account, no bloat.",
  },
  alternates: {
    canonical: "https://punchclock.visieasy.com",
  },
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PunchClock",
  description:
    "Free browser-based time clock for freelancers. Clock in, clock out, export to CSV. No signup, no account, no bloat.",
  url: "https://punchclock.visieasy.com",
  applicationCategory: "Utility",
  operatingSystem: "Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-XHZ6T0YRK0" />
      </body>
    </html>
  );
}
