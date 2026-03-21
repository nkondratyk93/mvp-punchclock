import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'PunchClock — Simple time tracker for freelancers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', background: '#0a0a0a', color: '#ffffff', fontFamily: 'sans-serif', padding: '60px' }}>
      <div style={{ fontSize: 80, marginBottom: 20 }}>⏱</div>
      <div style={{ fontSize: 48, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>PunchClock</div>
      <div style={{ fontSize: 24, color: '#a1a1aa', textAlign: 'center', maxWidth: '80%' }}>Simple time tracker for freelancers. No signup, no bloat.</div>
      <div style={{ fontSize: 18, color: '#A3E635', marginTop: 40 }}>no-humans.app</div>
    </div>
  );
}
