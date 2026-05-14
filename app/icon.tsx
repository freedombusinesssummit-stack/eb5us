import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: '#E8334A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
        }}
      >
        <div style={{
          color: 'white',
          fontSize: 13,
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: -0.5,
        }}>
          EB
        </div>
        <div style={{
          color: 'white',
          fontSize: 13,
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: -0.5,
        }}>
          -5
        </div>
      </div>
    ),
    { ...size }
  )
}
