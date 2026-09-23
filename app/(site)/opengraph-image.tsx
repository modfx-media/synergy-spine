import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Synergy Spine and Nerve Center";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0b2545 0%, #13315c 55%, #1d4e89 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#d4a745",
            marginBottom: 24,
          }}
        >
          Synergy Spine &amp; Nerve Center
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 960,
          }}
        >
          Chiropractic Care in Rio Rancho, NM
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 32,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 960,
          }}
        >
          Unlock your body&apos;s natural healing power.
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 24,
            color: "#d4a745",
            letterSpacing: 2,
          }}
        >
          synergyspineandnerve.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
