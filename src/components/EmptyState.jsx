/**
 * EventSphere — EmptyState Component
 * Placeholder shown when a list or section has no content.
 */
import React from "react";

export default function EmptyState({
  icon = "🔍",
  title = "Nothing here yet",
  description = "",
  action = null,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        textAlign: "center",
        gap: 12,
      }}
    >
      <span style={{ fontSize: 56, lineHeight: 1 }}>{icon}</span>
      <h3 style={{ color: "#F9F5FF", fontSize: 18, fontWeight: 600, margin: 0 }}>{title}</h3>
      {description && (
        <p style={{ color: "#7B6890", fontSize: 14, maxWidth: 320, margin: 0, lineHeight: 1.6 }}>
          {description}
        </p>
      )}
      {action && <div style={{ marginTop: 8 }}>{action}</div>}
    </div>
  );
}
