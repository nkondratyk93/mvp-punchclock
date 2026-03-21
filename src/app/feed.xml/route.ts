const BASE_URL = "https://punchclock.no-humans.app";

const articles = [
  {
    slug: "how-to-track-freelance-hours-without-apps",
    title: "How to Track Freelance Hours Without Expensive Apps (2025)",
    description: "Learn simple, free methods to track your freelance hours without subscription apps. Discover why PunchClock's no-signup time tracker is the easiest option for solo freelancers.",
    date: "2025-03-21",
  },
  {
    slug: "how-to-invoice-clients-accurate-time-tracking",
    title: "How to Invoice Clients with Accurate Time Tracking (Freelancer's Guide)",
    description: "Freelancer's guide to accurate invoicing with time tracking. Learn common time tracking mistakes, how to organize hours by project, and export clean data for invoices.",
    date: "2025-03-21",
  },
  {
    slug: "punchclock-vs-toggl-vs-clockify",
    title: "PunchClock vs Toggl vs Clockify: Best Free Time Tracker for Solo Freelancers",
    description: "Detailed comparison of PunchClock, Toggl, and Clockify for solo freelancers. Compare pricing, features, privacy, and signup requirements to find the best free time tracker.",
    date: "2025-03-21",
  },
];

export async function GET() {
  const items = articles
    .map(
      (a) => `    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${BASE_URL}/blog/${a.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${a.slug}</guid>
      <description><![CDATA[${a.description}]]></description>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>PunchClock Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Time tracking tips, guides, and comparisons for freelancers.</description>
    <language>en</language>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
