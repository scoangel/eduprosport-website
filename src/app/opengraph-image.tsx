import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HDC Europe — Internationally Certified Hockey Performance System";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0E17 0%, #046bd2 50%, #0A0E17 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#00E5FF",
              marginBottom: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            HDC Europe
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: 900,
              marginBottom: 20,
            }}
          >
            Internationally Certified Hockey Performance System
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#94A3B8",
              textAlign: "center",
              maxWidth: 700,
            }}
          >
            From coach preparation through player education to measurable performance growth
          </div>
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 40,
              color: "#00E5FF",
              fontSize: 16,
            }}
          >
            <span>7+ Countries</span>
            <span>3 Olympic-Level Experts</span>
            <span>7 Programs</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
