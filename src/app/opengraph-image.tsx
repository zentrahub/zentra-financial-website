import { ImageResponse } from "next/og";

export const alt = "Zentra Financial — Premium Tax Strategy & Financial Advisory";
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
          justifyContent: "center",
          padding: "90px",
          backgroundColor: "#000000",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 64,
            height: 98,
            backgroundColor: "#0f705f",
            marginBottom: 56,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 200,
            letterSpacing: "0.01em",
            lineHeight: 1.05,
          }}
        >
          Zentra Financial
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            fontWeight: 300,
            color: "#9a9a9b",
          }}
        >
          Premium Tax Strategy &amp; Financial Advisory
        </div>
      </div>
    ),
    { ...size },
  );
}
