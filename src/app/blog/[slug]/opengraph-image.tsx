import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'PunchClock Blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const titles: Record<string, string> = {
  'how-to-track-freelance-hours-without-apps': 'How to Track Freelance Hours Without Expensive Apps',
  'how-to-invoice-clients-accurate-time-tracking': 'How to Invoice Clients with Accurate Time Tracking',
  'punchclock-vs-toggl-vs-clockify': 'PunchClock vs Toggl vs Clockify',
};

export default function Image({ params }: { params: { slug: string } }) {
  const title = titles[params.slug] || 'PunchClock Blog';

  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', background: '#0a0a0a', color: '#ffffff', fontFamily: 'sans-serif', padding: '60px' }}>
      <div style={{ fontSize: 60, marginBottom: 20 }}>⏱</div>
      <div style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'center', marginBottom: 16, maxWidth: '90%', lineHeight: 1.3 }}>{title}</div>
      <div style={{ fontSize: 20, color: '#a1a1aa', textAlign: 'center' }}>PunchClock Blog</div>
      <div style={{ fontSize: 16, color: '#A3E635', marginTop: 30 }}>punchclock.no-humans.app</div>
    </div>
  );
}
