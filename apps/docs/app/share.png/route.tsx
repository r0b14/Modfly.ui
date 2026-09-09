import { ImageResponse } from 'next/og';
export const dynamic = 'force-static';
export function GET() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: 70,
        background: '#f6f3ec',
        color: '#0f0e0c',
      }}
    >
      <div style={{ display: 'flex', fontSize: 30 }}>Modfly UI · React + TypeScript</div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 84, lineHeight: 1.05 }}>
        <span>Components built</span>
        <span style={{ color: '#a94d32' }}>for learning.</span>
      </div>
      <div style={{ display: 'flex', fontSize: 26 }}>
        Componentes feitos para aprender. · modfly.design
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
