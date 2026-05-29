import { ImageResponse } from 'next/og'

export const alt = 'Digi Brand Booster · AI-Native Performance Marketing Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0a0a14',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            left: -200,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(91,141,255,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)',
          }}
        />

        {/* Top: badge */}
        <div style={{ display: 'flex' }}>
          <div
            style={{
              padding: '10px 20px',
              borderRadius: 999,
              background: 'rgba(251,191,36,0.15)',
              border: '1px solid rgba(251,191,36,0.3)',
              color: '#fbbf24',
              fontSize: 22,
              fontWeight: 600,
              display: 'flex',
            }}
          >
            90-Day ROI Guarantee · 5 Spots Open
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: '#f4f4f7',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Most marketing budgets</span>
            <span>get wasted.</span>
            <span
              style={{
                background: 'linear-gradient(135deg, #5b8dff, #22d3ee, #a78bfa)',
                backgroundClip: 'text',
                color: 'transparent',
                marginTop: 8,
              }}
            >
              We make every rupee work harder.
            </span>
          </div>
        </div>

        {/* Bottom: brand + stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 32, color: '#f4f4f7', fontWeight: 700, display: 'flex' }}>
              Digi Brand Booster
            </div>
            <div style={{ fontSize: 22, color: '#a1a1b3', display: 'flex' }}>
              AI-Native Performance Marketing Agency
            </div>
          </div>
          <div style={{ display: 'flex', gap: 32 }}>
            <Stat value="$12M+" label="Revenue" />
            <Stat value="88%" label="Goal Hit" />
            <Stat value="4.9/5" label="Rating" />
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <div
        style={{
          fontSize: 36,
          fontWeight: 700,
          background: 'linear-gradient(135deg, #5b8dff, #22d3ee)',
          backgroundClip: 'text',
          color: 'transparent',
          display: 'flex',
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 18, color: '#a1a1b3', display: 'flex' }}>{label}</div>
    </div>
  )
}
