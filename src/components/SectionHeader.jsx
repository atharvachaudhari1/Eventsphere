/**
 * EventSphere — SectionHeader Component
 * Consistent section titles with optional subtitle and action.
 */
import React from "react";

export default function SectionHeader({ title, subtitle = "", action = null, icon = "" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 20,
        flexWrap: "wrap",
      }}
    >
      <div>
        <h2
          style={{
            color: "#F9F5FF",
            fontSize: 22,
            fontWeight: 700,
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {icon && <span>{icon}</span>}
          {title}
        </h2>
        {subtitle && (
          <p style={{ color: "#7B6890", fontSize: 14, margin: "4px 0 0", lineHeight: 1.5 }}>
            {subtitle}
          </p>
        )}
      </div>
      {action && <div style={{ flexShrink: 0 }}>{action}</div>}
    </div>
  );
}
