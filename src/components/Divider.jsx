/**
 * EventSphere — Divider Component
 * Simple horizontal rule with optional label.
 */
import React from "react";

export default function Divider({ label = "", style = {} }) {
  if (!label) {
    return (
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #3D2F50",
          margin: "16px 0",
          ...style,
        }}
      />
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: "16px 0",
        ...style,
      }}
    >
      <div style={{ flex: 1, height: 1, background: "#3D2F50" }} />
      <span style={{ color: "#7B6890", fontSize: 12, fontWeight: 500, whiteSpace: "nowrap" }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: "#3D2F50" }} />
    </div>
  );
}
