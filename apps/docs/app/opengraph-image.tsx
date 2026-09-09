import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const RAIL_COLORS = [
  "#298bca",
  "#649753",
  "#c66a4a",
  "#f5c542",
  "#ed1b69",
  "#6c4ab6",
];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f3ec",
          color: "#0f0e0c",
          padding: "72px 80px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#6b6558",
          }}
        >
          <div style={{ width: 48, height: 2, background: "#0f0e0c" }} />
          Component Library
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 148,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Modfly UI
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 999,
                background: "#ed1b69",
                marginLeft: 10,
              }}
            />
          </div>
          <div
            style={{
              fontSize: 38,
              color: "#1a1714",
              marginTop: 32,
              maxWidth: 900,
            }}
          >
            Components built for learning.
          </div>
        </div>

        <div style={{ display: "flex", height: 28 }}>
          {RAIL_COLORS.map((color) => (
            <div key={color} style={{ flex: 1, background: color }} />
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
