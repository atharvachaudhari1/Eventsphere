/**
 * EventSphere — StatCard Component
 * Compact stat widget: icon + number + label.
 */
import React from "react";

export default function StatCard({ icon, value, label, color = "#C9A84C", trend = null }) {
  const trendColor = trend > 0 ? "#2ECC71" : trend < 0 ? "#E74C3C" : "#7B6890";
  const trendIcon  = trend > 0 ? "↑" : trend < 0 ? "↓" : "—";

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#2D1F3D,#3D2F50)",
        border: "1px solid #3D2F50",
        borderRadius: 14,
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      <div
        style={{
          width: 48, height: 48, borderRadius: 12,
          background: `${color}22`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span style={{ color: "#F9F5FF", fontSize: 24, fontWeight: 800, lineHeight: 1 }}>
            {value}
          </span>
          {trend !== null && (
            <span style={{ color: trendColor, fontSize: 13, fontWeight: 600 }}>
              {trendIcon} {Math.abs(trend)}%
            </span>
          )}
        </div>
        <div style={{ color: "#7B6890", fontSize: 13, marginTop: 3 }}>{label}</div>
      </div>
    </div>
  );
}
