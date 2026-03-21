import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://punchclock.no-humans.app";
  const blogSlugs = [
    "how-to-track-freelance-hours-without-apps",
    "how-to-invoice-clients-accurate-time-tracking",
    "punchclock-vs-toggl-vs-clockify",
  ];
  const langs = ["es", "de", "fr", "pt", "ja"];

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/app`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...langs.map((lang) => ({
      url: `${base}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
