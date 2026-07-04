import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

// Shared Open Graph / Twitter card image, generated at request time.
// Used by both app/opengraph-image and app/twitter-image so social shares
// (WhatsApp, Facebook, LinkedIn, X) render a branded preview card.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.tagline}`;

const domain = SITE.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #060b16 0%, #0c1524 45%, #1d2c46 100%)",
          color: "#f7f5ef",
          fontFamily: "sans-serif",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 56,
              height: 6,
              background: "#d4af37",
              borderRadius: 999,
              marginRight: 24,
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 8,
              color: "#e0c05f",
              fontWeight: 600,
            }}
          >
            ADVOCATE · LEGAL CONSULTATION
          </div>
        </div>

        {/* Title + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            {SITE.name}
          </div>
          <div
            style={{
              fontSize: 38,
              color: "#ecd894",
              marginTop: 24,
              maxWidth: 900,
              lineHeight: 1.25,
            }}
          >
            {SITE.tagline}
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(212,175,55,0.35)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 28, color: "#c2ceE0" }}>
            {SITE.phone}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#d4af37", fontWeight: 600 }}>
            {domain}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
