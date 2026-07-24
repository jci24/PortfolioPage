import { ImageResponse } from "next/og";

export const alt =
  "Jaime Castresana Iza - Software Engineer for technical products, audio, and DSP tools";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "linear-gradient(135deg, #edf7f5 0%, #ffffff 52%, #d7efeb 100%)",
          color: "#12383d",
          display: "flex",
          height: "100%",
          padding: "70px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(18,56,61,.16)",
            borderRadius: "36px",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "54px 58px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              gap: 14,
              letterSpacing: "-0.02em",
            }}
          >
            <span
              style={{
                background: "#178b80",
                borderRadius: 999,
                display: "flex",
                height: 14,
                width: 14,
              }}
            />
            Jaime Castresana Iza
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                display: "flex",
                fontSize: 72,
                fontWeight: 700,
                letterSpacing: "-0.055em",
                lineHeight: 0.98,
                maxWidth: 870,
              }}
            >
              Software engineering for technical products.
            </div>
            <div
              style={{
                color: "#4f686c",
                display: "flex",
                fontSize: 29,
                letterSpacing: "-0.015em",
              }}
            >
              Audio · Acoustics · DSP Tools · Product Software
            </div>
          </div>

          <div
            style={{
              color: "#178b80",
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Copenhagen, Denmark
          </div>
        </div>
      </div>
    ),
    size,
  );
}
